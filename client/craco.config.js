const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#226BD6", "@font-family": "Lato" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
