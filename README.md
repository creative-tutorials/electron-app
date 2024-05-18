# Electron Starter App with Bun

This repository provides a well-structured, ready-to-use starter project for building desktop applications using Electron and the blazing-fast Bun JavaScript runtime.

**Features:**

- **Electron Integration:** A streamlined setup for building cross-platform desktop apps with native functionalities.
- **Typescript Support:** Benefit from type safety and improved code maintainability with built-in Typescript support.
- **Bun Integration:** Make use of Bun’s outstanding performance for more efficient experience and that would make applications faster.

**Getting Started:**

1. **Prerequisites:**

   - Node.js (version 18 or later) installed: <https://nodejs.org/en/download>
   - Bun installed: <https://bun.sh/docs/installation>

1. **Clone the Repository:**

```bash
gh repo clone creative-tutorials/electron-app
```

1. **Install Dependencies**

```bash
bun install
```

2. **Run the app**

```bash
bun run start
```

> [!NOTE]
> This command starts the development server and opens the application in a new window.

Project Structure:

- main.js: The primary entry point of the application. It creates the Electron window and handles its lifecycle.
- index.html: This is the template for the Electron window.
- package.json: Contains project metadata, dependencies, and scripts.

## Typescript Setup

The project utilizes Typescript for enhanced code clarity and maintainability. You can leverage code editors like VS Code or editors with Typescript plugins to benefit from type checking and code completion.

### Bun Integration

For faster development and the possible increase in the speed of application execution, this project is designed using Bun. You'll have a lot easier time developing your project because of Bun's improved performance.

### Customization

Modify the `main.js` file to create your desired functionality.
The package.json file allows you to personalize project details and scripts.

### Contributing

We welcome contributions to this project! Feel free to submit pull requests with bug fixes, enhancements, or new features.

### License

This project is licensed under the MIT License (see LICENSE file).

> [!TIP]
> This Readme provides a comprehensive guide to utilizing your starter project effectively. Happy Electron development with Bun!
