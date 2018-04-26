'use strict';

const cors = require('cors');
const pg = require('pg');
const express = require('express');
const app = express();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.use(cors());

app.get('/', (req, res) => res.redirect(CLIENT_URL));

app.get('/api/v1/books:id', (req, res) => {
  client.query('SELECT book_id, title, author, img_url FROM books;')
  .then(results => res.send(results.rows))
  .catch((err) => console.error(err));
});

app.get('/api/v1/books', (req, res) => {
  client.query('SELECT book_id, title, author, img_url FROM books;')
  .then(results => res.send(results.rows))
  .catch((err) => console.error(err));
});

app.get('/test', (req, res) => res.send('this is a test'));
app.get('*', (req, res) => res.send('404 page not found'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
