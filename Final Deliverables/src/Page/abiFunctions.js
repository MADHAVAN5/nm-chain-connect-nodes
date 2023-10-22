import { ethers } from "ethers";
import Web3Modal from "web3modal";


import { DltAddress, DltABI} from "../context/constants.js";
if (!window.ethereum) {
    alert('Meta Mask Not Found')
    window.open("https://metamask.io/download/")
} 


        // const signer = providers.getSigner();
        // const contract = fetchContract(signer);

        // return contract;

const web3modal = new Web3Modal();
const connection = await web3modal.connect();
const provider = new ethers.providers.Web3Provider(connection);
// export const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
export const signer = provider.getSigner();


export const contract = new ethers.Contract(DltAddress, DltABI, signer);
// console.log(contract);