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
    if(FromDate&&ToDate&&EmployeeID){
      const resp = await axios.get(
        `${baseUrl}?FromDate=${FromDate}&ToDate=${ToDate}&EmployeeID=${EmployeeID}`
      );
      if (resp && resp?.data) {
        res.send({ portal: resp.data });
      }
    }else{
      res.send("NGU")
    }
   
  } catch (error) {
    // res.status(500);
    res.send({ message: "NGU" });
  }
});

portalRoute.get("/", async (req, res) => {
  console.log("-------- home");
  res.send("home")

});
module.exports = portalRoute;
