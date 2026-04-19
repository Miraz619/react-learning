import React, { use, useState } from 'react';
import Country from '../country/country';


import './countries.css';

const countries = ({countriesPromise}) => {


    const [vistiedCountries,setvistiedCountries]= useState([]);

    const [flagCount,setflagCount] = useState([]);


    

    const countries= use (countriesPromise);

    const handleVistiedCountries=(country)=>{


       

        const newVisitedCountries=[...vistiedCountries, country];
        setvistiedCountries(newVisitedCountries);
    }



    const handleflagCount=(flag)=>{

                const newflagCount=[...flagCount,flag];

                setflagCount(newflagCount);

    }
   
    return (
        <div >


            <h1 >Traveling Countries</h1>
            
            <h3>Traveled so far: {vistiedCountries.length} </h3>


            <div className='vistited-flags-container'>
                {

                    flagCount.map(flag=> <img src={flag}></img>)
                }
            </div>


            <h3>flag : {flagCount.length}</h3>
            


            <div className='countries'>
                 {  
        
            countries.map(country => <Country country={country} handleVistiedCountries={handleVistiedCountries} handleflagCount={handleflagCount}></Country>)

         }
            </div>
        
        </div>
    );
};

export default countries;       