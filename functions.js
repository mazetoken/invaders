web3 = new Web3(window.ethereum);
ethereum.request({ method: 'eth_requestAccounts' });
var zombieMaster;
const getAccount = async () => {    
try {
const accounts = await ethereum.request({ method: 'eth_accounts' });
zombieMaster = accounts[0];
   console.log(zombieMaster);
return accounts[0];
   } catch (err) {
      console.log(err);
   }
}
getAccount();
etehreum.request({ method: 'eth_accounts' }).defaultAccount = ethereum.request({ method: 'eth_accounts' }).accounts[0];

function claimTokens() {
   var content = "Sending transaction from: ";
   content += zombieMaster;
   $("#lang1").html(content);
   contractBlockchainInvaders.methods.claimToken(zombieMaster).send({ from: zombieMaster, value: 50000000000000000, gasPrice: 250000000000 })
      .then(function (receipt) {
            console.log(receipt);
   var content = "Transaction sent!: ";
   content += JSON.stringify(receipt.transactionHash);
   $("#lang1").html(content);
      });;
};

function lockTimeI() {
   contractBlockchainInvaders.methods.lockTime(zombieMaster).call()
      .then(function (result) {
   var content = "Next claim on: ";
            console.log(result);
   var a = new Date(result * 1000);
   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   var year = a.getFullYear();
   var month = months[a.getMonth()];
   var date = a.getDate();
   var hour = a.getHours();
   var min = a.getMinutes();
   var sec = a.getSeconds();
   var time = month + ' ' + date + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
            console.log(time);
   content += JSON.stringify(time.toString());
   $("#lang2").html(content);
      });;
};

function balanceFaucet() {
   contractBlockchainInvaders.methods.balanceOf("0xb58904a0328abACf05b288E51a578471A8317B70").call()
      .then(function (result) {
   var content = "Faucet balance: ";
      console.log(result/1000000000000000000);
   content += JSON.stringify(result.toString()/1000000000000000000);
   $("#lang3").html(content);
      });;
};

function addIcon() {
    web3 = new Web3(window.ethereum);
    const tokenAddress = '0xb58904a0328abACf05b288E51a578471A8317B70';
    const tokenSymbol = 'INVADERS';
    const tokenDecimals = 18;
    const tokenImage = 'https://bafkreibrq2d2b6lak57uwzrqcgrlqmalhkcuna3fyaj2o5r5x5vwe3l6o4.ipfs.nftstorage.link/';
    ethereum.request({
       method: 'wallet_watchAsset',
       params: {
       type: 'ERC20',
       options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
       },
       },
    });
 };