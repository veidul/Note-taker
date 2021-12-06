var path = require('path');
var fs = require('fs');

module.exports = function (app) {
    app.get('notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
}