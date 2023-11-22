import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
export default function Home() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getresults', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
     
    }).then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  
  }, []);

  return (
    <>
   <Navbar title="Charity Management System"/>
    <div><div className='content-container'>
    <div style={{ 
      position: 'relative',
      
      // height: 'calc(100vh - 64px)', /* subtracting the height of the navbar (64px) */
      height:"95vh",
      width:"99vw",
      backgroundImage: 'url(ngo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>

    </div>
  </div></div>
  </>
  )
}