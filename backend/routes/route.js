const model = require('../models/users');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    model.find({}, (err, data) => {
        if (err) {
            res.status(500).send
        }
        res.json(data);
    }
    );
});


router.post('/', (req, res) => {
    let user = new model(req.body);
    user.save((err, data) => {
        if (err) {
            res.status
        }
        res.json(data);
    }
    );
});

module.exports = router;