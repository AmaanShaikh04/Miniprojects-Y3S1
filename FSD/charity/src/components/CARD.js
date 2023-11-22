
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './CARD.css'
import '../App.css';

function CARD() {
  const email = localStorage.getItem('userEmail');
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [results, setResults] = useState([]);
  const [donationAmount, setDonationAmount] = useState(0);
  const [donationProject, setDonationProject] = useState('');
  const [donationGender, setDonationGender] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null);
const DONOREmail = localStorage.getItem('userEmail')
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
  const donationData = { NGOEmail, DONOREmail:DONOREmail,name: donationProject, gender:donationGender,Donation: donationAmount };

  fetch('http://localhost:5000/donation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donationData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setDonationAmount(0); // Clear the donation amount after successful submission
      setShowDonationForm(false); // Hide the donation form
   
    })
    .catch(error => console.log(error));
    alert('Donated Successfully')
};

  

  return (
    <>
      <Navbar title="Donor" _email={email}/>
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
                        setDonationProject(result.name); // Set the donation project when the button is clicked
                        setDonationGender(result.gender)
                      }}
                    >
                      Add Donation
                    </button>
                  )}
                  {showDonationForm && selectedCardId === result.id && (
                    <form onSubmit={handleDonationSubmit}>
                      <div className="form-group">
                        <label htmlFor="donationAmount">Donation Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          id="donationAmount"
                          value={donationAmount}
                          onChange={event => setDonationAmount(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="donationProject">Child Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="donationProject"
                          value={donationProject}
                          readOnly
                        />
                      </div>
                      <button type="submit" className="btn btn-warning">
                        Donate
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
}

export default CARD;


