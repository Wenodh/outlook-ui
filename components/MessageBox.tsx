"use client";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

type Props = {};

export default function MessageBox({}: Props) {
  const imagSrc =
    "https://res.cdn.office.net/assets/mail/illustrations/emptyDeleted/v1/light.svg";
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="h-full w-full max-w-[400px] overflow-hidden rounded-md border bg-white shadow-sm">
      {/* top section */}
      <section className="flex items-center justify-between border py-2 pl-10 pr-3">
        <div className="flex items-center gap-2">
          <p>Junk Email</p>
          <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? <FaStar /> : <FaRegStar />}
          </button>
        </div>
        <IoFilter className="cursor-pointer text-xl text-gray-500" />
      </section>
      {/* middle section  */}
      <section className="flex h-full flex-col items-center justify-center text-center text-gray-500">
        <p className="">Nothing in Drafts</p>
        <img src={imagSrc} alt="junk" />
        <p className="">Start write something</p>
      </section>
    </div>
  );
}
