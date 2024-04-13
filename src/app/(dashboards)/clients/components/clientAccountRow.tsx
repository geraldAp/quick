"use client";
import React, { useState } from "react";
import { TableCell, TableRow } from "../../../../components/ui/table";
import ActionButtons from "./ActionButtons";
import UpdateClientRow from "./UpdateClientAccountRow";

type PropType = {
  client: {
    id: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    company: string | null;
    _count:{ Projects: number; }
  };
};

const ClientsRow: React.FC<PropType> = ({ client }) => {
  const [editMode, setEditMode] = useState(false);

  if (editMode)
    return (
      <div className="w-full">
        <UpdateClientRow
          client={client!}
          onCancelClick={() => setEditMode(false)}
          setEditMode={setEditMode}
        />
      </div>
    );

  return (
    <div className="border  grid grid-cols-6 text-center bg-white  items-center border-slate-200 py-3">
      <div className="">
        <p className="font-medium">{client.name}</p>
      </div>
      <div className="overflow-x-scroll custom-overflow-row">
        <p>{client.email}</p>
      </div>
      <div className="overflow-x-scroll custom-overflow-row">
        <p>{client.phone}</p>
      </div>
      <div className="overflow-x-scroll custom-overflow-row">
        <p>{client.company}</p>
      </div>
      <div className="overflow-x-scroll custom-overflow-row">
        <p>{client._count.Projects}</p>
      </div>
      <div className="overflow-hidden">
        <ActionButtons id={client?.id!} onSetEdit={() => setEditMode(true)} />
      </div>
    </div>
  );
};

export default ClientsRow;
