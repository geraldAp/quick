import { db } from "@/modules/db";

import React from "react";

import ClientRow from "@/app/(dashboards)/clients/components/clientAccountRow";

type Props = {
  params: {
    id: string;
  };
};

const Clients: React.FC<Props> = async ({ params }) => {
  const account = await db.clientAccount.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      company: true,
      _count: {
        select: {
          Projects: true,
        },
      },
    },
  });

  return (
    <div className="">
      <section className="overflow-x-scroll min-w-[1200px] pr-2 md:min-w-0  ">
        <div id="Table-head" className="mb-6 pb-2 border-b">
          <h2 className="font-semibold text-2xl text-customBlue-300 mb-4">
            Clients Information
          </h2>
          <div
            id="Table-row"
            className="grid grid-cols-6 text-center gap-4 items-center"
          >
            <div className="">Name</div>
            <div className="">Email</div>
            <div className="">Phone</div>
            <div className="">Company</div>
            <div className="">Projects</div>
            <div className="" />
          </div>
        </div>
        <div id="Table-body">
          {account?.map((client) => (
            <ClientRow client={client!} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
