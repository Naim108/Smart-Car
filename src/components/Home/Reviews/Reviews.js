import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
    const [reviews,setReviews]=useState([])

    useEffect(()=>{
        fetch('https://young-caverns-24656.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
        
      },[])
    return (
        <div className="container mt-5">
            <h1 className="header-color">Our Client Feedback</h1>
                    <div className="row mt-4">
            {
                reviews?.map(review=><div className=" col-md-4 g-2">
                    <Card className="card-image">

           <Card.Body>
           <Card.Text>
           <div>
               <p className="ms-5 mt-5 me-5">{review?.review.slice(0,150)}</p>
               <h6 className="fw-bold name ">{review?.name}</h6>
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