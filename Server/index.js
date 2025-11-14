const express = require("express");
const app = express();
const dashboardRouter = require("./modules/dashboard");

app.use("/api", dashboardRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
