import React from 'react';
import Mother from './Mother';

const Father = ({asset}) => {
    return (
        <div>
            <h3>Father</h3>
            <Mother asset ={asset}></Mother>
        </div>
    );
};

export default Father;