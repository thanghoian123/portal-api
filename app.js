const express = require("express");
const portalRoute = require("./portalRoute");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/", portalRoute);

app.listen(process.env.PORT || 3000);
