
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("dotenv").config();
require("hardhat-gas-reporter");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const PRIVATE_KEY = process.env.PRIVATE_KEY
const MNEMONIC = process.env.MNEMONIC

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.6',
  networks: {
    hardhat: {
        forking: {
            url: process.env.ALCHEMY_URL_MAINNET,
        },
        gas: "auto"
    },
    ropsten: {
      url: process.env.ALCHEMY_URL_ROPSTEN,
      accounts: [`0x${PRIVATE_KEY}`], // example with private key; type: array
    },
    rinkeby: {
      url: process.env.ALCHEMY_URL_RINKEBY,
      accounts: {
        mnemonic: MNEMONIC, // example with mnemonic; type: object
      },
      gasLimit: 2000000,
      gas: 2000000,
      gasPrice: 8000000000,
    },
    kovan: {
      url: process.env.ALCHEMY_URL_KOVAN,
      accounts: {
        mnemonic: MNEMONIC,
      }
    },
    polygon_mumbai: {
      url: process.env.ALCHEMY_URL_POLYGON_MUMBAI,
      accounts: {
        mnemonic: MNEMONIC, 
      },
      gasLimit: 2000000,
      gas: 2000000,
      gasPrice: 8000000000,
    },
    arbitrum_rinkeby: {
      url: process.env.ALCHEMY_URL_ARBITRUM_RINKEBY,
      accounts: {
        mnemonic: MNEMONIC, 
      }
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  gasReporter:{
    currency: "USD",
    gasPrice: 100,
    enabled: true,
  }
}
