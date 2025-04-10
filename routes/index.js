const express = require('express');
const router = express.Router();
const pool = require('../db.');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Hello World!' });
});

router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM guinea_pig');
    res.json(result.rows);
    console.log('result', result.rows)
  } catch (err) {
    console.error('Error', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
