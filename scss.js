const shared = require("./shared")

module.exports = {
  defaultSeverity: "warning",
  extends: [...shared.extends, "stylelint-config-standard-scss"],
  plugins: [...shared.plugins, "stylelint-scss"],
  rules: {
    ...shared.rules,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer"]
      }
    ]
  },
  "function-no-unknown": null,
  "scss/function-no-unknown": [
    true,
    {
      ignoreFunctions: ["screen", "theme"]
    }
  ]
}
