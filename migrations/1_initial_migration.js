const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed();
  // Mint 1,000 Dai Tokens for the deployer
  await tokenMock.mint(
    "0x30DFe56c7553FF3850F0b8De4fFb86abaAE9F38b", // địa chỉ account nhận Daicoin
    "10000000000000000000000000"
  );
};
