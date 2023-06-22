const express = require('express');
const router = express.Router();


router.post('/create-pdf', (req, res) => {
    console.log(req.body);
})

module.exports = router;