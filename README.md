![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
![Web3.js](https://img.shields.io/badge/web3.js-F16822?style=for-the-badge&logo=web3.js&logoColor=white)
![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

# Kickstarter POC on Ethereum Testnet Goerli Blockchain using Solidity, Smart Contract & Next.js

## Installation

```
npm install
```

## Deploy Smart Contract

1/ Create .env and put your TEST account. **Don't use your real account.**

```
PRIVATE_KEY=**** **** **** **** **** **** **** **** **** **** **** ****
INFURA_URL=******
```

2/ Call deploy script in order to deploy the smart contract on Goerli Testnet

```
npm run deploy
```

3/ Create a .env.local file and copy/paste deployed address displayed in your terminal

```
NEXT_PUBLIC_DEPLOY_ADDRESS=0xbc1******
```

## Set up the front application

```
npm run dev
```

Go to localhost:3000

## Tests Smart Contract

With Mocha

```
npm run test
```
