import React from 'react';
import OrganizationControl from './_components/auth-control';

const OrganizationIdLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div>
            <OrganizationControl />
            {children}
        </div>
    );
};

export default OrganizationIdLayout;