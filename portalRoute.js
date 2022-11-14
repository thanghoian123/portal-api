const portalRoute = require("express").Router();
var bodyParser = require("body-parser");
portalRoute.use(bodyParser.json())
const axios = require("axios");
const baseUrl =
  "https://portaladmin.orientsoftware.net/api/EmployeeTimeSheet/get";

portalRoute.get("/portal", async (req, res) => {
  console.log("-------- portal");
  try {
    const { FromDate, ToDate, EmployeeID } = req.body;
    const resp = await axios.get(
      `${baseUrl}?FromDate=${FromDate}&ToDate=${ToDate}&EmployeeID=${EmployeeID}`
    );
    if (resp && resp?.data) {
      res.send({ portal: resp.data });
    }
  } catch (error) {
    res.status(500);
    res.send({ message: "NGU" });
  }
});

portalRoute.get("/", async (req, res) => {
  console.log("-------- portal");
  try {
    const { FromDate, ToDate, EmployeeID } = req.body;
    const resp = await axios.get(
      `${baseUrl}?FromDate=${FromDate}&ToDate=${ToDate}&EmployeeID=${EmployeeID}`
    );
    if (resp && resp?.data) {
      res.send({ portal: resp.data });
    }
  } catch (error) {
    res.status(500);
    res.send({ message: "NGU" });
  }
});
module.exports = portalRoute;
