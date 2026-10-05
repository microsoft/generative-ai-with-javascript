# AGENTS.md

## Project Overview

This repository is a comprehensive learning course called "Generative AI for Beginners with JavaScript". It teaches developers how to integrate Generative AI into JavaScript applications through a time-traveling narrative where learners interact with historical figures.

**Key Technologies:**
- JavaScript/Node.js (ES Modules)
- TypeScript (for some lessons)
- OpenAI SDK
- Model Context Protocol (MCP)
- Express.js (for web applications)
- Microsoft Foundry or another OpenAI-compatible model provider

**Architecture:**
- Multi-package learning repository (not a monorepo, but lesson-based structure)
- Each lesson in `/lessons/` contains standalone sample applications
- Main companion app in `/app/` directory for character interactions
- Documentation in `/docs/`

## Repository Structure

```
/
├── app/              # Main companion app for interacting with historical characters
├── lessons/          # 8 lesson directories, each with sample code and solutions
│   ├── 01-intro-to-genai/
│   ├── 02-first-ai-app/
│   ├── 03-prompt-engineering/
│   ├── 04-structured-output/
│   ├── 05-rag/
│   ├── 06-tool-calling/
│   ├── 07-mcp/
│   └── 08-mcp-advanced/
├── docs/             # Setup guides and additional resources
└── .devcontainer/    # GitHub Codespaces configuration
```

## Setup Commands

**Prerequisites:**
- Node.js Long Term Support (LTS)
- Microsoft Foundry model deployment or another OpenAI-compatible provider
- Provider endpoint, API key, and model deployment name

**Initial Setup:**

```bash
# Clone the repository
git clone https://github.com/microsoft/generative-ai-with-javascript.git
cd generative-ai-with-javascript

# Install root dependencies
npm ci

# Copy the environment template and add your provider settings
cp .env.example .env
```

**Running the Main Companion App:**

```bash
cd app
npm install
npm start
# Access at http://localhost:3000 or use "Open in Browser" in Codespaces
```

**Working with Individual Lessons:**

Each lesson has its own package.json. Navigate to the specific lesson directory:

```bash
cd lessons/02-first-ai-app/sample-app
npm install
npm start
```

## Development Workflow

### GitHub Codespaces (Recommended)

1. Fork the repository
2. Create a Codespace from your fork
3. Pre-configured environment includes:
   - Node.js LTS
   - VSCode extensions (EditorConfig, Code Runner, REST Client)
   - Ollama with phi3 and all-minilm models
4. Configure the repository-root `.env` file.
5. Navigate to any lesson or app directory and run `npm ci && npm start`

### Local Development

1. Install Node.js LTS.
2. Copy `.env.example` to `.env`.
3. Set `AI_ENDPOINT`, `AI_API_KEY`, and `AI_MODEL`.
4. Navigate to the directory you want to work with.
5. Run `npm ci` followed by `npm start`.

### Environment Variables

- `AI_ENDPOINT` - OpenAI-compatible API base URL
- `AI_API_KEY` - API key for the configured provider
- `AI_MODEL` - Model deployment name used in requests

## Working with Lessons

Each lesson follows a consistent structure:

- `README.md` - Main lesson content with narrative and technical instructions
- `sample-app/` or `code/` - Starting code for exercises
- `solution/` - Complete solution code
- `translations/` - Lesson translations in various languages

**To work on a lesson:**

```bash
cd lessons/<lesson-number>-<lesson-name>/sample-app
npm install
npm start
```

**For TypeScript-based lessons (MCP lessons 07-08):**

```bash
cd lessons/07-mcp/solution
npm install
npm run build    # Compiles TypeScript to build/ directory
npm run client   # Runs the MCP client
npm run inspect  # Runs MCP inspector tool
```

## Testing Instructions

**Current Testing Setup:**

The repository has automated tests for the companion app, lesson samples, MCP builds, and documentation publication.

Run all tests:

```bash
npm test
```

**Manual Testing Approach:**

1. **Validate lesson code by running it:**
   ```bash
   cd lessons/<lesson-name>/sample-app
   npm install
   npm start
   ```

2. **Test the companion app:**
   ```bash
   cd app
   npm install
   npm start
   # Interact with characters through the web interface
   ```

3. **For MCP lessons, use the inspector tool:**
   ```bash
   cd lessons/07-mcp/solution
   npm run build
   npm run inspect
   # Test individual tools:
   npx @modelcontextprotocol/inspector --cli node build/index.js --method tools/call --tool-name add --tool-arg a=1 --tool-arg b=3
   ```

4. **Verify model integration:**
   - Ensure `AI_ENDPOINT`, `AI_API_KEY`, and `AI_MODEL` are set
   - Run any lesson sample that calls OpenAI APIs
   - Verify responses are generated successfully

## Code Style Guidelines

**JavaScript/TypeScript Conventions:**

- Use ES Modules (`type: "module"` in package.json)
- Use `async/await` for asynchronous operations
- Prefer `const` over `let`, avoid `var`
- Use template literals for string interpolation
- Follow existing code patterns in each lesson

**File Organization:**

- Keep lesson code self-contained within lesson directories
- Place shared resources in `/docs/` or `/assets/`
- Character data stored in `app/public/characters.json`
- TypeScript source in `src/`, compiled output in `build/`

**TypeScript (where applicable):**

- Target: ES2022
- Module: Node16
- Strict mode enabled
- Output to `build/` directory

**Import/Export Patterns:**

```javascript
// ES Module imports
import { OpenAI } from 'openai';
import express from 'express';

// Default exports for apps
export default app;
```

**Naming Conventions:**

- Use camelCase for variables and functions
- Use PascalCase for classes and constructors
- Prefix directories with numbers for lessons (e.g., `01-intro-to-genai`)
- Use kebab-case for directory names

## Build and Deployment

**Building TypeScript Lessons:**

```bash
cd lessons/07-mcp/solution
npm run build
# Output: build/ directory with compiled JavaScript
```

**Deployment:**

The repository uses GitHub Pages for documentation hosting:

```bash
npm run build     # Builds documentation site
# Deployment handled by .github/workflows/deploy.yml
```

**GitHub Actions Workflows:**

- `deploy.yml` - Deploys to GitHub Pages
- `links.yml` - Checks for broken links (weekly schedule)
- `profanity.yml` - Filters inappropriate content in PRs
- `spelling.yml` - Spell checks documentation

## Model Provider Integration

**Primary AI Service:**

This course uses Microsoft Foundry by default. The samples can also use another OpenAI-compatible provider.

**API Configuration:**

```javascript
import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: process.env.AI_ENDPOINT,
  apiKey: process.env.AI_API_KEY,
});
```

Set `AI_MODEL` to the exact deployment name in Microsoft Foundry.

## Monorepo Navigation Tips

While not a true monorepo, this repository contains multiple independent packages:

**Finding Lesson Packages:**

```bash
# List all lesson directories
ls lessons/

# Find all package.json files
find . -name "package.json" -not -path "*/node_modules/*"

# Jump to a specific lesson
cd lessons/03-prompt-engineering/sample-app
```

**Package Locations:**

- Root: `/package.json` (minimal dependencies: openai, tsx)
- Main App: `/app/package.json` (Express app with OpenAI)
- Each Lesson: `lessons/<lesson>/sample-app/package.json` or `code/package.json`
- Solutions: `lessons/<lesson>/solution/package.json`

**Working Across Packages:**

Each package is independent - install dependencies in each directory you work with:

```bash
cd lessons/05-rag/sample-app && npm install
cd ../../06-tool-calling/solution && npm install
```

## Common Development Tasks

**Adding a New Lesson Sample:**

1. Create lesson directory: `lessons/XX-lesson-name/`
2. Add `README.md` with lesson content
3. Create `sample-app/` with starter code
4. Create `solution/` with complete code
5. Add package.json with required dependencies
6. Update main README.md and `_sidebar.md`

**Running Spell Check:**

```bash
# Triggered via GitHub Actions workflow
# Checks: README.md and lessons/01-intro-to-genai/README.md
```

**Testing Links:**

```bash
# Runs automatically weekly via GitHub Actions
# Or trigger manually via workflow_dispatch
```

## Character App Specifics

The companion app (`/app/`) allows interaction with historical AI characters.

**Key Files:**

- `app.js` - Express server and OpenAI integration
- `public/characters.json` - Character definitions and system prompts
- `public/index.html` - Frontend interface
- `views/` - EJS templates

**Character Configuration:**

Edit `public/characters.json` to:
- Add new characters
- Modify character descriptions (used as system prompts)
- Change character personalities

**Adding Background Audio (Optional):**

1. Download royalty-free music
2. Place in `public/audio/` as `<character-name>.mp3`
3. Uncomment audio code in `index.html`

## Troubleshooting

**"Cannot find module" errors:**

```bash
# Ensure you're in the correct directory with package.json
cd lessons/<lesson-name>/sample-app
npm install
```

**Model provider authentication issues:**

```bash
# Verify the configuration names without printing the API key
printf '%s\n' "$AI_ENDPOINT" "$AI_MODEL"
```

**TypeScript compilation errors:**

```bash
cd lessons/07-mcp/solution
# Check tsconfig.json exists
npm install
npm run build
```

**Port already in use:**

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port in your app configuration
```

## Additional Notes

**Responsible AI:**

This repository contains fictional AI-generated content. Historical characters generate responses via AI based on training data, not actual historical views. Content is for educational and entertainment purposes only.

**Educational Focus:**

- Each lesson builds progressively on previous concepts
- Narrative-driven learning with time-travel story
- Hands-on coding exercises with solutions provided

**Contributing:**

- See `.github/CONTRIBUTING.md` for contribution guidelines
- Follow existing code patterns and structure
- Add translations in `lessons/<lesson>/translations/`
- Use issue templates in `.github/ISSUE_TEMPLATE/`

**Community Resources:**

- Discord: https://discord.gg/kzRShWzttr
- Azure AI Foundry Forum: https://aka.ms/foundry/forum
- Related courses linked in main README.md

**Performance Considerations:**

- GitHub Codespaces requires 16GB RAM (configured in devcontainer.json)
- Ollama models (phi3, all-minilm) pre-installed in Codespaces
- Keep lesson samples lightweight and focused
- Use streaming for a better user experience in production apps.
