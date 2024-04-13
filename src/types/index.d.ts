export type SidebarLinks = {
  name: string;
  src: string;
  icon: JSX.Element;
};

export type Total = {
  name: string;
  value: string;
};

export type UserProjects = {
  id: string;
  projectName: string;
  description: string | null;
  status: string;
  priority: string;
  _count: {
    tasks: number;
  };
  account: {
    name: string;
    company: string | null;
  };
};
