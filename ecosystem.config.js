module.exports = {
  apps: [
    {
      name: "pavlo.dev",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
