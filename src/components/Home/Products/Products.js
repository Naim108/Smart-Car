import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://gentle-cove-50707.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1 className="header-color">Our Top Car</h1>
            <p>Order your car</p>
                    <div className="row mt-4">
            {
                products?.map(product=><div className="col-md-4 g-4">
                    <Card className="card-container">

           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={product.img} alt="" />
           <h4 className="fw-bold mt-3">{product.name}</h4>
           <p>{product.description.slice(0,50)}</p>
           <h5 className="fw-bold">Delivery Time: 30 Min</h5>
           <h5 className="fw-bold">Delivery Charge <span className="fw-bold delivery">$5</span></h5>
          
           </div>
          </Card.Text>
         </Card.Body>
          <Card.Footer className="bg-success  fw-bold ">
          <Link to={`products/${product._id}`}><button className="btn text-light fw-bold">Order Details</button> </Link>
          
              

          </Card.Footer>
          </Card>
                    
                </div>)
            }

        </div>
        </div>
    );
};

export default Products;