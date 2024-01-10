import { useContext, useRef, useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar'
import EthCard from './components/EthCard';
import { Box, Button, Typography } from '@mui/material';
import { ethers } from 'ethers';
import { abi, contractAddress } from './constants';
import {Buffer} from "buffer";
import axios from 'axios';

function App() {
  const [address, setAddress] = useState("");
  const [contract, setContract] = useState();
  const [files, setFiles] = useState(null);
  const inputRef = useRef(null);
  const provider = new ethers.BrowserProvider(window.ethereum)
  const apiKey = 'a76fad9f7c83f21879b2';
  const apiSecret = 'e725c58ea07be18bbe2728640e5e50e068e2fc396ca49b1f63042b6d805ecd3c';
  const pinataEndpoint = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

  const wallet = async () => {
    if (provider) {
      const signers = await provider.getSigner();
      const address = await signers.getAddress();
      setAddress(address);
      const contracts = new ethers.Contract(contractAddress, abi.abi, signers);
      setContract(contracts);
      return;
    }
    alert("Please install metamask");
  }

  const handleBtn = () => {
    if (address) {
      inputRef.current.click();
    }
  }

  const handleFileClick = (e) => {
    if (address) {
      // if (e.target.files[0]) {
      //   const reader = new FileReader();
      //   reader.onloadend = () => {
      //     const buffer = Buffer.from(reader.result);
      //     setFiles(buffer)
      //   };
      //  reader.readAsArrayBuffer(e.target.files[0]);
      // }
      setFiles(e.target.files[0]);
    }
  }

  const handleSubmit = async () => {
    
    console.log(files);
    if (address && files) {
      try {
        const formData = new FormData();
        formData.append("file", files);
     const pinataOptions = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'pinata_api_key': apiKey,
          'pinata_secret_api_key': apiSecret,
        },
      };
        formData.append('pinataOptions', pinataOptions);
        axios.post(pinataEndpoint, formData, pinataOptions)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        });

      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "20px", flexDirection: "column", alignItems: "center", gap: 1 }}>
        <EthCard address={address}></EthCard>
        <Button onClick={wallet} variant='contained' sx={{ backgroundColor: "black" }}>{(address !== "" ? "Wallet Connected" : "Connect wallet")}</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: "10px" }}>
        <Box sx={{ backgroundColor: "black", borderRadius: "10px", minHeight: "400px", minWidth: "300px", padding: "10px" }}>
          <Typography variant="body1" sx={{ color: "white", textAlign: "center", letterSpacing: "1px", fontSize: "22px", fontFamily: "'Poppins', sans-serif" }}>Upload Files</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "347px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Button variant="contained" className="choosefilebtn" onClick={handleBtn}>Choose File</Button>
              <input type="file" ref={inputRef} style={{ display: "none" }} onClick={handleFileClick}></input>
              <Button onClick={handleSubmit} variant="contained" className='submitBtn' style={{ padding: "8px", border: "none" }}>Submit</Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
