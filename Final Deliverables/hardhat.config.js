require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        `0xf51b43323cd6d378e038dbb845b2a6c06059caed7521ffe779e00efabea604ea`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};