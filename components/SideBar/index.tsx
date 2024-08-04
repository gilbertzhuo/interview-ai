"use client";

import { Menu } from "@headlessui/react";
import { LucideMenu, MoreHorizontal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountMenu from "./AccountMenu";
import InterviewVault from "./InterviewVault";
import { mainMenu } from "@/app/_data/links";
import React from "react";

const SideBar = () => {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <LucideMenu
        className="md:hidden w-6 h-6 cursor-pointer gray-600 absolute top-6 right-8"
        onClick={() => setIsOpen(true)}
      />
      <div
        className="fixed md:relative md:flex w-full md:w-[264px] py-6 md:flex-col h-screen min-h-0 bg-white z-10"
        hidden={!isOpen}
      >
        <div className="flex min-h-0 flex-1 flex-col bg-white">
          <div className="flex justify-between pr-8 pl-8">
            <Link className="flex flex-shrink-0 items-center mb-8" href="/">
              <p className="text-3xl font-bold text-[#1E293B]">Temus</p>
            </Link>
            <X
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <nav className="flex-1 space-y-1 bg-white px-6 space-y-3">
            {mainMenu.map((item, index) =>
              item.name === "Interview Vault" ? (
                <InterviewVault pathname={pathname} key={index} />
              ) : (
                <Link
                  className={`flex items-center px-3 min-h-[40px] text-sm font-medium rounded-md ${
                    pathname === item.link && "bg-[#f6f6f8] text-blue-600"
                  }`}
                  href={item.link}
                  key={index}
                >
                  <item.logo className={`mr-3 flex-shrink-0 h-6 w-6`} />
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-col flex-shrink-0 p-4">
          <hr className="border-[#e8e8ed] w-full ml-2 mr-4 my-4" />
          <Menu as="div" className="relative inline-block text-left w-full">
            <Menu.Button className="bg-transparent flex h-10 w-full max-w-full cursor-pointer items-center rounded-[8px] pl-2 pr-3 text-sm font-medium hover:bg-[#f6f6f8]">
              <div className="w-7 h-7 rounded-full bg-[#898FA9] text-white flex items-center justify-center">
                G
              </div>
              <div className="mx-3 truncate text-sm font-medium text-[#121217]">
                Gilbert Zhuo
              </div>
              <MoreHorizontal className="h-4 w-4 ml-auto flex-shrink-0" />
            </Menu.Button>
            <AccountMenu />
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
