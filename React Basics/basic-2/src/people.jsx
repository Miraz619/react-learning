import { use } from "react"


export default function People({peopleData}){

     
    const people=use(peopleData);

     return(

        <h1>People: {people.length}</h1>
     )

}