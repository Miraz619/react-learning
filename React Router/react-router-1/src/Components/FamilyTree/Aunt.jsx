import React, { useContext } from 'react';
import { AddContext } from './FamilyTree';

const Aunt = () => {

    const[add,setAdd]=useContext(AddContext);
    return (
        <div>
            <h3>Aunt</h3>
            <button onClick={()=>setAdd(add+100)}>add 100</button>
            <h3>{add}</h3>
        </div>
    );
};

export default Aunt;