const express = require("express");
const { Router } = require("express");
const db = require("./config/mongoose");
const ToDoApp = require("./model/todoapp");
const path = require("path");
const app = express();
const port = 8000;

/// setting up ejs template in order for the applcation to work properly
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//// added assests folder although no serparate page css is used might be handy in future updates
app.use(express.static("assets"));
app.use(express.urlencoded());
app.use(express.json());


//// setting up the route part for the application
app.use("/", require("./router"));



//// error handeling and establishing connection to the post 8000
app.listen(port, (err) => {

    if (err) {
        console.log("something went wrong");
        return;
    }
    console.log(path.join(__dirname, "views"))
    console.log(`running successfully on port ${port}`);
    console.log(`url => http://localhost:${port}`)

});