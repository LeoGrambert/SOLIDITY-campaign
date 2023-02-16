const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
require("dotenv").config();
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  process.env.PRIVATE_KEY,
  process.env.INFURA_URL
);
const web3 = new Web3(provider);

/**
 * It deploys the contract to the blockchain
 */
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(JSON.parse(compiledFactory.interface));
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();
