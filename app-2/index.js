const express = require("express");

const app = express();
const port = process.env.PORT || 8001;

app.get("/", (req, res) => res.send("Hello, this is app-2"));
app.get("/redirect", (req, res) => {
    res.redirect("http://localhost:8000")
});

app.listen(port, () => {
    console.log(`App 2 listening on port ${port}`)
});
