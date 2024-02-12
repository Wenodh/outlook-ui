import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import {
  RiInboxLine,
  RiSendPlane2Line,
  RiCalendarLine,
  RiContactsLine,
  RiSettings2Line,
} from "react-icons/ri";
import Link from "next/link";
type Props = {};

type RightSideItemsType = {
  icon?: React.ReactNode;
  href: string;
  title?: string;
};

const rightSideItems: RightSideItemsType[] = [
  {
    icon: <RiInboxLine />,
    href: "#",
    title: "Inbox",
  },
  {
    icon: <RiSendPlane2Line />,
    href: "#",
    title: "Sent",
  },
  {
    icon: <RiCalendarLine />,
    href: "#",
    title: "Calendar",
  },
  {
    icon: <RiContactsLine />,
    href: "#",
    title: "Contacts",
  },
  {
    icon: <RiSettings2Line />,
    href: "#",
    title: "Settings",
  },
];

function Navbar({}: Props) {
  return (
    <div className="flex w-full items-center justify-between  gap-4 bg-blue-500 px-4 text-white">
      <div className="flex items-center gap-2">
        <TbGridDots className="text-2xl" />
        <h3 className="text-xl font-semibold ">Outlook</h3>
      </div>
      {/* searchbar */}
      <div className="relative flex min-w-[40%] items-center">
        <input
          type="text"
          className="w-full rounded bg-white py-1 pl-8 text-black"
          placeholder="Search"
        />
        <IoIosSearch className="absolute left-3 text-gray-500" />
      </div>
      {/* right data */}
      <div className="flex">
        {rightSideItems.map(({ href, icon: Icon, title }, i) => (
          <Link
            key={i}
            href={href}
            className="px-6 py-4 transition-all hover:bg-slate-800/70"
          >
            {Icon || title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
