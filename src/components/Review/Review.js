import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        
        fetch('https://young-caverns-24656.herokuapp.com/review',{
          method: 'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
          alert('Review Success')
          
        })
        reset()
        
        
      };
    return (
        <div className="mt-5">
        <h1 className="text-success">Give your valuable review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="p-2 m-2"
            {...register("name")}
            required
            placeholder="Full Name"
          /> <br />
          <input 
            className="p-2 m-2 input-review"
            {...register("review")}
            required
            placeholder="Give your review"
          />
          {/* error   */}
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input className="p-2 fw-bold fs-5 mt-3 btn btn-primary" type="submit" value="Post" />
        </form>
      </div>
    );
};

export default Review;