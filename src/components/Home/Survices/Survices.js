import React, { useEffect, useState } from 'react';
import Survice from './Survice';
import './Survices.css'

const Survices = () => {
    const [survices, setSurvices]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/survices')
        .then(res=> res.json())
        .then(data=> setSurvices(data))
    },[])
    return (
        <div className="container" id="survice">
            {
                survices.map(survice=><Survice survice={survice} key={survice.id}></Survice>)
            }
        </div>
    );
};

export default Survices;