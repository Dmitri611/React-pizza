const plugins = [
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      alias: {
        components: "./src/components",
      },
    },
  ],
];
