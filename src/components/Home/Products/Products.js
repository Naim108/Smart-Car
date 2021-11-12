import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1 className="header-color">Our Top Car</h1>
            <p>Order your car</p>
                    <div className="row mt-4">
            {
                products?.slice(0,6).map(product=><div className="col-md-4 g-4">
                    <Card className="card-container">

           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={product.img} alt="" />
           <h4 className="fw-bold">{product.name}</h4>
           <p className="fw-bold text-secondary">{product.description.slice(0,100)}</p>
           </div>
           <div className="row">
               <div className="col-md-6">
                   <p>${product.price}</p>
               </div>
               <div className="col-md-6">
                   <p>22/32</p>
               </div>
           </div>
          </Card.Text>
         </Card.Body>
          <Card.Footer className="bg-success  fw-bold ">
          <Link to={`products/${product._id}`}><button className="btn text-light fw-bold">Order Now</button> </Link>
          
              

          </Card.Footer>
          </Card>
                    
                </div>)
            }

        </div>
        </div>
    );
};

export default Products;