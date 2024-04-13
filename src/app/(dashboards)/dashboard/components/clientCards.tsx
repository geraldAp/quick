import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClientAccount } from "@prisma/client";
import { Users } from "lucide-react";
const ClientCards = ({ name, email, phone, company }: ClientAccount) => {
  return (
    <Card className="border-0 p-4 cursor-pointer hover:scale-95 ease-in duration-300">
      <div className="pb-2 flex items-center gap-3 mb-3">
        <Users className="lucid text-primaryTheme-200" />
        <CardTitle className="text-primaryTheme-50">{name}</CardTitle>
      </div>
      <CardContent className="p-0 text-sm py-0">
        <p className=" font-medium">
          Email: <span className="font-semibold text-primaryTheme-400">{email}</span>{" "}
        </p>
        <p className=" font-medium">
          Phone: <span  className="font-semibold text-primaryTheme-400">{phone}</span>
        </p>
        <p className=" font-medium">
          Company: <span  className="font-semibold text-primaryTheme-400">{company}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default ClientCards;
