import React, { useState } from 'react';

import './country.css'

const country = ({country, handleVistiedCountries, handleflagCount}) => {


      const [visited, setVistited] =useState(false);

      

        const handleVistied = () =>{
            setVistited(!visited);
            
            
            handleVistiedCountries(country);
            
            
        }


    return (
        <div className={`country  ${visited && 'country-vistied'}`}>
           
           <img src={country.flags.png} alt="" />
            <p>Name: {country.name.common}</p>
            <p>Independent: {country.independent? "yes" : "no" }</p>
            <button className={visited? 'btn-vistied': 'btn-not-visited'}  onClick={handleVistied}>{visited? "visted": "not vistied"}</button>

            <button onClick={()=>handleflagCount(country.flags.png)}>flags</button>
        </div>
    );
};

export default country;