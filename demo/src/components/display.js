import React from 'react';
import { useState } from "react";
import { Web3Storage } from 'web3.storage'
import Upload from "../artifacts/contracts/Upload.sol/Upload.json"
import {ethers} from "ethers"
import Tesseract from 'tesseract.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);
  

// https://bafybeihbdv4jz3i76gq6whqx6mi2plxpsrpocd3ivwfpxasmzsygh5u7tu.ipfs.w3s.link/forocr.jpg
const Display = ({contract, account}) =>{
    const [data, setData] = useState(null);

    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [apiResp, setapiResp] = useState(null);
    const [dataCh, setdataCh] = useState(null);
    const [options, setOptions] = useState(null);
    const [showGraph, setShowGraph] = useState(false);

    // const dataCh = {
    //     labels: ['1', '2'],
    //     datasets: [
    //         {
    //         label: 'WBC',
    //         data: [1,2],
    //         borderColor: 'red',
    //         backgroundColor: 'aqua'
    //         }
    //     ]
    // };
    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //         position: 'top'
    //         },
    //     title: {
    //     display: true,
    //     text: 'Chart.js Line Chart',
    //     },
    //     },
    // };
    const handleClick = (evt) => {

        let ele = evt.target;
        let prev=ele.previousElementSibling;
        setImagePath(prev.href);
        getScan(prev.href);
        Tesseract.recognize(
        imagePath,'eng',
        { 
        logger: (m) => {console.log(m);} 
        }
        ).then(({data: {text} }) => {
        setText(text);
        console.log(text);
        });
    }
//imagePath
    const work = (text) => {
        console.log(text);
        setText(text);
    }
    const getScan = (path) => {
        Tesseract.recognize(
        path,'eng',
        { 
           logger: (m) => {console.log(m);} 
        }
        ).then(({data: {text} }) => {
        work(text);
        });
    } 

    const seeContract = ()=>{
        console.log(contract);
    }
    const getData = async() =>{
        let dataArray;
        const otherAddress = document.querySelector(".address").value;
        if(otherAddress){
            dataArray = await contract.display(otherAddress);
        }
        else{
            dataArray = await contract.display(account);
        }
        const isEmpty = Object.keys(dataArray).length===0;
        if(!isEmpty){
            const str = dataArray.toString();
            const str_array = str.split(",");
            //console.log(str);
            console.log(str_array);
            const listItems = str_array.map((item, i)=>{
                return (
                    // <button onClick={handleClick} style={{height:50}}> Get Summary</button>
                   <li style={{marginTop: '10px'}}> <a className='btn btn-primary ancs' href={item} key={i}>Document No- {i}</a> <input type="hidden" name="links" value={item} /> </li>
                )
            });
            console.log(listItems);
            setData(listItems);
        }
        else{
            alert("No img to display");
        }
    }
    const plot = async() =>
    {
        // const data = await fetch("/user");
        // const items = await data.json();
        fetch("http://localhost:5000/user")
        .then(res => res.json())
        .then(res => setapiResp({ apiResponse: res }));
        //setapiResp(items);
        
        let b = apiResp.apiResponse;
        //b = b.reverse();
        let len = 1;
        if(Array.isArray(b))
        {
            len = b.length;
        }
        let l = [];
        for(let i = 1; i<=len; i++)
        {
            l.push(i);
        }
        console.log(l);
        const dataChfinal = {
            labels: l,
            datasets: [
                {
                label: 'WBC',
                data: b,
                borderColor: 'red',
                backgroundColor: 'aqua'
                }
            ]
        };
        const opt = {
            responsive: true,
            plugins: {
                legend: {
                position: 'top'
                },
            title: {
            display: true,
            text: 'Chart.js Line Chart',
            },
            },
        };
        setdataCh(dataChfinal);
        setOptions(opt);
        setShowGraph(true);
    }
    return (
        <div className="container mt-5 p-5 bg-dark border rounded">
            
            <input type="text" placeholder="Enter Address" className="address form-control"></input>
            {/* onClick={getData} */}
            <button className="mt-3 btn btn-warning" onClick={getData}>Get Data</button>
            <div className="mt-3 text-light">Item List:-</div>
            <form action='/user' method='POST'>
            <div className="container">
                <ul>{data}</ul>
            </div>
            <button type='submit'>Submit</button>
            </form>
            <p style={{color: "white"}}>{text}</p>
            
            <button onClick={plot} className="btn btn-primary">Plot</button>
            <div style={{height:"50px"}}></div>
           {showGraph && <div style = {{backgroundColor: "white", padding: "20px", width: '800px', height: '400px'}}>
            <Line data = {dataCh} options={options}></Line>
            </div> }
        </div> 
    );
};

export default Display;