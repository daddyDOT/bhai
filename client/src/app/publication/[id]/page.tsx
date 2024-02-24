"use client";

import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import DetailCard from "@/components/DetailCard";
import { detailCardData } from "@/app/utils/data";

const page = () => {
  return (
    <section
      id="publication-details"
      className="bg-[#f0f2f5] container mx-auto py-12 px-8 lg:px-16 relative mt-8">
      <div className="flex justify-between items-center">
        <Breadcrumbs>
          <BreadcrumbItem>Početna</BreadcrumbItem>
          <BreadcrumbItem>Publikacije</BreadcrumbItem>
          <BreadcrumbItem>
            Comparison of mechanical and microstructure properties of tungsten
            alloys for special purposes
          </BreadcrumbItem>
        </Breadcrumbs>
        <Link href="/publication" className="flex items-center gap-2 font-bold">
          <span className="font-normal">
            <SlArrowLeft />{" "}
          </span>{" "}
          Nazad
        </Link>
      </div>
      <div>
        <DetailCard data={detailCardData} />
      </div>
    </section>
  );
};

export default page;
