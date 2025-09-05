# @diversifi/config

This package contains shared configuration files for diversifi applications.

## Usage

### TypeScript

```json
{
  "extends": "@diversifi/config/typescript/nextjs.json"
}
```

### ESLint

```js
module.exports = {
  extends: ["@diversifi/config/eslint-preset"],
};
```

### Tailwind CSS

```js
module.exports = {
  presets: [require(\"@diversifi/config/tailwind\")]
};
```

## Configurations

The package includes the following configurations:

- TypeScript configurations for different project types
- ESLint configurations
- Tailwind CSS configurations
- Prettier configurations
