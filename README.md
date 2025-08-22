# AINU Starter Template

This repository provides a minimal setup for building AI agents using the [`@ainulabs/ainu`](https://www.npmjs.com/package/@ainulabs/ainu) framework.

![AINU Banner](/public/ainubanner.png)

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Overview](#overview)
- [NPM Scripts](#scripts)

## Features

- TypeScript support
- Jest for testing
- Example agent implementation

## Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start developing:

   ```bash
   npm run dev
   ```

3. Running the code:
   ```bash
   npm start
   ```

## Overview

The agent workflow consists of several key steps:

1.  **Provider Setup**: Configure a provider to handle communication with the underlying AI model.
2.  **Tool Definition**: Create tools (such as a weather tool) that define specific tasks the agent can perform, including input validation and custom logic.
3.  **Agent Creation**: Instantiate the agent, supplying the provider, tools, and settings to control its behavior and capabilities.
4.  **Prompt Handling**: Send a prompt to the agent and receive a structured result, which may include multiple steps if the agent chains tool calls or reasoning steps.
5.  **Result Processing**: Inspect the output, including any intermediate steps, to understand how the agent arrived at its final answer.

This structure allows for flexible, modular agent design and clear separation of responsibilities.

### Sample Output

```
User: What is the weather in london?
Starting to fetch weather for london...
Fetch duration: 1002ms
AI: The weather in london is Sunny, 25°C.
```

## Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run build` | Compile TypeScript to `dist/`           |
| `npm start`     | Build and run the agent from `dist/`    |
| `npm run dev`   | Run in watch mode for rapid development |
| `npm test`      | Run tests with Jest                     |
