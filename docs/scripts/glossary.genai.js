// GenAIScript to create a shared glossary from markdown files in lessons
script({
  title: "Generate Glossary from Lessons",
  description: "Process all markdown files under /lessons/** to create a shared glossary.md file",
  parameters: {
    force: {
      type: "boolean",
      description: "Force regeneration of the entire glossary",
      default: false,
    },
  },
});

// Find all markdown files under lessons, excluding translations
const files = await workspace.findFiles("lessons/**/*.md", {
  ignore: "**/translations/**",
});

console.log(`Found ${files.length} markdown files to process`);

// Check if glossary.md already exists
const glossaryPath = "glossary.md";
let existingGlossary = "";
try {
  const glossaryFile = await workspace.readText(glossaryPath);
  existingGlossary = glossaryFile?.content || "";
  console.log("Found existing glossary.md, will extend it");
} catch (error) {
  console.log("No existing glossary.md found, will create new one");
}

// Extract existing terms from glossary if it exists
const existingTerms = new Set();
if (existingGlossary) {
  const termMatches = existingGlossary.matchAll(/^- \*\*([^*]+)\*\*/gm);
  for (const match of termMatches) {
    existingTerms.add(match[1].toLowerCase());
  }
  console.log(`Found ${existingTerms.size} existing terms in glossary`);
}

// Process each markdown file
let allContent = "";
for (const file of files) {
  console.log(`Processing: ${file.filename}`);
  const fileContent = await workspace.readText(file.filename);
  const content = fileContent?.content || "";
  allContent += `\n\n--- ${file.filename} ---\n\n${content}`;
}

// Create the prompt for extracting technical terms
const { text: newTermsResponse } = await prompt`
You are tasked with creating a comprehensive glossary of technical terms from the provided content.

## Content to analyze:
${allContent}

## Instructions:
1. Extract technical terms related to:
   - Generative AI and Machine Learning concepts
   - Programming and development terms
   - Web development technologies
   - APIs and software development concepts
   - AI/ML frameworks and tools
   - Data science and computational terms

2. For each term, provide a concise one-line definition (maximum 20 words)

3. Focus on terms that would be valuable for developers learning about AI and JavaScript

4. Exclude common programming terms that most developers would know (like "function", "variable", "array") and historical terms that are only there for the storytelling aspect of the lessons.

5. Format each entry as: **Term**: Definition

${
  existingTerms.size > 0
    ? `## Existing terms to avoid duplicating:
${Array.from(existingTerms).join(", ")}`
    : ""
}

## Output format:
Provide only the glossary entries, one per line, sorted alphabetically. Do not include any headers, explanations, or other text.
`;

// Combine existing and new terms
let finalGlossary = "";

if (existingGlossary && !env.vars.force) {
  // Parse existing glossary and add new terms
  const lines = existingGlossary.split("\n");
  const headerEndIndex = lines.findIndex(
    (line) => line.trim() === "" && lines[lines.indexOf(line) - 1]?.includes("technical terms")
  );

  if (headerEndIndex > 0) {
    // Keep existing header
    finalGlossary = lines.slice(0, headerEndIndex + 1).join("\n") + "\n";
  } else {
    // Create new header
    finalGlossary = `# Glossary\n\nA comprehensive list of technical terms used throughout the lessons.\n\n`;
  }

  // Get existing entries
  const existingEntries = [];
  const termPattern = /^- \*\*([^*]+)\*\*: (.+)$/gm;
  let match;
  while ((match = termPattern.exec(existingGlossary)) !== null) {
    existingEntries.push({ term: match[1], definition: match[2] });
  }

  // Parse new entries
  const newEntries = [];
  const newTermLines = newTermsResponse.split("\n").filter((line) => line.trim());
  for (const line of newTermLines) {
    const termMatch = line.match(/\*\*([^*]+)\*\*:\s*(.+)/);
    if (termMatch) {
      const term = termMatch[1].trim();
      const definition = termMatch[2].trim();
      if (!existingTerms.has(term.toLowerCase())) {
        newEntries.push({ term, definition });
      }
    }
  }

  // Combine and sort all entries
  const allEntries = [...existingEntries, ...newEntries];
  allEntries.sort((a, b) => a.term.toLowerCase().localeCompare(b.term.toLowerCase()));

  // Add all entries to glossary
  for (const entry of allEntries) {
    finalGlossary += `- **${entry.term}**: ${entry.definition}\n`;
  }

  console.log(`Added ${newEntries.length} new terms to existing glossary`);
} else {
  // Create completely new glossary
  finalGlossary = `# Glossary\n\nA comprehensive list of technical terms used throughout the lessons.\n\n`;

  const newTermLines = newTermsResponse.split("\n").filter((line) => line.trim());
  const entries = [];

  for (const line of newTermLines) {
    const termMatch = line.match(/\*\*([^*]+)\*\*:\s*(.+)/);
    if (termMatch) {
      entries.push({ term: termMatch[1].trim(), definition: termMatch[2].trim() });
    }
  }

  entries.sort((a, b) => a.term.toLowerCase().localeCompare(b.term.toLowerCase()));

  for (const entry of entries) {
    finalGlossary += `- **${entry.term}**: ${entry.definition}\n`;
  }

  console.log(`Created new glossary with ${entries.length} terms`);
}

// Write the glossary file
await workspace.writeText(glossaryPath, finalGlossary);
console.log(`Glossary saved to ${glossaryPath}`);
