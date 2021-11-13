import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://young-caverns-24656.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin added successfull')
                    
                }
                setEmail('')
                
                
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                   
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    />
                <button type="submit" variant="contained">Make Admin</button>
            </form>
            
        </div>
    );
};

export default MakeAdmin;