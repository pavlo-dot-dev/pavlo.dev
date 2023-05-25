const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

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
