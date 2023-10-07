import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom';
import './EnquiryForm.css';

export const EnquiryForm = (props) => {
  const history=useNavigate();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/EnquiryForm",{
        email,name,phone,message
      });
      
    }
    catch(e){
      alert("Something went wrong")
      console.log(e);
    }
  }

  return (
    <div>
      <h2>Send Enquiry</h2>
      <form>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            
            
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            
            
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            value={phone}
            
            
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input
            
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        
          <button type="submit" onClick={handleSubmit}/>
        
      </form>
    </div>
  );
};

export default EnquiryForm;

