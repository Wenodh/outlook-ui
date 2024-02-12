"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import {
  RiInboxLine,
  RiSendPlane2Line,
  RiCalendarLine,
  RiContactsLine,
  RiSettings2Line,
} from "react-icons/ri";

type Props = {};

type Items = {
  icon?: React.ReactNode;
  isActive: boolean;
};

function FixedSidebar({}: Props) {
  const [sidebarItems, setSidebarItems] = useState([
    {
      icon: <RiInboxLine />,
      isActive: true,
    },
    {
      icon: <RiSendPlane2Line />,
      isActive: false,
    },
    {
      icon: <RiCalendarLine />,
      isActive: false,
    },
    {
      icon: <RiContactsLine />,
      isActive: false,
    },
    {
      icon: <RiSettings2Line />,
      isActive: false,
    },
    {
      icon: <RiInboxLine />,
      isActive: false,
    },
    {
      icon: <RiSendPlane2Line />,
      isActive: false,
    },
    {
      icon: <RiCalendarLine />,
      isActive: false,
    },
    {
      icon: <RiContactsLine />,
      isActive: false,
    },
    {
      icon: <RiSettings2Line />,
      isActive: false,
    },
  ]);
  function handleToggle(ind: number) {
    setSidebarItems(
      sidebarItems.map((d, i) => ({ ...d, isActive: ind === i })),
    );
  }
  return (
    <div className="flex h-full min-w-[50px] max-w-[50px] flex-col items-center">
      {sidebarItems.map(({ icon: Icon, isActive }, i) => (
        <button
          key={i}
          onClick={() => handleToggle(i)}
          className={cn(
            "flex w-full items-center justify-center border-l-4 border-transparent p-5 hover:bg-blue-300/70",
            {
              "border-blue-500": isActive,
            },
          )}
        >
          {" "}
          <div
            className={cn("text-xl", {
              "text-blue-500": isActive,
            })}
          >
            {Icon}
          </div>
        </button>
      ))}
    </div>
  );
}

export default FixedSidebar;
