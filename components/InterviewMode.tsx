import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import classNames from "../utils/Common";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function InterviewMode({
  selectedInterviewer,
  setSelectedInterviewer,
  interviewers,
  setStep,
}: {
  selectedInterviewer: {
    id: string;
    name: string;
    description: string;
  };
  setSelectedInterviewer: (selectedInterviewer: {
    id: string;
    name: string;
    description: string;
    level: string;
  }) => void;
  interviewers: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  setStep: (step: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      key="step-2"
      transition={{
        duration: 0.95,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className="max-w-lg mx-auto px-4 lg:px-0"
    >
      <h2 className="text-4xl font-bold text-[#1E2B3A]">
        Select an Interviewer
      </h2>
      <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
        The feedback you receive will vary based on the interviewer you choose.
        Feel free to experiment with different ones.
      </p>
      <div>
        <RadioGroup
          value={selectedInterviewer}
          onChange={setSelectedInterviewer}
        >
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {interviewers.map((interviewer) => (
              <RadioGroup.Option
                key={interviewer.name}
                value={interviewer}
                className={({ checked, active }) =>
                  classNames(
                    checked ? "border-transparent" : "border-gray-300",
                    active ? "border-blue-500 ring-2 ring-blue-200" : "",
                    "relative cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <span className="flex items-center">
                      <span className="flex flex-col text-sm">
                        <RadioGroup.Label
                          as="span"
                          className="font-medium text-gray-900"
                        >
                          {interviewer.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className="text-gray-500"
                        >
                          <span className="block">
                            {interviewer.description}
                          </span>
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <RadioGroup.Description
                      as="span"
                      className="flex text-sm ml-4 mt-0 flex-col text-right items-center justify-center"
                    >
                      <Image
                        src="/singapore.svg"
                        width={40}
                        height={40}
                        alt="singapore"
                      />
                      <span className="font-medium text-gray-900">EN</span>
                    </RadioGroup.Description>
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-blue-500" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-lg"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="flex gap-[15px] justify-end mt-8">
        <div>
          <button
            onClick={() => setStep(1)}
            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#f5f7f9] text-[#1E2B3A] no-underline active:scale-95 scale-100 duration-75"
            style={{
              boxShadow: "0 1px 1px #0c192714, 0 1px 3px #0c192724",
            }}
          >
            Previous step
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setStep(3);
            }}
            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
            style={{
              boxShadow:
                "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
            }}
          >
            <span> Continue </span>
            <ArrowRight width={16} height={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
