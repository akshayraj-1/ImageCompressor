const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const homeRoute = require("./routes/home");
const PORT = process.env.PORT || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", homeRoute);

app.use("*", (req, res) => res.render("404"));


app.post("/compress", (req, res) => {
    console.log(req.file);
    res.json({success: true, message: req.file.filename});
});

app.listen(PORT, (error) => console.log(error ? `Error: ${error}` : `Server running on port ${PORT}`));
