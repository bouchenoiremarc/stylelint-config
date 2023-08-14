const shared = require("./shared")

module.exports = {
  defaultSeverity: "warning",
  extends: [...shared.extends, "stylelint-config-standard"],
  plugins: shared.plugins,
  rules: {
    ...shared.rules,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "layer"]
      }
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["screen", "theme"]
      }
    ]
  }
}
