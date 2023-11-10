# Linting Documentation

## Overview

This document outlines the linting setup for our Node.js and TypeScript project. We use ESLint for enforcing code quality and style rules, and Prettier for code formatting.

## ESLint

### Configuration

- ESLint is configured via the `.eslintrc` file in the project root.
- We extend the `xo` configuration for a base set of rules, with additional rules for TypeScript provided by `xo-typescript`.
- ESLint's parser options are set to ECMAScript 2021 to support modern JavaScript features.

### Integration with Prettier

- Prettier is integrated into ESLint to handle code formatting.
- `eslint-config-prettier` and `eslint-plugin-prettier` are used to disable ESLint rules that might conflict with Prettier.
- Prettier's rules are defined in the `.prettierrc` file.

### Rules

- The ESLint rules can be customized in the `.eslintrc` file under the `rules` section.
- We have set the `prettier/prettier` rule to `error` to ensure that formatting issues are flagged.

## Prettier

### Configuration

- Prettier is configured via the `.prettierrc` file in the project root.
- The configuration specifies our project's code formatting preferences, such as semicolons, single quotes, and indentation.

### Integration with VSCode

- Prettier is integrated with Visual Studio Code to format code on save.
- The VSCode settings ensure that Prettier is used as the default formatter for JavaScript and TypeScript files.

## VSCode Setup

- Ensure the ESLint and Prettier extensions are installed in VSCode.
- The following settings in VSCode's `settings.json` help maintain consistent formatting:

  ```json
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

## Usage

- To check and fix linting issues, run `npx eslint --fix .` in the project root.
- The pre-commit hooks are configured to run ESLint checks before each commit.

## Continuous Integration

- ESLint checks are integrated into our continuous integration pipeline to ensure code quality and style consistency across the codebase.
