"use client";

import React from "react";
import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import Filter from "@/components/Filter";
import Sort from "@/components/Sort";
import PublicationCard from "@/components/PublicationCard";
import { publicCard } from "../utils/data";
import { useEffect, useState } from "react";
import { PublicCardInterface } from "../utils/data";

const Page = () => {
  const [data, setData] = useState<PublicCardInterface[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchALlPublications = async () => {
      const res = await fetch("http://localhost:5000/api/data");
      const data = await res.json();

      setData(data);
    };

    fetchALlPublications();
  }, []);

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
              {data?.map((data, i) => (
                <PublicationCard data={data} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
