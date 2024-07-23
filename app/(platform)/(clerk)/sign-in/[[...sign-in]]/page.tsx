import Centered from '@/components/layouts/centered';
import { SignIn } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
    return (
        <Centered>
            <SignIn />
        </Centered>
    );
};

export default Page;