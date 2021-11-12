import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1 className="header-color">Our Client Feedback</h1>
                    <div className="row mt-4">
            {
                reviews?.slice(0,3).map(review=><div className="col-md-4 g-2">
                    <Card>

           <Card.Body>
           <Card.Text>
           <div>
               <p>{review?.review}</p>
               <h6 className="fw-bold">{review?.name}</h6>
           </div>
          </Card.Text>
         </Card.Body>
          </Card>
                    
                </div>)
            }

        </div>
        </div>
    );
};

export default Reviews;