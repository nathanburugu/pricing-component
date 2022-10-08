/** @format */

const express = require("express");
const routes = require("./routes/api");
app.use(routes);
//to set up terminal
const app = express();
app.listen(process.env.port || 4000, () => {
  console.log("Now listening for requests on: http//localhost: 4000");
});
