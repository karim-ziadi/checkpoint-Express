const express = require("express");
const app = express();
app.use(logger);

function logger(req, res, next) {
    var hours = new Date().getHours();
    var today = new Date();

    var day = today.toString().split(" ")[0];

    var workDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    if (workDay.includes(day)) {
        if (9 < hours && hours < 17) {
            next();
        } else {
            res.send("Oups this hour is not in the working hours !");
        }
    } else {
        res.send("Oups this day is not a working day! ");
    }
}

app.use(express.static("Public"));
app.use(express.static("style"));
app.use(express.static("img"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/Public/Home.html");
});

app.get("/Service", function (req, res) {
    res.sendFile(__dirname + "/Public/Service.html");
});
app.get("/Contact", function (req, res) {
    res.sendFile(__dirname + "/Public/Contact.html");
});

const port = 4000;
app.listen(port, function () {
    console.log(`app running  on ${port}`);
});
