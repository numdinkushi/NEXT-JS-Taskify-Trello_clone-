import CustomIcons from '@/components/icons/custom-icons';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className='fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center'>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <Button variant='primary' size='sm' className='rounded-sm hidden md:block h-auto py-1.5 px-2'>
          Create
        </Button>
        <Button variant='primary' size='sm' className='rounded sm:block md:hidden'>
          <CustomIcons name='plus' />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization:id"
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl="/organization/:id"
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                minWidth: '24px',
                minHeight: '24px',
              }
            }
          }}
        />
        <UserButton
          afterSignOutUrl='/'
          appearance={{
            elements: {
              avatarBoxBox: {
                height: 30,
                width: 30
              }
            }
          }}
        />
      </div>
    </nav>
  );
}

