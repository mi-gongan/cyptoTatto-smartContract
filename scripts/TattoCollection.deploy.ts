import { ethers } from "hardhat";

async function collectionDeploy(roleAddress: string) {
  const collectionToken = await ethers.getContractFactory("TattoCollection");
  const TattoCollection = await collectionToken.deploy(roleAddress);
  await TattoCollection.deployed();

  console.log("TattoCollection address:", TattoCollection.address);
  return TattoCollection.address;
}

async function main() {
  await collectionDeploy(process.env.ROLE_ADDRESS);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
