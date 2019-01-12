var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//index, reserve, table

var reservations = [
    {
        name: "Average Joe",
        phone: "8675309",
        email: "something@somewhere.yes",
        id: "1234567890"
    }
];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res){
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/api/reservations", function(req, res){
    return res.json(reservations);
});


app.post("/table", function(req, res){
    var newReservation = req.body;

    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
});


app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});