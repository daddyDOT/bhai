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
    <div className="p-4 bg-[#fff] rounded-md flex flex-col">
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold text-primaryColor max-w-xl mb-2">
          {data.title}
        </h3>
        <h4>{data.date}</h4>
      </div>
      <p className="mb-2 text-[#777] font-bold">
        {data.authors.replaceAll(",,", ",")}
      </p>
      <p>{truncateDescription(data.short_description, 300)}</p>
      <div className="flex justify-between">
        {data.pdf_source && (
          <a
            href={`${data.pdf_source}`}
            target="_blank"
            className="flex gap-2 items-center border border-solid border-[#ccc] px-[8px] mt-4">
            <span>
              <MdFileDownload />
            </span>{" "}
            Preuzmi PDF
          </a>
        )}

        <Link
          href={`/publication/${data.publication_id}`}
          className="flex gap-2 items-center text-[#2ba5e3]">
          Vidi više{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PublicationCard;
