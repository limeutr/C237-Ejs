const express = require('express');
const app = express();

// Setting EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the ejs page
app.get('/fruits', (req, res) => {
    const fruitsList = ['Apple','Banana','Orange','Mango','Grapes'];
    res.render('fruits', {fruitsList});
});

// Start the server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
