import React from 'react';

const Form = () => {

     const handleSubmit= (e)=>{

        e.preventDefault();

       console.log(e.target.name.value);
       console.log(e.target.email.value)

     }
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input type="text" placeholder='name' name='name' />
            <br />
            <input type="emial"  name='email'/>
            <br />
            <input type="submit" />

            </form>
        </div>
    );
};

export default Form;