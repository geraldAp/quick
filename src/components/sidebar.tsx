"use client";
import React from "react";
import Link from "next/link";
import { SidebarLinks } from "@/types";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Settings } from "lucide-react";
type Props = {
  links: SidebarLinks[];
};

const Sidebar: React.FC<Props> = ({ links }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="p-4 flex  h-full  flex-col rounded-md shadow-sm ">
      <div id="Logo" className="mb-3 pb-3 ">
        <h2 className="text-2xl text-primaryTheme-400 font-bold ">Logo</h2>
      </div>
      <section className="flex-1">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            {links.map((link, i) => (
              <Link href={link.src} key={i}>
                <div
                  className={`p-4 text-sm flex gap-2 items-center ${
                    pathname === link.src ? "rounded-md bg-primaryTheme-10 " : ""
                  } `}
                >
                  <span className="text-primaryTheme-300 text-sm">
                    {link.icon}
                  </span>
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          <div>
            <div>
              <button className="flex mb-4 items-center gap-2 text-primaryTheme-300 ">
                {" "}
                <Settings className="lucid" />{" "}
                <span className="text-customBlue-300">Settings</span>
              </button>
            </div>
            <div>
              <button className="flex items-center gap-2 text-primaryTheme-300 ">
                <LogOut className="lucid" />{" "}
                <span className="text-customBlue-300">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Sidebar;
