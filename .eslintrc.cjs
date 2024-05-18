module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: ["warn", "double"],
    "jsx-quotes": ["warn", "prefer-double"],
    "no-var": "error",
    eqeqeq: ["error", "always"],
    "no-console": "warn",
    "react/prop-types": "off",
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ]
  }
}
