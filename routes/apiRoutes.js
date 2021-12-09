const router = require('express').Router();
const fs = require('fs')
const path = require('path')
const dbPath = path.join(__dirname, '../db/db.json')
const { v4: uuidv4 } = require('uuid');
const notes = JSON.parse(fs.readFileSync("./db/db.json"))
// const util = require('util')
// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);
// console.log(notes);
router.get('/notes', (req, res) => {
    try {
        const notes = fs.readFileSync(dbPath, 'utf8');
        let notesJSON = JSON.parse(notes)
        res.json(notesJSON)
    } catch (err) {
        console.log("error while reading file ", err)
    }

})

router.post('/notes', (req, res) => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        const noteList = JSON.parse(data) || [];


        let newNote = req.body;
        newNote.id = uuidv4();
        noteList.push(newNote);
        fs.writeFileSync(dbPath, JSON.stringify(noteList))
        res.json(noteList);
    } catch (err) {
        console.log("ERR", err)
        res.json("failed")
    }
})

router.delete('/notes/:id', (req, res) => {
    try{
    let data = fs.readFileSync(dbPath, 'utf8');
    const noteList = JSON.parse(data);
    let noteID = req.params.id;
    let deleteNote= notes.findIndex((note) => note.id === noteID)
        noteList.splice(deleteNote,1);
        fs.writeFileSync(dbPath, JSON.stringify(noteList))
        res.json(noteList)}
        catch (err) {
            console.log('error deleting', err)
            res.json('failed')

        }
    })

    module.exports = router