
const main = async () => {
  const DistributedLedger = await hre.ethers.getContractFactory("DistributedLedger");
  const distributedLedger = await DistributedLedger.deploy();

  await distributedLedger.deployed();

  console.log( "Transaction deployed to:" ,distributedLedger.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();