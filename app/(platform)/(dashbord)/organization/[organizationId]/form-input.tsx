import React from 'react';
interface FormInputProps {
    errors?: {
        title?: string[];
    };
    // errors?: Record<string, any>;
}

export const FormInput = ({ errors }: FormInputProps) => {
    return (
        <div className="">
            <input
                id='title'
                name='title'
                required
                placeholder='Enter a board title'
                className='border-black border p-1 '
            />

            {
                errors?.title ? (
                    <div className="">
                        {errors?.title.map((error: string, index) => (
                            <div key={index} className=" text-red-500">
                                {error}
                            </div>
                        ))
                        }
                    </div>
                ) : null
            }

        </div>
    );
};

