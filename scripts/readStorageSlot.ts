import { ethers } from "hardhat";

async function main() {
  // 合约地址
  const contractAddress = "0x67827f1455089cAe9bfb3F6115d88A353454b992";
  
  // 要读取的插槽位置
  const slot = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";
  
  // 配置 provider
  const provider = new ethers.JsonRpcProvider("https://rpc.blast.io");
  
  // 读取存储插槽
  const value = await provider.getStorage(contractAddress, slot);
  
  console.log(`Storage slot ${slot} value:`, value);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
//0x58d12813e77b87c67ccc9312598c8e1d35b96e23
//internal bribe 0x6564abfcadb199edf0e3a4f2f63b4bc03b9266ec