
import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form, Table } from 'react-bootstrap';
import './Guide_review2.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from "./Navbar"
import "./R2.css"


function Guide_review2() {
  const [email, setEmail] = useState('');
  const [filename, setFilename] = useState('');
  const [projectname, setProjectname] = useState('');
  const [pptBuffer, setPptBuffer] = useState(null);
  const [marks, setMarks] = useState(null);

  //
  const [studentEmail, setStudentEmail] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
     
        const response = await fetch('http://localhost:5000/getpair', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ guideEmail:guideEmail}),
        });
        const data = await response.json();
        setStudentEmail(data[0].student_email);
        // console.log(data[0].student_email)
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log(studentEmail)
  const guideEmail = localStorage.getItem('guideEmail')
  
  const [pptData, setPptData] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:5000/getppt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        setPptData(data)
      })
      .catch(error => console.log(error));
  }, [guideEmail, studentEmail]);



  const [status, setStatus] = useState('');

  const handleapproved = () =>{
    setStatus("Adopted")
   
  }
  const handlereject = () =>{
    setStatus("Not Yet Adopted")
  }

const NGOEmail = localStorage.getItem('guideEmail')

const coEmail = localStorage.getItem('coEmail')
  function handlestatusSubmit(e,NGOEmail,name,age,gender,Availability,description,Medical_History,Preferences) {

    e.preventDefault();
    // Send marks data to server
    fetch('http://localhost:5000/entermarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ NGOEmail:NGOEmail,name:name,status:status,age:age,gender:gender,Availability:Availability,description:description,Medical_History:Medical_History,Preferences:Preferences}),
    }).then(response => {console.log(response); alert("Status alloted successfully")})
      .catch(error => console.log(error));
  }

  return (
    <>
   <Navbar title="Child Details Review" _email={coEmail}/>

    <Container>
   
      <Table striped bordered hover>
     
        <thead>
          <tr>
            <th style={{color:"black"}} >NGO Email</th>
            <th style={{color:"black"}}>Child Name</th>
            <th style={{color:"black"}}>Child Age</th>
            <th style={{color:"black"}}>Child Gender</th>
            <th style={{color:"black"}}>Availability</th>
            <th style={{color:"black"}}>Medical_History</th>
            <th style={{color:"black"}}>Preferences</th>
            <th style={{color:"black"}}>Available</th>
            <th style={{color:"black"}}>Not Available</th>
          </tr>
        </thead>
       <tbody>
  {pptData.map((data, index) => (
    <tr key={index}>
      <td>{data.NGOEmail}</td>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.gender}</td>
      <td>{data.Availability}</td>
      <td>{data.Medical_History}</td>
      <td>{data.Preferences}</td>
      <td>
        <Form onSubmit={(e) =>  handlestatusSubmit(e, NGOEmail,data.name,data.age,data.gender,data.Availability,data.description,data.Medical_History,data.Preferences)}>
          <button type="submit" className='btn btn-warning' onClick={handleapproved}>Adopted</button>
        </Form>
        </td>
      <td>
        <Form onSubmit={(e) =>  handlestatusSubmit(e, NGOEmail,data.name,data.age,data.gender,data.Availability,data.description,data.Medical_History,data.Preferences)}>
          <button type="submit" className='btn btn-danger' onClick={handlereject}>Not Adopted</button>
        </Form>
       
      </td>
    </tr>
  ))}
</tbody>
      </Table>
    </Container>
    <style jsx>{`
         
         .removeitbtn {
           display: flex;
           justify-content: flex-end;
         }
         
         button {
           background-color: #5cb85c;
           border: none;
           color: white;
           padding: 8px 16px;
           border-radius: 4px;
           cursor: pointer;
           transition: background-color 0.3s ease-in-out;
         }
         
         button:hover {
           background-color: #4cae4c;
         }
       `}</style>
    </>
  );
}

export default Guide_review2;