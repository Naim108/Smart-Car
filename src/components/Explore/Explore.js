import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import './Explore.css'

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
            <h6 className="header-color">Top 100 Car</h6>
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

       </div>
    );
};

export default Explore;