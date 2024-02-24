import React from "react";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import Filter from "@/components/Filter";
import Sort from "@/components/Sort";
import PublicationCard from "@/components/PublicationCard";
import { publicCard } from "../utils/data";

const page = () => {
  return (
    <section
      id="publication"
      className="bg-[#f0f2f5] container mx-auto py-12 px-8 lg:px-16 relative">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-primaryColor">
            Publikacije <span>(45889)</span>
          </h3>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="font-normal">
              <SlArrowLeft />{" "}
            </span>{" "}
            Nazad
          </Link>
        </div>

        <div className="grid grid-cols-3 mt-8 gap-4">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <Sort />
              {publicCard.map((data) => (
                <PublicationCard data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
