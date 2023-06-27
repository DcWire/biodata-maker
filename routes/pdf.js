const express = require('express');
const router = express.Router();
const { generatePDF } = require('../controllers/pdf');

router.post('/create-pdf', (req, res) => {
    console.log(req.body);
    generatePDF(req.body);
    res.download('biodata.pdf');
})

module.exports = router;