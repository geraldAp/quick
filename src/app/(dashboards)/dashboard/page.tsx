import {
  getAllClients,
  getFinishedProjects,
  getNumberOfClients,
  getTotalProjects,
  getUnfinishedProjects,
} from "@/hooks/user.dashboard";
import AnalyticsSection from "./components/AnalyticsSection";
import ClientsSection from "./components/ClientsSection";
import React from "react";

const Dashboard = async () => {
  const [
    clientTotal,
    projectsTotal,
    unfinishedTotal,
    finishedTotal,
    clientAccounts,
  ] = await Promise.all([
    getNumberOfClients(),
    getTotalProjects(),
    getUnfinishedProjects(),
    getFinishedProjects(),
    getAllClients(),
  ]);

  const totals = [
    { name: "Clients", value: clientTotal.toString() },
    { name: "Projects", value: projectsTotal.toString() },
    { name: "Unfinished Projects", value: unfinishedTotal.toString() },
    { name: "Finished Projects", value: finishedTotal.toString() },
  ];

  return (
    <main>
      <section id="AnalyticsSection" className="mb-4">
        <AnalyticsSection totals={totals!} />
      </section>
      <section id="ClientsSection" className="mb-4">
        <ClientsSection clients={clientAccounts} />
      </section>
    </main>
  );
};

export default Dashboard;
