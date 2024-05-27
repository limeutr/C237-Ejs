const express = require('express');
const app = express();

// Setting EJS as the view engine
app.set('view engine', 'ejs');

app.get('/normal_way', (req, res) => {
    const name = "Jack";
    const msg = "How are you?";
    res.write('<h1>' + name + '</h1>');
    res.write('Hello there, ' + msg);
    res.end(); // doing this is okay if little text

    //new
    //res.sendFile(__dirname + '/index.html'); -> better way
    // to send long texts instead of using write.write.write.
});

app.get('/ejs_way', (req, res) => {
    const name = "Jack";
    const msg = "How are you?";
    res.render('greeting', { name: name, greeting: msg });
});

// Define a route to render the ejs page
app.get('/ejs_way_many', (req, res) => {
    const names = ["Jack", "Alice", "Bob", "Charlie", "Sienna", "Jackal"];
    res.render('greeting_many', { names: names });
});


// Start the server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});




