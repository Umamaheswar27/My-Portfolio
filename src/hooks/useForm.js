import { useState } from 'react';

export function useForm(initial) {
  const [values, setValues] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setValues(initial);
      setSubmitted(false);
    }, 3000);
  };

  return { values, submitted, handleChange, handleSubmit };
}
