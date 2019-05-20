const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 9999;
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/demo",function (req, res) {
    res.send("OK!")
});
app.post("/register",function (req, res) {
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;
    res.send("INFOR: Fullname: "+fullname+" username: "+username+" Password: "+password);
});
app.listen(port, function () {
    console.log("Nguyen");
})