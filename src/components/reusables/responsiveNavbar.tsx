"use client";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { SidebarLinks } from "@/types";
import { usePathname } from "next/navigation";

type Props = {
  links: SidebarLinks[];
};
const ResponsiveNavbar: React.FC<Props> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className="p sm:hidden  border rounded-md cursor-pointer "
        onClick={() => setOpen(true)}
      >
        <Menu className="text-gray-400 size-7" />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="sm:max-w-xs">
          <div className="mt-7 flex flex-col">
            {links.map((link, i) => (
              <Link href={link.src} key={i}>
                <SheetClose asChild>
                  <div
                    className={`p-4 text-sm flex gap-2 items-center ${
                      pathname === link.src
                        ? "rounded-md bg-primaryTheme-10 "
                        : ""
                    } `}
                  >
                    <span className="text-primaryTheme-300 text-sm">
                      {link.icon}
                    </span>
                    {link.name}
                  </div>
                </SheetClose>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ResponsiveNavbar;
