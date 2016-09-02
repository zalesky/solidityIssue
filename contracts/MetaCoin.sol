contract MetaCoin {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function sendWei(address receiver, uint amount) returns(bool sufficient) {
        if(!receiver.send(amount))
            throw; 
        return true;
    }

    function getBalance(address addr) returns(uint) {
        return addr.balance;
    }
}
