import { ethers, network } from "hardhat";
import { Contract } from "ethers";


  // BSC上的XterStaking合约地址
  const XTER_STAKING_ADDRESS = "0x2e1954298a2fdde09a0e23e61b01bf2f475acee7"; // 替换为实际的合约地址
  
  // 测试用户地址
  const TEST_USER = "0xd0f60c32a6d7f395ba88e2f16e7797686f04138b"; // 替换为要测试的用户地址

  async function main() {
    const StakingHelper = await ethers.getContractFactory("XterStakingHelper");
    let stakingHelper = await StakingHelper.deploy();
    await stakingHelper.waitForDeployment();


    const stakeIds = await stakingHelper.getStakesFromUser(XTER_STAKING_ADDRESS,TEST_USER);
    console.log(stakeIds);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });