import React, { useEffect, useState } from 'react';
import Survice from '../Home/Survices/Survice';

const ManageSurvice = () => {
    const [survices, setSurvice]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/survices`)
        .then(res=> res.json())
        .then(data=> setSurvice(data))
    },[])

    const deleteSurvice=(id)=>{
      fetch(`http://localhost:5000/survices/${id}`,{
          method:'DELETE'
      })
      .then(res=> res.json())
      .then(data=> {
          console.log(data);
        
              const remaining= survices.filter(survice=> survice._id!==id)
              setSurvice(remaining)
          
      })
    }
    return (
        <div>
            {
                survices.map(Survice=> <div key={Survice._id} className="text-center text-light">
                    <h3>{Survice.name}</h3>
                    <button onClick={()=>deleteSurvice(Survice._id)} className="btn btn-danger"> Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageSurvice;