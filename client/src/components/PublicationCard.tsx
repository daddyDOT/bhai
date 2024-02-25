import React from "react";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import Link from "next/link";
import { PublicCardInterface } from "@/app/utils/data";

interface PublicationCardProps {
  data: PublicCardInterface;
}

const PublicationCard = ({ data }: PublicationCardProps) => {
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };
  return (
    <Link
      href={`/publication/${data.publication_id}`}
      className="p-4 bg-[#fff] rounded-md flex flex-col">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-primaryColor max-w-xl mb-2">
          {data.title}
        </h3>
        <h4>{data.date}</h4>
      </div>
      <p className="mb-2">{data.authors.replaceAll(",,", ",")}</p>
      <p>{truncateDescription(data.description, 100)}</p>
      <div className="flex justify-between">
        <button className="flex gap-2 items-center border border-solid border-[#ccc] px-[8px] mt-4">
          <span>
            <MdFileDownload />
          </span>{" "}
          Preuzmi PDF
        </button>
        <Link
          href={`/publication/${data.publication_id}`}
          className="flex gap-2 items-center">
          Vidi više{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </Link>
  );
};

export default PublicationCard;
