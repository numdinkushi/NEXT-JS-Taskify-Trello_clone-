'use client';

import React from 'react';
import { createBoard } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useFormState } from 'react-dom';
import { useAction } from '@/hooks/use-action';
import { FormInput } from "./form-input";

const Form = () => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data, 'Board created successfully');
        },
        onError: (error) => {
            console.error('Error creating board:', error);
        },
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;
        execute({ title });

    };

    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput errors={fieldErrors} />
            </div>
            <Button type='submit'>
                Create
            </Button>
        </form>
    );
};

export default Form;