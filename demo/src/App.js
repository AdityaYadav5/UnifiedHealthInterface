import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import Home from "./Home.js"
import Upload from "./artifacts/contracts/Upload.sol/Upload.json"
import {useState, useEffect} from 'react'
import {ethers} from "ethers"
import FileUpload from './pages/FileUpload.js';
import Register from './pages/register.js'
import Prescribe from './pages/prescribe.js';
import Login from './pages/login.js';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Dashboard from './pages/Dashboard.js'
import Dashboard2 from './pages/Dashboard2.js';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

const handleClick = async() => {
  const imgHash = "ello";
  contract.add(account, imgHash);
}

return (
	<div className="App">
  <Navbar/>
  <Routes>
    <Route exact path="/" element = {<Home/>}/>
    <Route exact path="/user" element = {<FileUpload account={account} provider={provider} contract={contract}/> }/>
    <Route exact path="/register" element = {<Register/>}/>
    <Route exact path="/login" element = {<Login/>}/>
    <Route exact path="/dashboard" element = {<Dashboard/>}/>
    <Route exact path="/dashboard2" element = {<Dashboard2/>}/>
    <Route exact path="/prescribe" element = {<Prescribe account={account} provider={provider} contract={contract} />}/>
  </Routes>
  <Footer/>
  {/* <button onClick={handleClick}>Click Me</button> */}
	</div>
);
}

export default App;

