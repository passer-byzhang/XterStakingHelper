import { ethers, network } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const XterStakingHelper = await ethers.getContractFactory("XterStakingHelper");
    const xterStakingHelper = await XterStakingHelper.deploy();
    await xterStakingHelper.waitForDeployment();

    console.log("XterStakingHelper deployed to:", xterStakingHelper.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
