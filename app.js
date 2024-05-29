const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 8000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {title: "hello"});
});

app.post("/compress", (req, res) => {
    console.log(req.file);
    res.json({success: true, message: req.file.filename});
});

app.listen(port, (error) => console.log(error ? `Error: ${error}` : `Server running on port ${port}`));
