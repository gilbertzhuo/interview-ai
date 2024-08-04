import { RadioGroup } from "@headlessui/react";
import { motion } from "framer-motion";
import classNames from "../utils/Common";
import { ArrowRight } from "lucide-react";

export default function InterviewType({
  selected,
  setSelected,
  setStep,
  questions,
}: {
  selected: {
    id: number;
    name: string;
    description: string;
  };
  setSelected: (selected: {
    id: number;
    name: string;
    description: string;
  }) => void;
  setStep: (step: number) => void;
  questions: Array<{
    id: number;
    name: string;
    description: string;
  }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      key="step-1"
      transition={{
        duration: 0.95,
        ease: [0.165, 0.84, 0.44, 1],
      }}
      className="max-w-lg mx-auto px-4 lg:px-0"
    >
      <h2 className="text-4xl font-bold text-[#1E2B3A]">
        Select a question type
      </h2>
      <p className="text-[14px] leading-[20px] text-[#1a2b3b] font-normal my-4">
        We have hundreds of questions from top tech companies. Choose a type to
        get started.
      </p>
      <div>
        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-4">
            {questions.map((question) => (
              <RadioGroup.Option
                key={question.name}
                value={question}
                className={({ checked, active }) =>
                  classNames(
                    checked ? "border-transparent" : "border-gray-300",
                    active ? "border-blue-500 ring-2 ring-blue-200" : "",
                    "relative cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none flex justify-between h-24"
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
                          {question.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className="text-gray-500"
                        >
                          <span className="block">{question.description}</span>
                        </RadioGroup.Description>
                      </span>
                    </span>
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
            onClick={() => {
              setStep(2);
            }}
            className="group rounded-full px-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75 shadow-md"
          >
            <span> Continue </span>
            <ArrowRight width={16} height={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
