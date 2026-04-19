import React, { Suspense, useState } from 'react';

import './User.css'
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

     const[showInfo, setShowInfo]=useState(false); 
     
     const userPromise =fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`).then(res => res.json());

    return (
        <div>
            
            <div className='user-div'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <Link to={`/user/${user.id}`}>Show details</Link>
                <button onClick={()=>setShowInfo(!showInfo)}>{showInfo? 'Hide': 'Detail'}</button>

                {
                    showInfo && <Suspense fallback={<p>loading...</p>}>
                        <UserDetails2 userPromise={userPromise}></UserDetails2>
                    </Suspense>
                }
            </div>
        </div>
    );
};

export default User;