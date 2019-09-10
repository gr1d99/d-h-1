const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => res.send("Hello, this is app-1"));
app.get("/redirect", (req, res) => {
    res.redirect("http://localhost:8001")
});

app.listen(port, () => {
    console.log(`App 1 listening in port ${port}`)
});
