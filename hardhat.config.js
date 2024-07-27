require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "587685725D9EabD1246dF362c6a4b82d4de38d2F";

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
