'use client';

import Sidebar from '@/app/(platform)/_components/sidebar';
import CustomIcons from '@/components/icons/custom-icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSidebarStore } from '@/hooks/use-mobile.sidebar';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MobileSidebar = () => {
    const pathName = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebarStore((state) => state.onOpen);
    const onClose = useMobileSidebarStore((state) => state.onClose);
    const isOpen = useMobileSidebarStore((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathName, onClose]);

    if (!isMounted) return null;

    return (
        <>
            <Button
                onClick={onOpen}
                className='block md:hidden mr-2'
                variant='ghost'
                size='sm'
            >
                <CustomIcons name='menu' className='h-4 w-4' />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side='left'
                    className='p-2 pt-10'
                >
                    <Sidebar
                        storageKey='t-sidebar-mobile-state'
                    />
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileSidebar;