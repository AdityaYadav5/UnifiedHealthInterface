import React from 'react';
import { useState } from "react";
import { Web3Storage } from 'web3.storage'
import Upload from "../artifacts/contracts/Upload.sol/Upload.json"
import {ethers} from "ethers"
import Display from "../components/display";
import Modal from "./modal.js"
import axios from "axios";
function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEM5OTNGNjU5RWJDRUI2YTg4NzBmRWM2NWJmQkM5OGMxYkExMmU1MTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzc0MDk5ODI2NjUsIm5hbWUiOiJIZWFsdGhJbnRlcmZhY2UifQ.ckaS_bxvqslKPkL8wPEcohqHKEtXMnLY59Wk7gdE-Fs'
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

const FileUpload = ({ contract, account, provider }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [file, setFile] = useState(null);
  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (file) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);

  //       const resFile = await axios({
  //         method: "post",
  //         url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
  //         data: formData,
  //         headers: {
  //           pinata_api_key: `63c29a3608a5703b5db9`,
  //           pinata_secret_api_key: `8d9eab510c1fe0a5f9586bd2f66526f70203a3a76b9907ab601ea481fd869e57`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //       const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
  //       contract.add(account,ImgHash);
  //       console.log(ImgHash);
  //       alert("Successfully Image Uploaded");
  //       //setFileName("No image selected");
  //       setFile(null);
  //     } catch (e) {
  //       console.log(e);
  //       alert("Unable to upload image to Pinata");
  //     }
  //   }
  //   //alert("Successfully Image Uploaded");
  //   //setFileName("No image selected");
  //   setFile(null);
  // };

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
   // setFileName(e.target.files[0].name);
    e.preventDefault();
  };

    async function storeFiles (files) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        //console.log('stored files with cid:', cid)
        const link2 = "http://" + cid + ".ipfs.w3s.link/" + files[0].name;
        //const signer = contract.connect(provider.getSigner());
        contract.add(account, link2);
        alert("Image Uploaded Successfully.");
        console.log(link2);
        return cid
    }
    // my photo link - bafybeieetgknijfybh6mgdn2tigr3aqsmf3n5dvosprat4ckzvxfpzkjwm.ipfs.w3s.link/myphoto.PNG
    function handleSubmit(event){
        const fileInput = document.querySelector('input[type="file"]')
        let fhash = storeFiles(fileInput.files);
        let fname = fileInput.files[0].name;
        //console.log(fname);
        
        //console.log(fhash);
        //console.log(link);
        event.preventDefault();
    }

    return (
    <div className="container mt-5 pt-5">
        <div>
            <h2 className="">Your Account:</h2>
            <h3 className="">{account? account : "Not connected"}</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-label"></label>
                <input type="file" name='data' onChange={retrieveFile} className="form-control"/>
                <br />
                <input className="btn btn-primary" type="submit"/>
            </form>
            {!modalOpen && (
                <button className="share btn btn-secondary mt-2" onClick={()=>{setModalOpen(true)}}>
                    Share
                </button>
            )}
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} contract = {contract} />
            )}
            <Display account = {account} contract = {contract}/>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    );
}

export default FileUpload;