import React from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';

const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="forms-container">
            <div className='form-content'>
            <h2>Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input id="name" className='.form-field' {...register('name', { required: true })} />
                {errors.name && <p>Name is required</p>}

                <label htmlFor="email">Email:</label>
                <input id="email" className='.form-field' {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                {errors.email && <p>Valid email is required</p>}

                <button type="submit">Submit</button>
            </form>
            </div>
           
        </div>
    );
};

export default Forms;
