const fs = require('fs');
var path = require('path');
const dbPath = path.join(__dirname, "../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get('/api/notes', (req,res) => {
        fs.readFile(dbPath, 'utf8', (err, data)=>{
            if (err) throw err;
            console.log(data);
            res.json(data)
        })
    })
}