import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  
  return (
    <div className="CreditCardContainer" style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}>
      
      <div className="picCC">
      <img calssName="pic" src={img} alt="credit card">
      </div>
      <p>
        <b>Type:</b> {props.type}
      </p>
      <p>
        <b>First Name:</b> {props.firstName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height}
      </p>
      <p>
        <b>Birth:</b> {props.birth.toDateString()}
      </p>
      </div>

      </div>
       </div>

  )}

export default CreditCard;
