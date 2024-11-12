# React Fundamentals

This repository covers the basics of React, with a custom setup using Webpack and Babel for transpiling modern JavaScript and JSX.

## Project Structure

- **React** and **ReactDOM** for creating and rendering components.
- **Webpack** for module bundling.
- **Babel** for transpiling ES6+ and JSX code to browser-compatible JavaScript.

## Prerequisites

- **Node.js** and **npm** (or **yarn**) installed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Agos091/React-Fundamentals.git
   ```

2. Install dependencies:

   ```bash
   cd React-Fundamentals
   npm install
   ```

## Available Scripts

- **`npm run build`**: Builds the project for production.
- **`npm run dev`**: Starts the development server with Webpack Dev Server.

## Babel Configuration

`.babelrc` file:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## File Structure

- **src/**
  - **App.js**: Main component.
  - **index.js**: Entry point for rendering.
- **public/**
  - **index.html**: Basic HTML structure with the `#root` div for React.

## Webpack Configuration

In `webpack.config.js`:

- **Entry** is set to `src/index.js`.
- **Output** goes to `build/`.
- **Plugins**:
  - `HtmlWebpackPlugin` to inject the bundle into HTML.
  - `CleanWebpackPlugin` to clear the output directory on each build.

## Dependencies

- **React** and **ReactDOM** for creating UI.
- **Webpack** and **Webpack CLI** for bundling.
- **Babel** and presets to transpile ES6+ and JSX.

## Component Example

**App.js**:

```javascript
import React from "react";
function App() {
  return <h1>First Component</h1>;
}
export default App;
```

**index.js**:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```
