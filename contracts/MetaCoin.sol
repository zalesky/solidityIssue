contract MetaCoin {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

/*     function sendWei(address receiver, uint256 amount) returns(bool sufficient) {
        if(!receiver.send(amount))
            throw; 
        return true;
    } */
    function sendWei(address receiver, uint256 amount) returns(uint) {
        if(!receiver.send(amount))
            throw; 
        return receiver.balance;
    }
     function addWeiToAuc() returns(uint) {
        if(!this.send(msg.value))
            throw; 
        return this.balance;
    }

/*     function sendWei(address receiver) returns(bool sufficient) {
        if(!receiver.send(msg.value))
            throw; 
        return true;
    } */

    function getBalance(address addr) returns(uint) {
        return addr.balance;
    }
}
