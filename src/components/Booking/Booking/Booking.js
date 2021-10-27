import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
 const [survice, setSuevice]= useState({})

    const {bookingId}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/survices/${bookingId}`)
        .then(res=> res.json())
        .then(data=> setSuevice(data))
    },[])
    return (
        <div className="text-light">
            <h1>This is Booking {bookingId}</h1>
            <h1>{survice.name}</h1>
        </div>
    );
};

export default Booking;