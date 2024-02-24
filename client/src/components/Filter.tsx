"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { names } from "@/app/utils/data";
import { CiFilter } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";

const Filter = () => {
  const dataList = [
    "Posljednjih 7 dana",
    "Posljednjih 30 dana",
    "Posljednjih 120 dana",
    "Posljednjih godinu dana",
    "Posljednjih 5 godina",
  ];
  return (
    <div className="flex flex-col bg-[#fff] p-[19px] rounded-2xl">
      <h3 className="text-2xl text-primaryColor flex gap-3 items-center">
        Filteri{" "}
        <span>
          <CiFilter />
        </span>
      </h3>
      <hr className="mt-2" />
      <div className="flex flex-col mt-4">
        <h3 className="font-bold text-xl text-primaryColor">Datum Objave</h3>
        <ul className="flex flex-col gap-3 mt-4">
          {dataList.map((data, i) => (
            <li key={i} className="flex items-center gap-4">
              <span>
                <FaRegCircle />{" "}
              </span>{" "}
              {data}
            </li>
          ))}
        </ul>
        <hr className="mt-2" />
        <div className="flex flex-col mt-4">
          <h3 className="font-bold text-xl text-primaryColor">
            Uključeni istraživači
          </h3>
          <Select label="Izaberite istraživača" className="mt-4 mb-4">
            {names.map((name) => (
              <SelectItem key={name.value} value={name.value}>
                {name.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <button className="bg-buttonColor text-white p-2">Filtriraj</button>
      </div>
    </div>
  );
};

export default Filter;
