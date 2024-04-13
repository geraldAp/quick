"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import CreateClientForm from "./createClientForm";
import { Button } from "@/components/ui/button";
import { set } from "zod";

export function CreateClient() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <div
          onClick={() => setOpen(true)}
          className="flex items-center cursor-pointer rounded-full px-2 py-1 text-white bg-primaryTheme-400 shadow-sm gap-2"
        >
          <CirclePlus className="" size={18} />
          <span className="font-semibold">add</span>
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Client </DialogTitle>
          <DialogDescription>Create a new client account</DialogDescription>
        </DialogHeader>
        <CreateClientForm closeDialogue={() => setOpen(false)} />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
