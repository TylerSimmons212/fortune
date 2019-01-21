const express = require('express');
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express();

app.use(bodyParser.json());

app.get('/api/fortune',controller.read)
app.post('/api/fortune',controller.create)
app.put('/api/fortune/:id', controller.update );
app.delete( '/api/fortune/:id', controller.delete );


app.listen(4000, ()=> console.log('Houston we have lift off on port 4000'))
