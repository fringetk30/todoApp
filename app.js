const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();


//set up template engine

app.set('view engine', 'ejs');

//static files

app.use(express.static('./public'));

// fir controllers
//todoController(app);

app.get('/todo', (req, res) => {
    res.sendFile(__dirname +'/todo.html');
});
//listen  port


app.listen(3500);
console.log('You are listening to port 3000');