import React from 'react';
import useInputField from '../../Hooks/useinputField';

const HookForm = () => {
   
     const[name, setName]= useInputField('');
     const[email, setEmail]= useInputField('');
    const handleSubmit = e =>{

        e.preventDefault();
        console.log('submit', name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input onChange={setName} type="text" />
                <br />
                <input type="email"  onChange={setEmail}/>
                <input type="submit"  />
            </form>
        </div>
    );
};

export default HookForm;