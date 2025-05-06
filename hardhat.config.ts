import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      forking: {
        url: "http://127.0.0.1:8545", // 本地fork节点地址
      }
    }
  }
};

export default config;

//https://0xrpc.io/bnb