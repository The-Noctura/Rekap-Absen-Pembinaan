const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const ADMIN = {
    username: "admin",
    password: "12345"
};

app.post("/login", (req, res) => {
    const {username, password } = req.body;

    if (username === ADMIN.username && password === ADMIN.password) {
        return res.redirect("/absen.html")
    }

    res.send("Login gagal. Username atau password salah.");
});

app.listen(3000, () => console.log("Server berjalan di https://localhost:3000"));