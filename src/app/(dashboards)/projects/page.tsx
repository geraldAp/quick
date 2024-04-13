import React from "react";
import ProjectSection from "./components/projectSection";
import { db } from "@/modules/db";
const page = async () => {
  const projects = await db.project.findMany({
    select: {
      id: true,
      projectName: true,
      clientName: true,
      description: true,
      priority:true,
      status:true,
      _count:{
        select:{
          tasks:true
        }
      },
      account:{
        select:{
          name:true,
          company:true
        }
      }
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold opacity-70 mb-3">Your Projects</h2>
      <section id="ProjectSection">
        <ProjectSection projects={projects!} />
      </section>
    </div>
  );
};

export default page;
