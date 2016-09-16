contract('MetaCoin', function(accounts) {

function printBalances(){
    console.log('\nEth balances of generated accounts:');
    for(var i = 0; i < 10; i++){
        console.log(i + ': ' + web3.eth.getBalance(accounts[i]));
    }    
}    
  it("should put wei in the second account", function() {

    printBalances();

    var meta = MetaCoin.deployed();

    meta.addWeiToAuc({from: accounts[1], value: 12345678901})
    .then(function(result) {
        meta.addWeiToAuc({from: accounts[1], value: 12345678901});
        console.log('r: '+result);
            return meta.getBalance.call(meta.address)
    }).then(function(balance) {
        console.log(balance.toNumber());
        //assert.equal(balance.valueOf(), 10000, "+10000 wasn't in the second account");
        console.log('_____send from Auc balance______');
    });
    





    meta.sendWei(accounts[2], 1111 /*, {from: accounts[1], value: 123456}*/)
    .then(function(result) {
        console.log('r: '+result);
            return meta.getBalance.call(accounts[2])
        })
    .then(function(balance) {
        console.log('new Balance is: '+balance.toNumber());
        //assert.equal(balance.valueOf(), 10000, "+10000 wasn't in the second account");
        });
    printBalances();


    });
});


