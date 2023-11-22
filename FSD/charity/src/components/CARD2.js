
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './CARD.css'
import '../App.css';

function CARD2() {
    const m = ['Single', 'Married', 'Divorced','Widowed','Separated','Domestic Partnership/Civil Union'];
    const [selectedmstatus, setSelectedMstatus] = useState(null);
    const [fn, setFn] = useState(null);
    const handleDeliveryBoySelection = (event) => {
        setSelectedMstatus(event.target.value);
      };

    const [userCriteriaMet, setUserCriteriaMet] = useState(false);
    const [userData, setUserData] = useState({
      familyno : '',
      marriege: '',
      preference: '',
      // Add more fields as needed
    });
 
    const handleFormSubmit = (e) => {
      e.preventDefault();
    if(donationfamily > 2 ){
        setUserCriteriaMet(false);
        alert(`If you already have ${donationfamily} children, you are ineligible to adopt.`)
    }else{
        setUserCriteriaMet(true);
    }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    };

  const email = localStorage.getItem('userEmail');
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [results, setResults] = useState([]);
  const [donationfamily, setDonationFamily] = useState(0);
  const [donationProject, setDonationProject] = useState('');
  const [donationGender, setDonationGender] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [donationage, setDonationAge] = useState(null);

  console.log(donationfamily)
const DONOREmail = localStorage.getItem('userEmail')
const parentEmail = localStorage.getItem('parentEmail')
  useEffect(() => {
    fetch('http://localhost:5000/getresults', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error));
  }, []);

  console.log(results)

  const handleDonationSubmit = event => {
    event.preventDefault();
    const NGOEmail = localStorage.getItem('guideEmail');
  const donationData = {  parentEmail:parentEmail,name: donationProject, gender:donationGender,age:donationage};
console.log("sws : ",donationData)
  fetch('http://localhost:5000/adoption', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donationData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    // Clear the donation amount after successful submission
      setShowDonationForm(false); // Hide the donation form
   
    })
    .catch(error => console.log(error));
    alert('Adopted Successfully')
};

if (!userCriteriaMet) {
    return (
        <>
        <Navbar title="Parent Details"/>
        <div className='container'>
        <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="donationAmount" style={{ fontWeight: 'bold' }}>
          How many children you have (if you have more than 2, you cannot adopt a child)
          </label>
          <input
  type="number"
  className="form-control"
  id="donationAmount"
  value={donationfamily}
  onChange={(event) => {
    const value = event.target.value;
    if (value >= 0) {
      setDonationFamily(value);
    }
  }}
  style={{
    borderRadius: '5px',
    border: '1px solid #ccc',
    padding: '8px 12px',
    fontSize: '14px',
  }}
/>
        </div>
        <div className="form-group">
          <label htmlFor="gender" style={{ fontWeight: 'bold' }}>
            Select Marital Status
          </label>
          <select
            className="form-control"
            id="deliveryBoySelect"
            value={selectedmstatus}
            onChange={handleDeliveryBoySelection}
            style={{
              borderRadius: '5px',
              border: '1px solid #ccc',
              padding: '8px 12px',
              fontSize: '14px',
            }}
          >
            <option value="">-- Select Marital Status --</option>
            {m.map((deliveryBoy, index) => (
              <option key={index} value={deliveryBoy}>
                {deliveryBoy}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="preference" style={{ fontWeight: 'bold' }}>
            Preference
          </label>
          <input
            type="text"
            className="form-control"
            id="preference"
            name="preference"
            value={userData.preference}
            onChange={handleInputChange}
            style={{
              borderRadius: '5px',
              border: '1px solid #ccc',
              padding: '8px 12px',
              fontSize: '14px',
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      </div>
      </>
    );
  }

  return (
    <>
    <Navbar title="Parent" _email={parentEmail}/>
    <div
        className="container-fluid"
        style={{
          backgroundImage:'url(ngo.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '110vh',
          width: '100vw',
          position: 'relative',
          marginTop: '0px',
        }}
      >
    <div className="container">
      <div className="row">
        {results.map(result => (
          <div key={result.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-title" style={{color:'black'}}>  <b>Child Name :</b> {result.name}</p>
                <p className="card-text" style={{color:'black'}}> <b>Child Age :</b>  {result.age}</p>
                <p className="card-text" style={{color:'black'}}> <b>Child Gender :</b>  {result.gender}</p>
                <p className="card-text" style={{color:'black'}}>  <b>Status :</b> {result.status}</p>
                <p className="card-text" style={{color:'black'}}> <b>Child Preferences :</b>  {result.Preferences}</p>
                <p className="card-text" style={{color:'black'}}> <b>Child Description :</b>  {result.description}</p>
                <p className="card-text" style={{color:'black'}}> <b>Medical History :</b>  {result.Medical_History}</p> 
                <p className="card-text" style={{color:'black'}}>  <b>Contact NGO : </b>{result.NGOEmail}</p>
           
                {!showDonationForm && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        setShowDonationForm(true);
                      setSelectedCardId(result.id);
                      console.log(result.id)
                      setDonationProject(result.name); // Set the donation project when the button is clicked
                      setDonationGender(result.gender)
                      setDonationAge(result.age)
                    }}
                  >
                    Adopt
                  </button>
                )}
                {showDonationForm && selectedCardId === result.id && (
                  <form onSubmit={handleDonationSubmit}>
                    <button type="submit" className="btn btn-warning">
                      Confirm ?
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
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
};
  



 export default CARD2;




