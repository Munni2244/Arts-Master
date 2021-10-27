import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const AddSurvice = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/survices', data)
        .then(res=>{
            console.log(res)
            if(data){
                alert("added successfully")
            };
        })
    };


    return (
        <div className="text-center text-light mt-5">
   <div>
   <h2>Please Add to survices</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register("name")} placeholder="name" className="w-50 my-3 " /> <br />
      <textarea {...register("description")} placeholder="decs" className="w-50"/> <br />

      <input type="number" {...register ("price")} placeholder="price" className="w-50 my-3"/> <br />
      <input {...register("img")} placeholder="img" className="w-50"/> <br />
      <input type="submit" className="w-40 my-3" />
    </form>
   </div>
        </div>
    );
};

export default AddSurvice;