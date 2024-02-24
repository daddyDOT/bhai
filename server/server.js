const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bh_ai'
});

connection.connect();

app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM publications';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
