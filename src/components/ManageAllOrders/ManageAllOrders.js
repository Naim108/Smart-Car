import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {
    const [orders,setOrders]=useState([])
    const {user}=useAuth()
    const email=user.email

    useEffect(()=>{
        fetch(`http://localhost:5000/manageAllOrder`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
        
      },[])
      const handleDeleteOrder=id=>{
        const url=`http://localhost:5000/manageAllOrder/${id}`
        fetch(url,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Deleted Successfully')
                const afterSuccess=orders.filter(order=>order._id !== id);
                setOrders(afterSuccess)
            }

        })
    }
    const handleApprove=e=>{
        // console.log(e.target.value)
    }
    return (
<div className=" container mt-5">
           <div className="row">
               <div className="col-md-12 text-center">
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Username</th>
      <th>Email</th>
      <th>Date</th>
      <th>Address</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    
      {
          orders?.map(order=><tr key={order._id}>
              <td>{order._id}</td>
      <td>{order.email}</td>
      <td>{order.userName}</td>
      <td>{order.date}</td>
      <td>{order.address}</td>
      <td> <button onClick={handleApprove} className="btn btn-success ">Approve</button></td>
      <td><button onClick={()=>handleDeleteOrder(order._id)} className="btn btn-warning ">Delete</button></td>
          </tr>
              
          )
      }
    

  </tbody>
</Table>
               </div>
           </div>
        </div>
    );
};

export default ManageAllOrder;