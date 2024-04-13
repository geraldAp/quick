import { db } from "@/modules/db";

import React from "react";
import WorkSessionFormRow from "@/components/NewWorkSessionFormRow";
import SessionRow from "@/app/(dashboards)/clients/components/clientAccountRow";

type Props = {
  params: {
    id: string;
  };
};

const page: React.FC<Props> = async ({ params }) => {
  const account = await db.clientAccount.findUniqueOrThrow({
    where: { id: params.id },
    select: {
      id: true,
      name: true,
    
    },
  });

  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold">{account.name}</h3>
      {/* add a work session */}
      <WorkSessionFormRow id={account.id} />
      <section>
        <div id="Table-head" className="mb-6 pb-2 border-b">
          <div id="Table-row" className="grid grid-cols-5 text-center gap-4 items-center">
            <div className="">Date </div>
            <div className="">Description</div>
            <div className="">Hours to spend</div>
            <div className="">Hours to spend</div>
            <div className="">Hours to spend</div>
            <div className=""/>
          </div>
        </div>
        {/* <div id="Table-body">
          {account?.WorkSessions?.map((session) => (
          <SessionRow session={session!}/>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default page;
