const { assert } = require("console");

const wallet = artifacts.require("Wallet");

contract("Wallet", (accounts) => {
    let wallet;

    beforeEach(async () => {
        wallet = Wallet.new([account[0], account[1], acount[2]], 2);
        await web3.eth.sendTransaction({
        from: accounts[0],
        to: wallet.addresses, 
        value: 10000
    });

    it('should have correct approvers and quorum', async () => {
        const approvers = await wallet.getApprovers();
        const quorum = await wallet.quorum();

        assert(approvers.length === 3);
        assert(approvers[0] === accounts[0]);
        assert(approvers[1] === accounts[1]);
        assert(approvers[2] === accounts[2]);

        assert(quorum.toNumber() === 2);
    })

    it('should create transfer', async () => {
        await wallet.createTransfer(100, accounts[5], {from:accounts[0]});
        const transfer = await wallet.getTransfers();


        assert(transfer.length === 1);
        assert(transfers[0].id === '0');
        assert(transfers[0].amount === 100);
        assert(transfers[0].to === accounts[5]);
        assert(transfers[0].approvals === 0);
        assert(transfers[0].sent === false);

        assert(quorum.toNumber() === 2);
    })

    })
})