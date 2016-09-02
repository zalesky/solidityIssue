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
    meta.sendWei(accounts[1], 1)
    .then(function() {
            return meta.getBalance(accounts[1])
        })
    .then(function(balance) {
        console.log(balance);
        //assert.equal(balance.valueOf(), 10000, "+10000 wasn't in the second account");
        });
    printBalances();
    });
});

