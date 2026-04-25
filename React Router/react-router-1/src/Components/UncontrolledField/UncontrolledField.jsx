import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit= e => {

        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
        
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>

                <input ref={emailRef} type="text" />
                <br />
                <input ref={passRef} type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;