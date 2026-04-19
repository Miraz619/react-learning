import React from 'react';
import { useLoaderData } from 'react-router';

import './Details.css'

const UserDetails = () => {

    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <div className='details'>

                <p>{user.address.street}</p>
                <p>{user.address.city}</p>

            </div>
        </div>
    );
};

export default UserDetails;