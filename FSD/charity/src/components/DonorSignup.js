
import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

function DonorSignup(props) {
  const [credentials, setCredentials] = useState({name:"",email: "", cpassword: "",confirmPassword:""}) 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      const {name,email,cpassword,confirmPassword} = credentials;
      e.preventDefault();
      const response = await fetch("http://localhost:5000/donorspost", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email, cpassword,confirmPassword})
      });
      const json = await response.json()
      console.log(json);
      if (json.success){
          localStorage.setItem('userEmail', credentials.email); 
          localStorage.setItem('token', json.token); 
          navigate('/card');
      }
      else{
         alert("User With This email Already exits")
         
      }
      
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
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
  
  `;

  return (

    <>
    <Navbar title="Charity Management System - Donor Sign Up"  />
    <style>{styles}</style>
    <div
      className='container-fluid content-container'
      style={{
        backgroundImage:'url(ngo.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '170vh',
        width: '100vw',
        position: 'relative',
        marginTop: '0'
      }}
    >
  
      <div className='container-fluid content-container'>
        <div className='form-container'
          style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >

          <form onSubmit={handleSubmit}
  className='my-5'
  style={{
    width: '50%'
  }}
>

  <div className="mb p" style={{marginLeft: '1rem'}}>
    <label htmlFor="name" className="form-label" style={{paddingLeft: '0.5rem'}}>Name</label>
    <input onChange={onChange} type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" style={{paddingLeft: '0.5rem'}} />
  </div>
  <div className='mb-3 ' style={{marginLeft: '1rem'}}>
    <label htmlFor='email' className='form-label' style={{paddingLeft: '0.5rem'}}>
      Email address
    </label>
    <input onChange={onChange}
      type='email'
      className='form-control'
      id='email'
      name='email'
      aria-describedby='emailHelp'
      style={{paddingLeft: '0.5rem'}}
    />
    <div id='emailHelp' className='form-text ' style={{marginLeft: '1rem'}}>
      We'll never share your email with anyone else.
    </div>
  </div>
  
  <div className="mb-3 " style={{marginLeft: '1rem'}}>
    <label htmlFor="password" className="form-label" style={{paddingLeft: '0.5rem'}}>Password</label>
    <input onChange={onChange} type="password" className="form-control" name="cpassword" id="cpassword" required style={{paddingLeft: '0.5rem'}} />
  </div>
  <div className="mb-3 " style={{marginLeft: '1rem'}}>
    <label htmlFor="cpassword" className="form-label" style={{paddingLeft: '0.5rem'}}>Confirm Password</label>
    <input onChange={onChange} type="password" className="form-control" name="confirmPassword" id="confirmPassword" required style={{paddingLeft: '0.5rem'}} />
  </div>

  <button type='submit' className='btn btn-primary' style={{marginLeft: '1rem'}}>
    Submit
  </button>

</form>
        </div>
  
      </div>
  
    </div>
  </>
  );
}

export default DonorSignup;

