module.exports = function (app) {
    app.get('/todo', (req, res) => {
        res.sendFile('/todo.html');
    });

    app.post('/todo', (req, res) => {

    });

    app.delete('/todo', (req, res) => {

    });

};