const contractAddress = "AKILLI_SOZLESME_ADRESINIZ"; 
const abi = [...];  

const web3 = new Web3(Web3.givenProvider);
const uzayMadencilik = new web3.eth.Contract(abi, contractAddress);

async function madenEkle(ad, koordinat, madde) {
    const accounts = await web3.eth.getAccounts();
    await uzayMadencilik.methods.madenEkle(ad, koordinat, madde).send({ from: accounts[0] });
}

async function tumMadenleriGetir() {
    const sayi = await uzayMadencilik.methods.madenSayisi().call();
    let sonuc = [];
    for (let i = 0; i < sayi; i++) {
        const maden = await uzayMadencilik.methods.madenler(i).call();
        sonuc.push(maden);
    }
    return sonuc;
}
