import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import EnquiryForm from './EnquiryForm';
const Card = ({ cardData }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="card">
      <div className='Imgbx'>
        <img src={cardData.imageUrl} alt={cardData.name} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title"> <span name={cardData.name}>{cardData.name}</span></h2>
        <div className='price'>
          <p>Price:   {cardData.price}</p>
        </div>
        <div className='Detail'>
          {showForm ? (
            <EnquiryForm dogName={cardData.name} imageUrl={cardData.imageUrl} />
          ) : (
            <Link
              to="#"
              className="details-button"
              onClick={() => setShowForm(true)}
            >
              Send Enquiry
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;




