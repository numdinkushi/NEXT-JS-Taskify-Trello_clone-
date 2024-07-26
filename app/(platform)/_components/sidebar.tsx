'use client';
import CustomIcons from '@/components/icons/custom-icons';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, OrganizationList, useOrganizationList } from '@clerk/nextjs';
import { LucideThermometerSnowflake } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import NavItem, { Organization } from './nav-item';

interface SidebarProps {
    storageKey?: string;
}

const Sidebar = ({ storageKey = 't-sidebar-state' }: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});
    const {
        organization: activeOrganization,
        isLoaded: isLoadedOrg
    } = useOrganization();
    const {
        userMemberships,
        isLoaded: isLoadedOrgList
    } = useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    });

    const defaultAccordionValue: string[] = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key);
            }
            return acc;
        }, []);

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !curr[id],
        }));
    };

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <div className='flex items-center justify-between mb-2'>
                    <Skeleton className='h-10 w-[50%]' />
                    <Skeleton className='h-10 w-10' />
                </div>
                <div className="space-y-2">
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="font-medium text-xs justify-between flex items-center mb-1">
                <span className='pl-4 font-bold'>
                    Workspaces
                </span>
                <Link href='/select-org'>
                    <Button
                        asChild
                        type='button'
                        size='icon'
                        variant='ghost'
                        className='ml-auto'
                    >
                        <CustomIcons name='plus' className='h-4 w-4' />
                    </Button>
                </Link>
            </div>
            <Accordion
                type='multiple'
                defaultValue={defaultAccordionValue}
                className='space-y-2'
            >
                {userMemberships.data.map((organization) => {
                    const org = organization.organization as unknown as Organization; // First cast to unknown, then to Organization
                    return (
                        <NavItem
                            key={org.id}
                            isActive={activeOrganization?.id === org.id}
                            isExpanded={expanded[org.id]}
                            organization={org}
                            onExpand={onExpand}
                        />
                    );
                })}
            </Accordion>
        </>
    );
};

export default Sidebar;
