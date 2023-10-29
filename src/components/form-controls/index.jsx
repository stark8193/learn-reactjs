import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';


function InputField(props) {
    const {form, name, label, disabled}= props;
    const {errorss, formState} = form;
    //console.log("luan:",formState)
    const hasError = formState.isValid
    console.log(!!hasError)
    return (
       
        <Controller
        render={
            ({ field }) => ( 
                <TextField {...field} error={!!hasError} helperText='' label={label} disabled={disabled} />)
            }
        control={form.control}
        name={name}
      />
       
    );
}

export default InputField;