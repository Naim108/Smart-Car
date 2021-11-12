import React from "react";
import { useForm } from "react-hook-form";
import car from '../../images/car.jpg'
const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    fetch('https://young-caverns-24656.herokuapp.com/addProduct',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      alert('Product added Successfully')
      
    })
    reset()
    
    
  };
  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-md-7">
        <h1>Add Car to mongodb Database</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Car name"
        /> <br />
        <input type="number"
          className="p-2 m-2"
          {...register("price")}
          required
          placeholder="Car price"
        /> <br />
        <input
          className="p-2 m-2"
          {...register("img")}
          required
          placeholder="Car image link"
        /> <br />
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder=" Car details"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="p-1 mt-3 btn btn-warning" type="submit" />
      </form>
        </div>
        <div className="col-md-5 mt-2">
          <img className=" w-100" src={car} alt="" />

        </div>
      </div>
    </div>
  );
};

export default AddProducts;
