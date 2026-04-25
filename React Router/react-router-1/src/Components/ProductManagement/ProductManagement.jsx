import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const[product, setProduct]=useState([]);

    const handleProduct = (iproduct)=>{

        const newProduct= [...product, iproduct ];

        setProduct(newProduct);
    }
    return (
        <div>
            <ProductForm handleProduct={handleProduct}></ProductForm>
            <ProductTable product={product}></ProductTable>
        </div>
    );
};

export default ProductManagement;