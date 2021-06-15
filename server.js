// Require dependencies
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

require('./public/routes/apiRoutes')(app);
require('./public/routes/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on localhosePORT: localhost:${PORT}`);
  });
