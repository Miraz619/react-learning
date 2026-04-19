import { useState } from "react"


export default function Couter(){

          
         const[count, setCount]= useState(0);
       

        
           const handleAdd = () =>{

                 const newCount=count+1;

                 setCount(newCount);

           }

    return (

        
        <div>
            <h1>count : {count}</h1>
            <button onClick={handleAdd}>add</button>
        </div>
        

        








    )





}