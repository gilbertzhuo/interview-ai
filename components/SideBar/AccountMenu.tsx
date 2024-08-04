import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { userMenu } from "@/app/_data/links";

const AccountMenu = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 -mt-40 w-full md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {userMenu.map((item, index) => {
          return (
            <Menu.Item key={index}>
              {({ active }) => (
                <Link
                  href={item.link}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } flex justify-between w-full px-4 py-2 text-sm`}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Transition>
  );
};

export default AccountMenu;
