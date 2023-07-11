module.exports = {
  "extends": ["@mate-academy/eslint-config-react-typescript", "plugin:cypress/recommended"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "max-len": ["error", {
      "ignoreTemplateLiterals": true,
      "ignoreComments": true
    }],
    "jsx-a11y/label-has-associated-control": ["error", {
      "assert": "either"
    }]
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "extends": ["@mate-academy/eslint-config-react-typescript"]
    },
    {
      "files": ["tailwind.config.js"],
      "parserOptions": {
        "project": null
      }
    }
  ]
};
