import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';

export default function Coba() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
                inputRef={register}
                label="Filled secondary"
                name="coba"
                variant="outlined"
                color="secondary"
                fullWidth
            />
            <br/>
            <TextField
                inputRef={register}
                label="Filled secondary"
                variant="outlined"
                name="coba1"
                color="secondary"
                fullWidth
            />
            <Button 
            fullWidth
            type='submit'
            variant='contained'
            color='secondary'
            >
                Submit
            </Button>
        </form>
    );
}