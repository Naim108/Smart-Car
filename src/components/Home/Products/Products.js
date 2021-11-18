import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('https://young-caverns-24656.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1 className="header-color">Our Availeable Product</h1>
            
                    <div className="row mt-4">
            {
                products?.slice(0,6).map(product=><div className="col-md-4 g-4">
                    <Card className="card-container">

           <Card.Body>
           <Card.Text>
           <div>
               <img className="card-img" src={`data:image/png;base64,${product.img}`} alt="" />
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