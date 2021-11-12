import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <>
        <Navbar  variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Link className="nav-bar" to="/home">SMART CAR</Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Link className="nav-bar" to="/home">Home</Link>
    <Link className="nav-bar" to="/explore">Explore</Link>
     { user?.email?
         <Dropdown>
         <Dropdown.Toggle className="nav-bar dropdown-color"  id="dropdown-autoclose-true">
           Dashboard
         </Dropdown.Toggle>
     
         <Dropdown.Menu>
           
           
           <Dropdown.Item><Link className="dashboard" to="/myOrders">My Orders</Link></Dropdown.Item>
           <Dropdown.Item><Link className="dashboard" to="/pay">Pay</Link></Dropdown.Item>
           <Dropdown.Item><Link className="dashboard" to="/review">Review</Link></Dropdown.Item>
           <Dropdown.Item><Button className="dashboard" onClick={logOut} >Log Out</Button></Dropdown.Item>
           
         </Dropdown.Menu>
       </Dropdown>
       : ''
     }
     { user?.email?
         <Dropdown>
         <Dropdown.Toggle className="nav-bar dropdown-color"  id="dropdown-autoclose-true">
          Admin Dashboard
         </Dropdown.Toggle>
     
         <Dropdown.Menu>
           <Dropdown.Item><Link className="dashboard" to="/addProduct">Add Products</Link></Dropdown.Item>
           <Dropdown.Item><Link className="dashboard" to="/manageAllOrder">Manage All Order</Link></Dropdown.Item>
           <Dropdown.Item><Button className="dashboard" onClick={logOut} >Log Out</Button></Dropdown.Item>
           
         </Dropdown.Menu>
       </Dropdown>
       : ''
     }
     
      {user?.email ? 
      <Button className="nav-bar" onClick={logOut} >Log Out</Button>
      :
      <Link className="nav-bar" to="/login">Login</Link>

      }
      <Navbar.Text>
         <a className="nav-bar text-light" href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
            
        </>
    );
};

export default Header;