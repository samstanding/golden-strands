const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    if(req.isAuthenticated()) {
        pool.query('INSERT INTO post (title, body, media_url) VALUES ($1, $2, $3);',
    [req.body.post.title, req.body.post.body, req.body.post.media_url.url ], (error, result) => {
        if(error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    })
    } else {
        res.sendStatus(403);
    }
});

router.get('/', (req, res) => {
    pool.query('SELECT * FROM post ORDER BY id DESC;')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})


module.exports = router;