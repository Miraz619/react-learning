import { useState } from "react"


export default function Run() {
     
    
         const [run, setRun]=useState(3);


        const handleSingle=()=>{

            const addOne=run+1;

            setRun(addOne);
            
        }
       

        const handleFour=()=>{

            const addFour=run+4;

            setRun(addFour);


        }


        return(

            <div>
                <h1>Score : {run}</h1>
                <button onClick={handleSingle}>single</button>
                <button onClick={()=>handleFour()}>four</button>
                <button onClick={()=> setRun(run+6)} >Six</button>
            </div>
        )

}