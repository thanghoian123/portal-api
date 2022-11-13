const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");

const app = express();
const baseUrl =
  "https://portaladmin.orientsoftware.net/api/EmployeeTimeSheet/get";

app.use(bodyParser.json());
app.get("/", async (req, res) => {
  res.send("hello world");
});
app.get("/portal", async (req, res) => {
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

app.listen(process.env.PORT || 3000)
