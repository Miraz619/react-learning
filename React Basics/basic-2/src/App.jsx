import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import User from './user.jsx'

import Couter from './count'

import Run from './run.jsx'

import People from './people.jsx'


 const fetchUser=fetch('https://jsonplaceholder.typicode.com/users/1/albums')
                  .then(res =>res.json());


const fetchPeople=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

function App() {
  
        
    function handleClick(time){

      alert('i am clicked ' + time)
    }


  return (
    <>

      <Suspense fallback={<h1>Loading...</h1>}>
      <User person={fetchUser}></User>
      </Suspense>


      


      <Suspense fallback= {<p>plese wait....</p>}>


      <People peopleData={fetchPeople}></People>


      </Suspense>

      <h1>lession 2</h1>
      <button onClick={()=> handleClick(5)}>Click me</button>
      <Run></Run>
      <Couter></Couter>
    </>
  )
}

export default App
