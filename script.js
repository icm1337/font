var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var dcoin=document.getElementById("dogecoin");

var settings={
    "saync": true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "methos":"GET",
    "header":{}

}
$.ajax(settings).done((response) => {
    btc.innerHTML=response.bitcoin.usd
    eth.innerHTML=response.ethereum.usd
    dcoin.innerHTML=response.dogecoin.usd

});