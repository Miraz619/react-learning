import React, { useState } from 'react';

const ControlledField = () => {

     const [password, setPassword]= useState('');
     const [error,setError]= useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('submitted');
         if(password.length < 6){
            setError('pass must be 6  character or longer');
        }
        else{
            setError('');
        }

    }

    const handlePassword =(e) =>{

        console.log(e.target.value);
        setPassword(e.target.value);

        
    }
    return (
        <div>
            

            <form onSubmit={handleSubmit}>


                <input type="text" />
                <br />
                <input type="password" onChange={handlePassword} defaultValue={password} name="pass" id="pass" />
                <br />

                <input type="submit" value="submit" />
            </form>

            <p>
                {error}
            </p>
            
        </div>
    );
};

export default ControlledField;