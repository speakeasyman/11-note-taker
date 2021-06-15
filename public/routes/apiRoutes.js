const tableNotes = require('../../db/db.json');
const {nanoid} = require('nanoid');
const fs = require('fs')

module.exports = (app) => {
    
  
    // app.get('/api/notes', (req, res) => res.json(tableNotes));  
    app.get('/api/notes', (req,res) => {
      res.json(tableNotes);
    });
    // app.post('/api/notes', (req, res) => {      
    //             res.json(true);
     
    //   }
    // );
   
    app.post("/api/notes", (req, res) => {
      console.log(tableNotes);
      console.log(req.body);
      req.body.id = nanoid(10);
      tableNotes.push(req.body);
      console.log(tableNotes);
      updateNotes(tableNotes)
      res.json(tableNotes)
    })

    app.delete('/api/notes/:id', (req, res) => {
      let targetID = req.params.id;
      console.log(req.params.id)

      for (let i = 0; i < tableNotes.length; i++) {
        if (tableNotes[i].id === targetID) {
          tableNotes.splice(i, 1)
          updateNotes(tableNotes)
          res.json(tableNotes);
        }
       
      }

    })
  };

  updateNotes = () => {
    fs.writeFile('./db/db.json', JSON.stringify(tableNotes),
    (err) => err ? console.log("Somethings wrong!", err) : console.log(`db updated`))
  };