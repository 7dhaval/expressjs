const express = require('express');
const app = express();

// app.get(route, callback)
app.get("/", (req,res) => {
    res.send("Hello ExpressJS");
});

app.get("/about", (req,res) => {
    res.send("Welcome to about page");
});

app.listen(8000, () => {
    console.log("8000 port is open");
})