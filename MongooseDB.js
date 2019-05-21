var express = require('express');
app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const port = 9999;
var routing = require("./route/AppRoute");
app.set("view engine","ejs");

//sua default
app.set("views","./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var url = 'mongodb://nmquang:quang123456@ds123603.mlab.com:23603/demo_mongodb'
mongoose.connect(url,{ useNewUrlParser: true },function (err, db) {
    if(err){
        console.log("Connect fail")
    }
    else {
        console.log("Connect success!!")
    }
});
app.listen(9999,function () {
    console.log("App listening port 9999...")
});
routing.routing(app);






