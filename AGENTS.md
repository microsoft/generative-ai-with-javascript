# AGENTS.md

## Project Overview

This repository is a comprehensive learning course called "Generative AI for Beginners with JavaScript". It teaches developers how to integrate Generative AI into JavaScript applications through a time-traveling narrative where learners interact with historical figures.

**Key Technologies:**
- JavaScript/Node.js (ES Modules)
- TypeScript (for some lessons)
- OpenAI SDK
- Model Context Protocol (MCP)
- Express.js (for web applications)
- GitHub Models (free AI model access)
- Azure OpenAI (optional alternative)

**Architecture:**
- Multi-package learning repository (not a monorepo, but lesson-based structure)
- Each lesson in `/lessons/` contains standalone sample applications
- Main companion app in `/app/` directory for character interactions
- Video content and demos in `/videos/`
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
├── videos/           # Video session content and demos
└── .devcontainer/    # GitHub Codespaces configuration
```

## Setup Commands

**Prerequisites:**
- Node.js 20 or higher
- GitHub account (for GitHub Models access)
- Optional: Personal Access Token (PAT) if running locally

**Initial Setup:**

```bash
# Clone the repository
git clone https://github.com/microsoft/generative-ai-with-javascript.git
cd generative-ai-with-javascript

# Install root dependencies
npm install

# For GitHub Codespaces users (recommended):
# The environment is pre-configured - no additional setup needed
# Use built-in GITHUB_TOKEN environment variable

# For local development:
# 1. Create a GitHub Personal Access Token (PAT) at https://github.com/settings/tokens
# 2. Set it as an environment variable: export GITHUB_TOKEN=your_token_here
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
   - Node.js 20
   - VSCode extensions (EditorConfig, Code Runner, REST Client)
   - Ollama with phi3 and all-minilm models
   - `GITHUB_TOKEN` automatically available
4. Navigate to any lesson or app directory and run `npm install && npm start`

### Local Development

1. Ensure Node.js 20+ is installed
2. Set `GITHUB_TOKEN` environment variable
3. Navigate to the directory you want to work with
4. Run `npm install` followed by `npm start`

### Environment Variables

- `GITHUB_TOKEN` - Required for GitHub Models API access
  - Automatically available in GitHub Codespaces
  - Must be set manually for local development
- No scopes/permissions needed for the token when using GitHub Models

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

This is primarily an educational repository focused on tutorial content. There are no automated unit or integration tests for the code samples.

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

4. **Verify GitHub Models integration:**
   - Ensure `GITHUB_TOKEN` is set
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

## GitHub Models Integration

**Primary AI Service:**

This course uses GitHub Models for free access to AI capabilities. All code examples are configured to work with GitHub Models by default.

**API Configuration:**

```javascript
import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
});
```

**Available Models:**

- `gpt-4o` - Primary model used in examples
- `gpt-4o-mini` - Lightweight alternative
- Access via GitHub Models marketplace: https://github.com/marketplace/models

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

**GitHub Models authentication issues:**

```bash
# Verify token is set
echo $GITHUB_TOKEN

# For Codespaces: Token is automatically available
# For local: Create PAT at https://github.com/settings/tokens
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
- Video content supplements written lessons

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
- Use streaming for better UX in production apps (see lesson 10)
