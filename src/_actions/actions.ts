//app/actions/route.ts
"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
      isCompleted: false,
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  const id = parseInt(inputId);

  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  const id = parseInt(inputId);

  await prisma.todo.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/");
}

export async function todoStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  const id = parseInt(inputId);

  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}
