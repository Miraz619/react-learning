import React from 'react';
import Father from './Father';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <div className='flex'>
                <Father asset ={asset} ></Father>
                <Aunt></Aunt>
            </div>
        </div>
    );
};

export default Grandpa;