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

app.post("api/notes", (req,res) => {
    fs.readFile(dbPath, 'utf8', (err, data)=>{
        if(err) throw err;
        let notesList;
        if (data) {
            notesList = JSON.parse(data);
        }
        let newNote = req.body;
        newNote.id = uuidv4();
        if (notesList) {
            notesList.push(newNote);
        }
        else {
            notesList = [newNote]
        }
        fs.writeFile(dbPath, JSON.stringify(notesList), (err,data) => {
            if (err) throw err;
            console.log('Success you have created a new note! ID: ' +newNote.id);
            res.json(newNote)
        })
    })
})