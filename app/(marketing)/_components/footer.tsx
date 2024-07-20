'use client';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

export const Footer = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className='fixed bottom-0 w-full p-4 border-t bg-slate-100'>
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
                    <Button size='sm' variant='ghost'>
                            Privacy Policy
                    </Button>
                    <Button size='sm' variant='ghost' >
                           Terms of service
                    </Button>
                </div>
            </div>
        </div>
    );
}

