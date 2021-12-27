import React from 'react';

const form = {
    name: '',
    status: ''
};

const useForm = () => {
    const [values, setValues] = React.useState(form);


    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setValues(form);
    };

    const handleChange = (event) => {
        let { value } = event.target;
        setValues(values => ({ ...values, [event.target.name]: value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
    };
};

export default useForm;