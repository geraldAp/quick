"use client";
import React, { useRef } from "react";
import { updateClientAccount } from "@/actions/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message:
        "email must be at least 2 characters and please use correct email format.",
    })
    .email(),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
});

type Props = {
  client: {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    company: string | null;
  };
  onCancelClick?: () => void;
  setEditMode: any;
};

const UpdateClientRow: React.FC<Props> = ({
  client,
  onCancelClick,
  setEditMode,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: client.name!,
      email: client.email!,
      phone: client.phone!,
      company: client.company!,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateClientAccount(client.id!, values);
    setEditMode(false);
  }

  return (
    <div className=" bg-white pr-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className=" grid gap-3 items-center grid-cols-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Email</FormLabel>
                  <FormControl>
                    <Input placeholder="doe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Phone Number</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="000000000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Company</FormLabel>
                  <FormControl>
                    <Input placeholder="DenoTech" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
            <Button type="button" variant="secondary" onClick={onCancelClick}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateClientRow;

{
  /* <Button type="button" variant="secondary" onClick={onCancelClick}>
  Cancel
</Button> */
}
