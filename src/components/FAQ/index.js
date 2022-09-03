import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropup } from "react-icons/io";

export default function FAQ() {
  return (
    <div className="text-white bg-[#151414] px-4 md:px-16 md:py-32 lg:px-24 py-8">
      <h1 className="text-2xl md:text-6xl font-extrabold flex justify-center font-ibm">
        FREQUENTLY ASKED QUESTIONS
      </h1>

      <div className="w-full mt-6 md:mt-10">
        <Disclosure>
          {({ open }) => (
            <div className="border-b mb-4">
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg md:text-3xl font-ibm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What sets this project apart from others?</span>
                <IoMdArrowDropup
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pt-4 pb-2 text-base md:text-lg text-gray-300">
                Quantum Souls is a result of a one-year research and
                development, making it true generative art where each soul is
                truly unique. The collection contains 5550 animated art pieces
                that represent a unique reflection of evolutional souls living
                in the future. Being a holder of a Quantum Soul, will give you
                access to special giveaways, contests, server events and many
                more upcoming benefits.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <div className="border-b mb-4">
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg md:text-3xl font-ibm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How long does it take for the soul to reveal?</span>
                <IoMdArrowDropup
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pt-4 pb-2 text-base md:text-lg text-gray-300">
                Once Quantum Souls have been minted, the reveal of collection
                will go live within 24 hours on Opensea.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <div className="border-b mb-4">
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg md:text-3xl font-ibm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>How can i get access to QNTM Discord channel?</span>
                <IoMdArrowDropup
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pt-4 pb-2 text-base md:text-lg text-gray-300">
                Our Discord is opened with love and peace for everyone <a href="https://discord.gg/gnvjQy4p" className = 'text-blue-500 text-underline'>here</a>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <div className="border-b mb-4">
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-lg md:text-3xl font-ibm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Where can I see QNTM updates?</span>
                <IoMdArrowDropup
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pt-4 pb-2 text-base md:text-lg text-gray-300">
                Follow our official QNTM Twitter to get informed of all
                announcements that will be made there. Be careful of scammers
                and always check if you are on the official Twitter, Discord or
                website.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
