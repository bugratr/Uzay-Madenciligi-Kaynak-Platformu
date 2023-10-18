const express = require('express');
const Web3 = require('web3');

const app = express();
const PORT = 3000;

const contractAddress = "AKILLI_SOZLESME_ADRESINIZ"; 
const abi = [...];  

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
const contractInstance = new web3.eth.Contract(abi, contractAddress);

app.get('/madenler', async (req, res) => {
    const sayi = await contractInstance.methods.madenSayisi().call();
    let sonuc = [];
    for (let i = 0; i < sayi; i++) {
        const maden = await contractInstance.methods.madenler(i).call();
        sonuc.push(maden);
    }
    res.json(sonuc);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
