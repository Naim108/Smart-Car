import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Explore.css';

const Explore = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://young-caverns-24656.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
      },[])
    return (
       <div>
           <div className="bg-primary">
           <Header></Header>
           </div>
           <div className="container mt-5">
            <h6 className="text-primary fw-bold fs-5">Find your expect car </h6>
                    <div className="row mt-4">
            {
                products?.map(product=><div className="col-md-4 g-4">
                    <Card className="card-design">

           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={product.img} alt="" />
           <h4 className="fw-bold">{product.name}</h4>
           <p className="fw-bold text-secondary">{product.description.slice(0,100)}</p>
           </div>
           <div className="row">
               <div className="col-md-6">
                   <p className="fw-bold">${product.price}</p>
               </div>
               <div className="col-md-6">
                   <p className="fw-bold">22/32</p>
               </div>
           </div>
          </Card.Text>
         </Card.Body>
          <Card.Footer className="btn-color  fw-bold ">
          <Link to={`products/${product._id}`}><button className="btn text-light fw-bold">Order Details</button> </Link>
          
              

          </Card.Footer>
          </Card>
                    
                </div>)
            }

        </div>
        </div>

       </div>
    );
};

export default Explore;