import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Model from './Model';
import Guide_review1 from './Guide_review1';
import Guide_review2 from './Guide_review2';
import '../App.css';


import { useDispatch ,useSelector} from 'react-redux';
import { actionCreator } from '../state/index';
import { bindActionCreators } from "redux";

function App() {
  const [students, setStudents] = useState([]);
  const [guides, setGuides] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [pairs, setPairs] = useState([]);


  //
  const navigate = useNavigate();
  
  const coEmail = localStorage.getItem('coEmail')

  const [review1, setReview1] = useState(false);
  
  const openReview1 = () => {
    setReview1(true);
  };

  const closeReview1 = () => {
    setReview1(false);
  };

  //
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreator, dispatch);

  //


  //

 


  //


  const [selectedDate, setSelectedDate] = useState(null);

  

  //
  const [review2, setReview2] = useState(false);
  const openReview2 = () => {
    setReview2(true);
  };

  const closeReview2 = () => {
    setReview2(false);
  };
  const styles = `
  .container-fluid {
    background-repeat: no-repeat;
    background-size: cover;
    // height: 100vh;
    // width: 100vw;
    position: relative;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    margin-top: 0px;
    height: 130vh; 
    width:30vw;
  }

  .form-label {
    font-weight: bold;
    text-align: left
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .form-control {
    border-radius: 5px;
  }

  .btn-primary {
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
  }

  .btn-primary:hover {
    background-color: #0069d9;
  }
  .my-element {
    float: right;
  }
  h1{
    color: black;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: black;
    color:white;
    margin-top:5px
  }
  `;
  return (
    <>
   <Navbar _email={coEmail} title="ADMIN"/>
   <style>{styles}</style>
  
    <div
          className="container-fluid"
          style={{
            backgroundImage:'url(ngo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100vw',
            position: 'relative',
            marginTop: '0px',
          }}
        >
           
          <div
            className="btn bg-white text-success mx-1 mr-0 p"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              height: '35vh',
              width: '35vw',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              borderRadius:'50px'
            }}
          >
             
    <Container className=''>

        {review2 ? (
                      <Model onClose={closeReview2}>
                        <Guide_review2 />
                      </Model>
                    ) : null}
                    <hr />
      <Button type="submit" onClick={()=>{navigate("/guidereview2")}} style={{ marginTop: '10px', backgroundColor: 'black', color: 'white', border: '1px solid #eee', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>See Review</Button>
    </Container>
    
    </div>
    </div>
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

export default App;

