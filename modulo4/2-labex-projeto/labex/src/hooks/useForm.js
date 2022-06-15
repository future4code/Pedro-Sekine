import { useState } from "react";

export const useForm = (initialState) => {
  const [body, setBody] = useState(initialState);
  const [errors, setErrors] = useState({})


  const onChangeInput = (event) => {
    setBody({ ...body, [event.target.name]: event.target.value });

  
    // ✅✅✅✅✅✅✅✅✅ TESTE
    // console.log(event.target.value)
    const { name } = event.target;
  


    let reg;
    switch (name) {
      case "name":
        reg = new RegExp(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        ).test(event.target.value);
        if (!reg){
          setErrors({...errors, name: "Please use only letters in this field."});
        } else {
          setErrors({...errors, name: ""});
        }
        break;
      case "age":
        reg = new RegExp(
          /^([1][8-9]|[2-9][0-9])$/ 
        ).test(event.target.value);
        if (!reg) {
          setErrors({...errors, age: "Please use only numbers in this field. You must be at least 18."});
        } else {
          setErrors({...errors, age: ""});
        }
        break;
        case "profession":
          reg = new RegExp(
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u          ).test(event.target.value);
          if (!reg) {
            setErrors({...errors, profession: "Please use only letters in this field."});
          } else {
            setErrors({...errors, profession: ""});
          }
          break;
          case "date":
            reg = new RegExp(
              /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ 
            ).test(event.target.value);
            if (!reg) {
              setErrors({...errors, date: "Please follow the format DD/MM/YYYY"});
            } else {
              setErrors({...errors, date: ""});
            }
            break;
      default:
        break;
    }

  };

  const cleanInputFields = () => {
    setBody(initialState);
  };

  return { body, onChangeInput, cleanInputFields, errors };
};
