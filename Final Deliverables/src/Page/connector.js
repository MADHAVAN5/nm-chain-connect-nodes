const { ethers } = require("ethers");

const abi = [
 {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "_receiver",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "_amount",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "_transactionId",
    "type": "string"
   }
  ],
  "name": "addTransaction",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getNodeIdentifier",
  "outputs": [
   {
    "internalType": "bytes32",
    "name": "",
    "type": "bytes32"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "index",
    "type": "uint256"
   }
  ],
  "name": "getTransaction",
  "outputs": [
   {
    "components": [
     {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
     },
     {
      "internalType": "address",
      "name": "sender",
      "type": "address"
     },
     {
      "internalType": "address",
      "name": "receiver",
      "type": "address"
     },
     {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
     },
     {
      "internalType": "string",
      "name": "transactionId",
      "type": "string"
     }
    ],
    "internalType": "struct DistributedLedger.Transaction",
    "name": "",
    "type": "tuple"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [],
  "name": "getTransactionCount",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "name": "nodeIdentifiers",
  "outputs": [
   {
    "internalType": "bytes32",
    "name": "",
    "type": "bytes32"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "transactions",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "timestamp",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "sender",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "receiver",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "transactionId",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x0A7FCbE739c0E9Ac3c4d4e85b67Bb3e31e31884e"

export const contract = new ethers.Contract(address, abi, signer)
