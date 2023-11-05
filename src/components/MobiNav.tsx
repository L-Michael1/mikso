import { Listbox, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { BiMenu } from "react-icons/bi";

const linkOptions = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

const MobiNav = () => {
  const [option, setOption] = useState(linkOptions[0]);
  return (
    <Listbox value={option} onChange={setOption}>
      <div className="relative">
        <Listbox.Button className="relative cursor-pointer">
          <BiMenu
            className="h-8 w-8 text-zinc-400 transition duration-200 hover:scale-105"
            aria-hidden="true"
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 max-h-60 overflow-auto rounded-md py-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-zinc-100">
            {linkOptions.map((option, optionIdx) => (
              <Link key={optionIdx} href={option.href}>
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 pr-4 text-sm ${
                      active ? "bg-zinc-200 text-zinc-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {option.name}
                </Listbox.Option>
              </Link>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default MobiNav;
