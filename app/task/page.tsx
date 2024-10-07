import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TaskPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium text-slate-800 mb-6">Tasks</h1>
      <Button asChild className="bg-indigo-700">
        <Link href="/task/new">Add Task</Link>
      </Button>
    </div>
  );
};

export default TaskPage;
