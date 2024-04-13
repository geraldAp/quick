import React from "react";

import { ClientAccount } from "@prisma/client";
import ClientCard from "./clientCards";
import { CreateClient } from "./createClient";


type Props = {
  clients: ClientAccount[];
};

const ClientsSection: React.FC<Props> = ({ clients }) => {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-2xl mb-2">Clients</h2>
        <div className="flex mb-3 flex-row-reverse">
          <CreateClient/>
        </div>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {clients.map((client) => (
            <ClientCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
