import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders,setOrders]=useState([])
    const {user}=useAuth()

    

    useEffect(()=>{
        fetch('https://young-caverns-24656.herokuapp.com/myOrders')
        .then(res=>res.json())
        .then(data=>{
            const order=data.filter(order=>order?.email===user?.email)
            setOrders(order)
        })
        
      },[])
      const handleDeleteOrder=id=>{
        const url=`https://young-caverns-24656.herokuapp.com/manageAllOrder/${id}`
        fetch(url,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Order Cancel.You agree?if you order cancel.Please click ok.')
                const afterSuccess=orders.filter(order=>order._id !== id);
                setOrders(afterSuccess)
            }

        })
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
          orders?.map(order=><tr>
              <td>{order._id}</td>
      <td>{order.userName}</td>
      <td>{order.email}</td>
      <td>{order.date}</td>
      <td>{order.address}</td>
      <td className="text-primary">Pending</td>
      <td ><button onClick={()=>handleDeleteOrder(order._id)} className="btn btn-warning ">Cancel</button></td>
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

export default MyOrders;