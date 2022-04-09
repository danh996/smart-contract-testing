const wallet = artifacts.require("Wallet");

module.exports = async (deployer, _network, accounts) => {
    const addresses = [accounts[0], accounts[1], accounts[2]];

    await deployer.deploy(Wallet, addresses, 2);

    const wallet = await Wallet.deployed();

    await web3.eth.sendTransaction({
        from: accounts[0],
        to: wallet.addresses, 
        value: 10000
    })
}