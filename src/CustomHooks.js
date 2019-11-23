import React, { useState } from "react";

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({ name: "", importance: "" });

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useSignUpForm;
