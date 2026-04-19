import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gym from './todo'
import Many from './many';

function App() {
 
    // const food =["alu", "begun", "kola", "khejur", "milk"]

    const faculty =[

  {id:0, name: "abdus sattar", desig: "professor", dept : "cse"},
  {id:1, name: "abdus rob", desig: "as-professor", dept : "nfe"},
  {id:2, name: "abdus malik", desig: "assistant-professor", dept :"eng"}
  ]


   const food = [
  {id: 0, name: "Pizza", type: "Fast food"},
  {id: 1, name: "Pasta", type: "Italian"},
  {id: 2, name: "Burger", type: "Fast food"}
];

  return (
    <>
      
      <h1>hello</h1>
     
      <Person></Person>
      <Player gname="ts" pname="mujahid"></Player>

      <Gym cname="pavel" weight="50"></Gym>
       <Gym cname="miraz" weight="74"></Gym>

       {/* {
          food.map(food => 
            <Many food={food}></Many>
          )
       } */}

      {
          
          faculty.map(fac => <Faculty fac={fac}></Faculty>)


      }


      {/* Mapping over Food data */}
      <h2>Food List:</h2>
      {food.map(fd => <Faculty key={fd.id} fac={fd} />)} {/* Using the same component */}
     
    </>
  )
}


function Person(){

      const name="miraz"
     return (
      
      <div className='per' >
        <h1>how are you  : {name}</h1>
        <p>i am learning react</p>
      </div>
     )


}


function Player({gname,pname}){

    // const game="cricket";
    // const pname="siddik";
    

  return (

    <div style={{
      backgroundColor: "black",
      color: "white",
      padding: 20,
      fontSize: "20px"

      
    
    
    }}>

        <p>game name : {gname}</p>
        <p>player name: {pname}</p>
       

    </div>

  )

}

function Faculty({fac}){

      return (
    <div>
      <h3>{fac.name}</h3>
      <p>{fac.desig || fac.type}</p> {/* Showing 'desig' for faculty and 'type' for food */}
    </div>
  );
      
    
}


export default App



