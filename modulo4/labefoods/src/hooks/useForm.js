import { useState } from "react";

export const useForm = (initialState, initialStateError) => {
  const [isError, setIsError] = useState(initialStateError ? initialStateError : initialState);
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState(initialState);

  const handleChange = (event) => {
    // console.log("event on handleChange",event)
    // console.log("typeofevent",typeof(event))

    if (typeof event === "string") {
      setForm({ ...form, cpf: event });
      console.log(event);
    } else {
      if (event.target.validity.patternMismatch) {
        setIsError({ ...isError, [event.target.name]: true });
      } else {
        setIsError({ ...isError, [event.target.name]: false });
      }

      setForm({ ...form, [event.target.name]: event.target.value });
    }

    // console.log(form)

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const cleanForm = () => {
    setForm(initialState);
  };

  const updateErrorMessage = (message) => {
    setErrorMessage(message);
  };

  return {
    form,
    setForm,
    isError,
    handleChange,
    cleanForm,
    errorMessage,
    updateErrorMessage,
  };
};
