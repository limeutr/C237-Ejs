// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Define a route to render the index page
app.get('/', (req, res) => {
    res.render('index', {
        name: 'Peter',
        age: 28 // Adding age variable
    });
});

//Define a route to render the contact us page
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body; // Including additional form field "message"
    res.render('submitted', { name, email, message });
});

// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});