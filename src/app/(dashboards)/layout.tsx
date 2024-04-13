import React from "react";
import Sidebar from "@/components/sidebar";
import { SidebarLinks } from "@/types";
import ResponsiveNavbar from "@/components/reusables/responsiveNavbar";
import {
  Users,
  LayoutDashboard,
  FolderKanban,
  Calendar,
  Menu,
} from "lucide-react";

const links: SidebarLinks[] = [
  {
    name: "Dashboard",
    src: "/dashboard",
    icon: <LayoutDashboard className="lucid" />,
  },
  {
    name: "Clients",
    src: "/clients",
    icon: <Users className="lucid" />,
  },
  {
    name: "Projects",
    src: "/projects",
    icon: <FolderKanban className="lucid" />,
  },
  {
    name: "Calender",
    src: "/calendar",
    icon: <Calendar className="lucid" />,
  },
];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" md:grid md:grid-cols-5 h-screen">
        <section id="Sidebar" className="h-full hidden sm:block">
          {/* <Sidebar/> */}
          <Sidebar links={links} />
        </section>
        <section className="col-span-4  h-screen" id="Main-area">
          <div className="w-full border flex justify-between p-4 items-center h-[10vh]">
            <ResponsiveNavbar links={links} />
          </div>
          <div className="p-4 overflow-y-scroll bg-gray-50 custom-overflow h-[90vh]">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default layout;
