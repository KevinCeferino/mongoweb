const express = require('express');
const bodyParser = require('body-parser');

// const router = require('./components/message/network')
const router = require('./network/routes')

var app = express();

app.use(bodyParser.json());
// app.use(router);
router(app);


app.use('/app', express.static('public'));

const port = 3000;
app.listen(port);
console.log(`App en ${port}`);