const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Welcome to Home page ;)");
});

app.get("/about", (req,res) => {
    res.send("About Us page;)");
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`);
});