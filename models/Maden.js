const mongoose = require('mongoose');

const madenSchema = new mongoose.Schema({
    ad: String,
    koordinat: String,
    madde: String,
    sahip: String, // Ethereum adresi
    kesfedilmeTarihi: Date
});

module.exports = mongoose.model('Maden', madenSchema);
