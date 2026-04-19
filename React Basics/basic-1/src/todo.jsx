

export default function Gym({cname,weight}){

      
     if(weight<=50 || weight>=75){


        return (
            <p>you should go to gym {cname}</p>
        )
     }

     return <p>you are ok but maintain diet</p>

}