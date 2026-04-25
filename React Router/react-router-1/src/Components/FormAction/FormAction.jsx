import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData) =>{

        console.log(formData.get('name'));

    }
    return (
        <div>
            <form action={handleFormAction}>

                <input type="text" name='name' />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit"  />
            </form>
        </div>
    );
};

export default FormAction;