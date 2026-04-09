const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/register', (req, res) => {
    const { name, email, phone } = req.body;

    const data = `Name: ${name}, Email: ${email}, Phone: ${phone}\n`;

    fs.appendFile('data.txt', data, (err) => {
        if (err) throw err;
    });

    res.send("Registration Successful!");
});

// Run server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
