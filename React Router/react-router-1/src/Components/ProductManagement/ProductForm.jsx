import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {
       const[error, setError]=useState('');
      const handleSubmit = e =>{

            e.preventDefault();

            const name = e.target.name.value;
            const price = e.target.price.value;
            const quantity = e.target.quantity.value;


            if(name.length===0){

                setError('name can not be empty');
            }
            
            else if(price<0){
                setError('price cant be negative');
            }

            else{
                setError('');
            }

            const newProduct = {
                name,
                price,
                quantity
            }
           
            if(!error)
            handleProduct(newProduct);
      }

    return (
        <div>

              <h3>Add  a Product</h3>
            <form onSubmit={handleSubmit}>

                <input type="text"  name='name'  placeholder='Product Name'/>
                <br />
                <input type="text"  name='price' placeholder='Product Price'/>
                <br />
                <input type="text"  name='quantity' placeholder='Product Quantity'/>
                <br />
                <input type="submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;