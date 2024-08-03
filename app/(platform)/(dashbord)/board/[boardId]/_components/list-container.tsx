'use client';

import { ListWithCards } from "@/types/types";
import { List } from "@prisma/client";

interface ListContainerProps {
    data: ListWithCards[],
    boardId: string,
}

import React, { useEffect, useState } from 'react';
import ListForm from "./list-form";
import ListItem from "./list-item";

const ListContainer = ({
    data,
    boardId,
}: ListContainerProps) => {
    const [orderedData, setOrderedData] = useState(data);

    useEffect(() => {
        setOrderedData(data);
    }, [data]);


    return (
        <ol className="flex gap-x-3 h-full ">
            <ListForm />
            {
                orderedData.map((list, index) => (
                    <ListItem
                        key={index}
                        index={index}
                        data={list}
                    />
                ))
            }
            <div className="flex-shrink-0 w-1" />
        </ol>
    );
};

export default ListContainer;