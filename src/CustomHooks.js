import React, { useState } from 'react'

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
        console.log(inputs);
    }
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        alert(inputs);
        console.log(inputs);

    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };

}

export default useSignUpForm;