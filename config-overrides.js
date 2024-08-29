const {
  override,
  addLessLoader,
  addWebpackAlias,
  fixBabelImports,
} = require("customize-cra-5");
const path = require("path");

// 重写 addPostcssPlugins 方法
const addPostcssPlugins = (plugins) => (config) => {
  const rules = config.module.rules.find((rule) =>
    Array.isArray(rule.oneOf)
  ).oneOf;
  rules.forEach(
    (r) =>
      r.use &&
      r.use.forEach((u) => {
        if (
          u.options &&
          u.options.postcssOptions &&
          u.options.postcssOptions.ident === "postcss"
        ) {
          if (!u.options.postcssOptions.plugins) {
            u.options.postcssOptions.plugins = plugins;
          }
          if (u.options.postcssOptions.plugins) {
            const originalPlugins = u.options.postcssOptions.plugins;
            u.options.postcssOptions.plugins = [originalPlugins, ...plugins];
          }
        }
      })
  );
  return config;
};

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: "[local]--[hash:base64:5]",
      // modifyVars: { '@primary-color': '#1DA57A' }, // 你的主题色
    },
  }),
  addPostcssPlugins([
    [
      "postcss-pxtorem",
      {
        rootValue: 37.5, // 根据设计稿大小设置，这里默认以iPhone 6/7/8为基准
        propList: ["*", "!font-size"],
        minPixelValue: 2,
        exclude: /node_modules/i,
      },
    ],
  ]),
  addWebpackAlias({
    "@": path.resolve("./src"),
  })
);
