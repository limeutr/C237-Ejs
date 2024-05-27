const express = require('express');
const app = express();

// Setting EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the ejs page
app.get('/*', (req, res) => {
    const snacksList = ['Crackers','Nuts','Popcorn'];
    const dairyList = ['Butter', 'Milk','Sliced Cheese','Greek Yoghurt']
    res.render('dairy', { snacksList, dairyList });
});

// Start the server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
