module.exports = {
  "stories": [
    "../projects/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5",
  },
}