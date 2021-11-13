import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
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
            {success && <p>Made Admin successfully!</p>}
        </div>
    );
};

export default MakeAdmin;