
import { Suspense } from 'react';
import './App.css'


import Countries from './components/countries/countries'



const countriesPromise= fetch('https://studies.cs.helsinki.fi/restcountries/api/all').then(res=>res.json());



function App() {
 

  

  return (
    <>
      
     

      

      <Suspense fallback="please wait">
         
         <Countries countriesPromise={countriesPromise}></Countries>

      </Suspense>
         
        

     

      
      
      
    </>
  )
}

export default App
