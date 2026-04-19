import { use } from "react"


export default function Userp({person}){

    
    const user=use(person);
    console.log(user);


   return(


    <div className="user">
        <h1>User : {user.length}</h1>
    </div>




   )






}