"use server";
import { z } from "zod";
import { db } from "@/modules/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Define the Zod schema for creating an account
const createAccountSchema = z.object({
  name: z.string().min(1).max(40),
});

// Function to create an account
export const createAccount = async (
  name: string,
  email: string,
  phone: string,
  company: string
) => {
  if (!name) {
    throw new Error("Name field is required.");
  }

  // Create the account using the parsed data
  await db.clientAccount.create({
    data: {
      name,
      email,
      phone,
      company,
    },
  });

  // Redirect to the newly created account
  revalidatePath(`/dashboard`);
};

const nullifyEmptyString = (val: unknown) => (val === "" ? null : val);

// export const createWorkSession = async (rawData: FormData) => {
//   const data = createWorkSessionSchema.parse({
//     accountId: rawData.get("accountId"),
//     startsOn: rawData.get("startsOn"),
//     description: rawData.get("description"),
//     hours: rawData.get("hours"),
//   });

//   const workSession = await db.workSession.create({
//     data,
//   });
//   revalidatePath(`/accounts/${workSession.accountId}`);
// };

type UpdateClientType = {
  name: string;
  phone: string;
  email: string;
  company: string;
};

export const updateClientAccount = async (
  id: string,
  values: UpdateClientType
) => {
  const { name, phone, email, company } = values;
  await db.clientAccount.update({
    data: {
      name,
      phone,
      email,
      company,
    },
    where: { id: id },
  });

  revalidatePath(`/clients`);
};

export const deleteClient = async (accountId: string) => {
  await db.clientAccount.delete({ where: { id: accountId } });
  revalidatePath(`/clients`);
};
