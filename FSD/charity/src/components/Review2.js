
// import React, { useState,useEffect } from 'react';
// import { Container, Form, Button } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';

// function Review2() {
//   const [credentials, setCredentials] = useState({name:""}) 
//   //
//   const [panel, setPanel] = useState(null);
//   const [rollno, setRollno] = useState(null);
//   const [prn, setPrn] = useState(null);
//   const [studata, setStudata] = useState([]);

//   //guide
//   const [pairs, setPairs] = useState([]);
//   // const [guideEmail, setGuideEmail] = useState(null);
//   const [studentEmail, setStudentEmail] = useState('');


//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
// console.log("clicked")
//     // const response = await fetch('http://localhost:5000/getstudentdetails', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({ email: studentEmail }),
//     // });
  
//     // const data = await response.json();

//     const {name} = credentials;
//     console.log(name)
//     event.preventDefault();
  
//     if (!file) {
//       setMessage('Please select a file.');
//       return;
//     }
//  const NGOEmail = localStorage.getItem('guideEmail')
//  console.log(NGOEmail)
//     const formData = new FormData();
//     formData.append('ppt', file);
//     formData.append('filename', file.name);
//     formData.append('NGOEmail', NGOEmail );
//     formData.append('projectname', name );

//   console.log(file.name);
//     try {
//       const response = await fetch('http://localhost:5000/sendppt', {
//         method: 'POST',
//         body: formData
//       });
//       localStorage.setItem("filename",file.name)
//   //JSON.stringify({ email: email, file:file , filename:file.name }),
//       if (response.ok) {
//         setMessage('File uploaded successfully.');
//         setFile(null);
//       } else {
//         setMessage('Failed to upload file.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage('An error occurred while uploading the file.');
//     }
//   };
//   const onChange = (e)=>{
//     setCredentials({...credentials, [e.target.name]: e.target.value})
// }
//   return (
//     <Container>
//       <h1 style={{color:'white'}} >Upload Child Information</h1>
//       <Form onSubmit={handleSubmit} enctype="multipart/form-data">
//         <Form.Group controlId="formFile">
//           <Form.Label>Select a PowerPoint file</Form.Label>
//           <Form.Control type="file" onChange={handleFileChange} />
//         </Form.Group>
//         <div className="mb-3 p" >
//                     <label htmlFor="name" className="form-label">Add Project Name</label>
//                     <input onChange={onChange} type="test" className="form-control"  id="name" name="name" aria-describedby="emailHelp" />
//                  </div>
//         <Button variant="primary" type="submit">
//           Upload
//         </Button>
//         {message && <p>{message}</p>}
//       </Form>
//     </Container>
//   );
// }

// export default Review2;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import './R.css'

const Review2 = () => {
  const NGOEmail = localStorage.getItem('guideEmail')
  const [formData, setFormData] = useState({
    NGOEmail: NGOEmail,
    name: '',
    gender: '',
    age: '',
    description: '',
    Availability: '',
    Medical_History:'',
    Preferences: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/sendppt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log('Success:', data);
        alert("Successfully Uploaded Child")
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
      });
  };

  return (
    <>
    <Navbar/>
               <h1>Upload Details of Child</h1>
      <Form onSubmit={handleSubmit} className="my-form">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

    

        <Form.Group controlId="Availability">
          <Form.Label>Availability</Form.Label>
          <Form.Control
            type="text"
            name="Availability"
            value={formData.Availability}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

        <Form.Group controlId="Medical_History">
          <Form.Label>Medical History</Form.Label>
          <Form.Control
            type="text"
            name="Medical_History"
            value={formData.Medical_History}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="Preferences">
          <Form.Label>Preferences</Form.Label>
          <Form.Control
            type="text"
            name="Preferences"
            value={formData.Preferences}
            onChange={handleChange}
            required
            className="form-control"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Review2;
