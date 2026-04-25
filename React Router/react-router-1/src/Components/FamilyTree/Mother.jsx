import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Mother = ({asset}) => {
    const newAsset = useContext(AssetContext);
    return (
        <div>
            <h3>Mother</h3>
            <h3>{asset}</h3>
            <h3>{newAsset}</h3>
        </div>
    );
};

export default Mother;