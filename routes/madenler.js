const express = require('express');
const router = express.Router();
const Maden = require('../models/Maden');

router.get('/', async (req, res) => {
    try {
        const madenler = await Maden.find();
        res.json(madenler);
    } catch (error) {
        res.status(500).send("Sunucu hatası");
    }
});

// Diğer API endpointleri...

module.exports = router;
