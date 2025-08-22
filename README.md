# ainu-mcp

This repository demonstrates how AINU agents can seamlessly use remote MCP server tools alongside local tools.

![AINU Banner](/public/ainubanner.png)

The agent is built using [`@ainulabs/ainu`](https://github.com/AINU-Labs/ainu).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AINU-Labs/ainu-mcp.git
   cd ainu-mcp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Fill in your API keys in `.env`:
     - `ANTHROPIC_API_KEY`: Your Anthropic API key for the AI agent.

4. **Run the code:**
   ```bash
   npm start
   ```

## Overview

This repository contains the following files:

- `src/agent.ts`: Defines the agent and its capabilities.
- `src/app.ts`: Sets up the express 'remote' service as the gateway to the MCP server
- `src/index.ts`: Orchestration function to run the example
- `src/server.ts`: Creates the MCP server
- `tests/index.test.ts`: Contains test cases for the application.

This structure ensures modularity and clarity, making it easy to extend and maintain.

### Sample Output

```
Server is running on http://localhost:3000
Available tools: getLocation, getWeather
AI: I'll help you find out the weather in your current location. First, I'll retrieve your location and then check the weather for you.
AI: Now, I'll fetch the current weather for New York:
AI: Based on the results, the current weather in your location (New York) is sunny. It looks like a nice day outside!
```
