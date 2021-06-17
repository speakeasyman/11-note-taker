const tableNotes = require('../../db/db.json');
const {nanoid} = require('nanoid');
const fs = require('fs')

module.exports = (app) => { 
  // this grabs the db.json.
    app.get('/api/notes', (req,res) => {
      res.json(tableNotes);
    });
    // This takes the information, and updates the db.json file
    // with the new notes
    app.post("/api/notes", (req, res) => {     
      req.body.id = nanoid(10);
      tableNotes.push(req.body);
      updateNotes(tableNotes)
      res.json(tableNotes)
    })

    // This one will search the db.json file
    // and it looks for where the id of the data 
    // clicked and deletes where ever it matches 
    // db.json file.
    app.delete('/api/notes/:id', (req, res) => {
      let targetID = req.params.id;
        for (let i = 0; i < tableNotes.length; i++) {
        if (tableNotes[i].id === targetID) {
          tableNotes.splice(i, 1)
          updateNotes(tableNotes)
          res.json(tableNotes);
        }       
      }
    })
  };
// This is the function that updates the db.json file
  updateNotes = () => {
    fs.writeFile('./db/db.json', JSON.stringify(tableNotes),
    (err) => err ? console.log("Somethings wrong!", err) : console.log(`db updated`))
  };