import React from "react";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

interface DetailCardItem {
  id: number;
  randomNames: string[];
  date: string;
  title: string;
  desc: string;
  subtitle: string;
}

interface ItemCardProps {
  data: DetailCardItem;
}

const DetailCard = ({ data }: ItemCardProps) => {
  return (
    <div className="p-6 bg-[#fff] rounded-md flex flex-col mt-8">
      <div className="flex justify-between">
        <p className="mb-2">
          {data.randomNames.map((list, index) => (
            <span key={index}>{index > 0 ? `, ${list}` : list}</span>
          ))}
        </p>
        <h4 className="flex items-center gap-2">
          <span>
            <CiCalendar />
          </span>{" "}
          {data.date}
        </h4>
      </div>
      <h3 className="text-2xl text-primaryColor mt-2 mb-1 font-bold max-w-4xl">
        {data.title}
      </h3>
      <h4 className="text-[#777] font-bold mb-4">{data.subtitle}</h4>
      <p>{data.desc}</p>
      <div className="flex justify-between">
        <button className="flex gap-2 items-center border border-solid border-[#ccc] px-[8px] mt-4">
          <span>
            <MdFileDownload />
          </span>{" "}
          Preuzmi PDF
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
