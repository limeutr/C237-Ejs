const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', 
    {
        msg: 'Welcome To Task Manager'
    });
});

app.get('/taskDetails', (req,res) => {
    res.render('taskDetails');
});

app.post('/submit', (req, res) => {
    const { name, email, contactNo, message, comments } = req.body;
    res.render('submitted', { name, email, contactNo, message, comments });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submitTask', (req, res) => {
    const { title, description, deadline, priority } = req.body;
    res.render('confirmation', { title, description, deadline, priority });
});


const PORT = process.env.PORT || 3011;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});