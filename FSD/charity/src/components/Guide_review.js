import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Model from './Model';

import Guide_review2 from './Guide_review2';
import Guide_review3 from './Guide_review3';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';


import Review2 from './Review2';

function Guide_review() {

  const [review2_, setReview2_] = useState(false);
 
  const [review2, setReview2] = useState(false);
  const [review3, setReview3] = useState(false);
  const navigate = useNavigate();


  //

  const signUp = () => {
    navigate('/prelogin');
  };

  //open 2
  const openReview2 = () => {
    setReview2(true);
  };

  const closeReview2 = () => {
    setReview2(false);
  };

  //
  const openReview2_ = () => {
    setReview2_(true);
  };

  const closeReview2_ = () => {
    setReview2_(false);
  };


   //open 3
   const openReview3 = () => {
    setReview3(true);
  };

  const closeReview3 = () => {
    setReview3(false);
  };

  //
  const [pairs, setPairs] = useState([]);
  // const [guideEmail, setGuideEmail] = useState(null);


  useEffect(() => {
    fetch('http://localhost:5000/get-pair')
      .then(response => response.json())
      .then(data => setPairs(data))
  }, []);

  useEffect(() => {
    const guideEmails = pairs.map(pair => pair.guide_email);
    // const [guideEmail] = guideEmails;
    // setGuideEmail(guideEmail);

    const studentEmails = pairs.map(pair => pair.student_email);
    // const [studentEmail] = studentEmails;
    // setStudentEmail(studentEmail);
  }, [pairs]);


  const guideEmail = localStorage.getItem('guideEmail')


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
  
  return (
    <>
   <Navbar _email={guideEmail}/>

      <Container fluid>
        <div
          className="container-fluid"
          style={{
            backgroundImage:'url(ngo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
            position: 'relative',
            marginTop: '0px'
          }}
        >
          <div
            className="btn bg-white text-success mx-1 mr-0 p"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '40vh',
              width: '40vw',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              borderRadius:'50px'
            }}
          >
            <Row className="justify-content-center mt-5">
             
            <h1>NGO Project Submission</h1>
            <hr />
              <Col md={4}>
                <Card className="login-card"style={{ backgroundColor: '#194d33', color: 'white' }}>
                  <Card.Body>
                    <Card.Title onClick={()=>{navigate('/review2')} } style={{ fontSize: '1rem', marginBottom: '1rem', cursor: 'pointer' }}>Upload Child Information</Card.Title>
                    {review2_ ? (
                      <Model onClose={closeReview2_}>
                        <Review2 />
                      </Model>
                    ) : null}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
           
          </div>
        </div>
        <style jsx>{`
          .card {
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
h1{
  color:black
}
          .card:hover {
            transform: scale(1.02);
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }

          .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: black;
            color: white;
            
          }

          .card-title {
            font-size: 20px;
          margin-bottom: 10px;
        }
        
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
        </Container>
        </>
  )}

export default Guide_review;