'use strict';

const cors = require('cors');
const pg = require('pg');
const express = require('express');
const app = express();
const conString = 'postgres://msudvrbmjkdmli:472775a4021a819c95b739534ba6bda9a620baab0f8b0e84c2a9ae9b4c8ed406@ec2-50-16-196-238.compute-1.amazonaws.com:5432/dcck59nhk494b5'

const PORT = process.env.PORT;
const CLIENT_URL  = process.env.

const client = new pg.Client(process.env.conString);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/', (req, res) => res.send('wat'));

app.get('/api/v1/tasks', (req, res) => {
  client.query(`SELECT * FROM tasks;`)
  .then(results => res.send(results.rows))
  .catch(console.error(err));
});

app.get('/test', (req,res) => res.send('this is the test'));
app.get('*', (req,res) => res.redirect(CLIENT_URL));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
