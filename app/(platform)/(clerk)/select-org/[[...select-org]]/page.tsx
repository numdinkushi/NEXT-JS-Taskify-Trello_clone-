import Centered from "@/components/layouts/centered";
import { OrganizationList } from "@clerk/nextjs";

import React from 'react';

const CreateOrganizationPage = () => {
    return (
        <Centered>
            <OrganizationList
                hidePersonal
                afterSelectOrganizationUrl='/organization/:id'
                afterCreateOrganizationUrl='/organization/:id'
            />
        </Centered>
    );
};

export default CreateOrganizationPage;