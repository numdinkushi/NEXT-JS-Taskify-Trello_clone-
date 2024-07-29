import Sidebar from '@/app/(platform)/_components/sidebar';
import React from 'react';

const OrganizationLayout = ({ children }: { children: React.ReactNode; }) => {

    return (
        <main className=' md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto'>
            <div className="flex gap-x-7">
                <div className="w-64 shrink-0 hidden md:block  border-r border-gray-300 h-[90vh]">
                    <Sidebar />
                </div>
                {children}
            </div>
        </main>
    );
};

export default OrganizationLayout;