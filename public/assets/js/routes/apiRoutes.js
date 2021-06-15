const tableNotes = require('../../../../db/db.json');

module.exports = (app) => {
    
  
    app.get('/api/notes', (req, res) => res.json(tableNotes));  
 
  
    app.post('/api/notes', (req, res) => {

      
        tableNotes.push(req.body);
        res.json(true);
     
      }
    );
  

  

  };