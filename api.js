/** @format */
const expres = require("express");
const routes = express.Router();
//get a list of students from the database
routes.get("./students", (res, req) => {
  res.send({ type: "nate" });
});
module.exports = routes;
