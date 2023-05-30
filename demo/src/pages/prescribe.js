import React from 'react';
import { useState } from "react";
import { Web3Storage } from 'web3.storage'
import Display from "../components/display";


function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEM5OTNGNjU5RWJDRUI2YTg4NzBmRWM2NWJmQkM5OGMxYkExMmU1MTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzc0MDk5ODI2NjUsIm5hbWUiOiJIZWFsdGhJbnRlcmZhY2UifQ.ckaS_bxvqslKPkL8wPEcohqHKEtXMnLY59Wk7gdE-Fs'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    //return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}


const Prescribe = ({ contract, account, provider }) => {

    async function storeFiles (files, patientAddress) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        //console.log('stored files with cid:', cid)
        const link2 = "http://" + cid + ".ipfs.w3s.link/" + files[0].name;
        //const signer = contract.connect(provider.getSigner());
        contract.add(patientAddress, link2);
        console.log(link2);
        return cid
    }
      // my photo link - bafybeieetgknijfybh6mgdn2tigr3aqsmf3n5dvosprat4ckzvxfpzkjwm.ipfs.w3s.link/myphoto.PNG
    function handleSubmit(event){
        const patientAddress = document.querySelector(".address").value;
        const fileInput = document.querySelector('input[type="file"]')
        let fhash = storeFiles(fileInput.files, patientAddress);
        let fname = fileInput.files[0].name;
        
        
        event.preventDefault();
    }

    return (
        <div className="container mt-5 p-5">
            <h1 className="text-center">Prescribe</h1>
            
            <form onSubmit={handleSubmit} className="bg-dark mt-5 p-3 border rounded">
                <label className="form-label text-light mt-3 mb-2  px-1">Enter HID of patient and upload documents</label>
                <br/>
                <input type="text" placeholder="Enter HID" className="address form-control"></input>
                <br/>
                <label className="m-2"></label>
                <input type="file" className="btn btn-dark border border-secondary mb-4" />
                <br />
                <input type="submit" className="btn btn-warning m-2" />
            </form>

            <Display account = {account} contract = {contract}/>
        </div>
    );
};  


export default Prescribe;