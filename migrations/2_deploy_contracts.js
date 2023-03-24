const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')


module.exports = async function(deployer , network , accounts) {
   await deployer.deploy(Tether)
   const tether = await Tether.deployed()
   //RWD 
   await deployer.deploy(RWD)
   const rwd = await RWD.deployed();


   //Decentral Bank
   await deployer.deploy(DecentralBank)
   const DecentralBank = await DecentralBank.deployed()

   //Transfer all RWD tokens to Decentral bank
   await rwd.transfer(DecentralBank.address , '10000000000000000000000000')


   await tether.transfer(accounts[1], '1000000000000000000')
};