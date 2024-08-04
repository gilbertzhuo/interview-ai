import { Disclosure } from "@headlessui/react";
import { interviewMenu } from "@/app/_data/links";
import { Brain, ChevronUp } from "lucide-react";
import Link from "next/link";

const InterviewVault = ({ pathname }: { pathname: string }) => {
  const isSelected = interviewMenu.some((item) => item.link === pathname);
  return (
    <Disclosure defaultOpen={isSelected}>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full group flex items-center px-3 min-h-[40px] text-sm font-medium rounded-md">
            <Brain className="mr-3 flex-shrink-0 h-6 w-6" />
            Interview Vault
            <ChevronUp className={`w-4 h-4 ml-auto ${!open && "rotate-180"}`} />
          </Disclosure.Button>
          <Disclosure.Panel className="transform scale-100 opacity-100">
            {interviewMenu.map((item, index) => {
              return (
                <Link
                  className={`hover:text-gray-900 flex relative items-center w-full min-h-[40px] m-0 cursor-pointer rounded hover:bg-[#F7F7F8] focus:outline-none text-[#6c6c89] text-sm ${
                    pathname === item.link && "bg-[#F7F7F8] text-blue-600"
                  }`}
                  href={item.link}
                  key={index}
                >
                  <div
                    className={`bg-[#e8e8ed] pointer-events-none absolute left-[21px] z-10 top-1/2 h-[5px] w-[5px] rounded-full transform -translate-y-1/2
                  ${item.link === pathname && "bg-blue-600"}`}
                  />
                  <div className="truncate pr-4 pl-12">{item.name}</div>
                  <div
                    className={`absolute w-[1px] bg-[#e8e8ed] left-[23px] ${
                      index === 0 ? "top-5" : "top-0"
                    } ${
                      index === interviewMenu.length - 1
                        ? "bottom-[20px]"
                        : "bottom-0"
                    }`}
                  ></div>
                </Link>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default InterviewVault;
