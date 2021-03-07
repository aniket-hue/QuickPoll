import React from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = React.useState(initialValue);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
