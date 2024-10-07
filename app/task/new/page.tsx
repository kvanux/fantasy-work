"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NewTaskPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium text-slate-800 mb-6">
        Create New Task
      </h1>
      <div className="w-1/3 flex flex-col mb-5 gap-4">
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="Title">Title</Label>
          <Input placeholder="Enter task title" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Label htmlFor="Description">Description</Label>
          <Textarea placeholder="Enter task description" />
        </div>
      </div>

      <Button asChild className="bg-indigo-700">
        <Link href="/task">Create Task</Link>
      </Button>
    </div>
  );
};

export default NewTaskPage;
