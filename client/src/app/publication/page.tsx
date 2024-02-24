import React from "react";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import Filter from "@/components/Filter";

const page = () => {
  return (
    <section
      id="publication"
      className="bg-[#f0f2f5] container mx-auto py-12 px-8 lg:px-16 relative">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="font-normal">
              <SlArrowLeft />{" "}
            </span>{" "}
            Nazad
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-8">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-2">70% width item</div>
        </div>
      </div>
    </section>
  );
};

export default page;
