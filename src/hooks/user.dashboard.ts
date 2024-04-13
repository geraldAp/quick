import { db } from "@/modules/db";

export const getNumberOfClients = async () => {
  const data = await db.clientAccount.count();
  return data;
};
export const getTotalProjects = async () => {
  const data = await db.project.count();

  return data;
};

export const getUnfinishedProjects = async () => {
  const data = await db.project.count({
    where: {
    status: {
      not: 'complete'
    }

    },
  });

  return data;
};
export const getFinishedProjects = async () => {
  const data = await db.project.count({
    where: {
      status: "complete",
    },
  });
  return data;
};

// export const getPriorityProjects 

export const getAllClients = async () => {
  const data = await db.clientAccount.findMany({})

  return data 
}
