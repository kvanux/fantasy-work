"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";

interface TaskForm {
  title: string;
  description: string;
}

const NewTaskPage = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm<TaskForm>();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium text-slate-800 mb-6">
        Create New Task
      </h1>

      {error && (
        <Alert className="w-1/3 mb-6 bg-red-100 border-red-300">
          <CircleAlert className="h-4 w-4" color="#991b1b"></CircleAlert>
          <AlertTitle className="text-red-700">Creation error</AlertTitle>
          <AlertDescription className="text-red-700">
            Why are you doing this?
          </AlertDescription>
        </Alert>
      )}

      <form
        className="w-1/3 flex flex-col mb-5 gap-4"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/task", data);
            router.push("/task");
          } catch (error) {
            setError("Why are you doing this?");
          }
        })}
      >
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="Title">Title</Label>
          <Input placeholder="Enter task title" {...register("title")} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="Description">Description</Label>
          <Textarea
            placeholder="Enter task description"
            {...register("description")}
          />
        </div>
        <Button className="bg-indigo-700 mt-2">Create Task</Button>
      </form>
    </div>
  );
};

export default NewTaskPage;
