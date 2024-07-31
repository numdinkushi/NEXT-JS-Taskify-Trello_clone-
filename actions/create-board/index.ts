'use server';

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId, orgId } = auth();
    const { title, image } = data;
    const [
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName
    ] = image.split("|");

    console.log({
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageLinkHTML,
        imageUserName
    });

    if (!imageId || !imageThumbUrl || !imageFullUrl || !imageLinkHTML || !imageUserName) {
        return {
            error: "Invalid image data, failed to create board"
        };
    }

    let board;

    if (!userId || !orgId) {
        return {
            error: "Unauthorized"
        };

    }
    try {
        board = await db.board.create({
            data: {
                title,
                orgId,
                imageId,
                imageFullUrl,
                imageLinkHTML,
                imageUserName,
                imageThumbUrl,
            }
        });
    } catch (error) {

        return {
            error: "Failed to create",
        };
    }

    revalidatePath(`/board/${board.id}`);

    return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);