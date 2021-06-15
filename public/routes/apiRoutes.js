const tableNotes = require('../../db/db.json');
const {nanoid} = require('nanoid');
const fs = require('fs')

module.exports = (app) => {
    
  
    // app.get('/api/notes', (req, res) => res.json(tableNotes));  
    app.get('/api/notes', (req,res) => {
      res.json(tableNotes);
    });
    app.post('/api/notes', (req, res) => {      
                res.json(true);
     
      }
    );
  

  

  };