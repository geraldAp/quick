"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { deleteClient } from "@/actions/actions";
import { Pencil, Trash2 } from "lucide-react";
const ActionButtons = ({ id , onSetEdit}: { id: string; onSetEdit: () => void }) => {
  return (
    <div className="flex items gap-1 text-right w-full">
      <Button size="sm" className="text-slate-500" variant="ghost" onClick={onSetEdit}>
        <Pencil size={16} />
      </Button>
      <Button
        size="sm"
        className="text-slate-500"
        variant="ghost"
        onClick={async () => {
          deleteClient(id);
        }}
      >
        <Trash2 color="red" size={16} />
      </Button>
    </div>
  );
};

export default ActionButtons;
