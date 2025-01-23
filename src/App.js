import React, { useState } from 'react';
import Img from './dog.jpg';
import './App.css';

const App = () => {
  const [img,setimg]=useState(Img);
  const [load,setload]=useState(false);
  const [qrdata,setqrdata]=useState("");
  const [size,setSize]=useState(150);

  function Qr_gen(){
    try{
    setload(true);
    const url=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${size}x${size}`;
    setimg(url);
    }
    catch(error){
      console.log("Error in QR_Code Generating...");
    }
    finally{
      setload(false);
    }
  }

  return (
    <div>
      <h1>QR CODE GENERATOR</h1>
      {load&&<p>Please Wait</p>}
      <img src={img} alt='qr-box' className='QR-Image'></img>
      <label className='input-label'>
        Data for QR Code
      </label>
      <input type='text' id='datainput'
      placeholder='Enter data for QR code' onChange={(e)=>setqrdata(e.target.value)}></input>
      <label className='input-label'>
        Imagesize(e.g.,150)
      </label>
      <input type='text' id='sizeinput'
      placeholder='Enter image size'onChange={(e)=>setSize(e.target.value)}></input>
      <button className='gen-btn' onClick={Qr_gen}>Generate QR_CODE</button>

      <button className='download' onClick={()=>{
        const link=document.createElement("a");
        link.href=img;
        link.download="Code.png";
        link.click();
      }}>Download QR CODE</button>
    </div>
  )
}

export default App
