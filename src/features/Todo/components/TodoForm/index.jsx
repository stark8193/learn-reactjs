import React from 'react';
import InputField from '../../../../components/form-controls';
import { useForm } from 'react-hook-form';
import './style.css'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string().required('Please enter')
    })

    const form = useForm({
        defaultValues:{
            title: ''
        },
       resolver: yupResolver(schema)
    })

    const handleSubmit =(values)=>{
       console.log(values)
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            
            <InputField name="title" label='ten tai khoan' form={form}/>
        </form>
    );
}

export default TodoForm;