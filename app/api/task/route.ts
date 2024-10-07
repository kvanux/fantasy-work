import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const taskCreationSchema = z.object({
    title: z.string().min(1).max(255),
})

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = taskCreationSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})
    const newTask = await prisma.task.create({
        data: { title: body.title, description: body.description }
    })
    return NextResponse.json(newTask, {status: 201})
}

export async function GET(request: NextRequest) {
    const tasks = await prisma.task.findMany({});
    return NextResponse.json(tasks, {status: 200})
}