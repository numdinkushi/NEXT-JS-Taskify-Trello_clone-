'use client';

import { ListWithCards } from "@/types/types";
import { List } from "@prisma/client";

interface ListContainerProps {
    data: ListWithCards[],
    boardId: string,
}

import React from 'react';
import ListForm from "./list-form";

const ListContainer = ({
    data,
    boardId,
}: ListContainerProps) => {
    return (
        <ol>
            <ListForm />
            <div className="flex-shrink-0 w-1" />
        </ol>
    );
};

export default ListContainer;