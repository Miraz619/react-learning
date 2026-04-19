import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {

    const user = use(userPromise)
    return (
        <div>
            <p>{user.address.street}</p>
           <p>{user.address.city}</p>
        </div>
    );
};

export default UserDetails2;