import React from "react";
import { MdOutlineKeyboardArrowRight, MdFileDownload } from "react-icons/md";
import Link from "next/link";
import { CiCalendar } from "react-icons/ci";

interface BionicExampleItem {
  id: number;
  randomNames: string[];
  date: string;
  title: string;
  desc: string;
  subtitle: string;
}

interface ItemCardProps {
  data: BionicExampleItem;
}

const BionicExample = ({ data }: ItemCardProps) => {
  return (
    <div className="p-6 bg-[#fff] rounded-md flex flex-col mt-8">
    </div>
  );
};

export default BionicExample;
