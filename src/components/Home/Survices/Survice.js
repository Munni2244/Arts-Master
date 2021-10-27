import React from 'react';
import { Link } from 'react-router-dom';
import './Survice.css'


const Survice = ({survice}) => {
    const {name,_id, img, price, description}=survice;
    return (
      <div >
            <div className="single-container">
            <img src={img} alt="" />
            <h1 style={{color:"black"}}>{name}</h1>
            <p>{description}</p>
            <h3 style={{color:""}}>${price}</h3>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-warning m-4">Booking Now</button>
           </Link>
         </div>
      </div>
    );
};

export default Survice;