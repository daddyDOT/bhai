"use client";

import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Mermaid } from "mdx-mermaid/Mermaid";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { PublicCardInterface } from "@/app/utils/data";

interface ItemCardProps {
  data: PublicCardInterface | undefined;
}

const DetailCardExample = ({ data }: ItemCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  const pattern = /'([^']*)'/g;

  const cleanedMermaid = data?.mermaid_code
    .replace(/```mermaid/g, "")
    .replace(/```/g, "");

  console.log(cleanedMermaid);
  return (
    <div className="p-6 bg-[#fff] rounded-md flex flex-col mt-8">
      <div className="flex flex-col text-center">
        <h3 className="font-bold text-2xl text-primaryColor">{data?.title}</h3>
        <h4 className="font-bold text-[#777] pt-2">{data?.subtitle}</h4>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="mt-4 w-[900px]">
          <Mermaid
            chart={`${data?.mermaid_code
              .replace("```mermaid", ``)
              .replace("```", "")}`}
          />
        </div>

        <div className="flex gap-12 mt-6">
          <div>
            <h4 className="flex items-center gap-2 font-bold">
              <span>
                <CiCalendar />
              </span>{" "}
              {data?.date}
            </h4>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold">
              <span className="font-light">
                <FaRegClock />
              </span>{" "}
              33 min
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <h3 className="text-xl font-bold text-primaryColor">Description</h3>
        <div className="flex gap-8 justify-end items-center w-full">
          <div>
            <Switch defaultSelected color="default">
              Bionic Reading
            </Switch>
          </div>
          <div className="w-[20%]">
            <Select
              placeholder="Select a language"
              variant="underlined"
              labelPlacement="outside">
              <SelectItem
                key="english"
                startContent={
                  <Avatar
                    alt="English"
                    className="w-6 h-6"
                    src="https://flagpedia.net/data/flags/w702/gb-eng.webp"
                  />
                }>
                English
              </SelectItem>
              <SelectItem
                key="bosnian"
                startContent={
                  <Avatar
                    alt="Bosnian"
                    className="w-6 h-6"
                    src="https://flagpedia.net/data/flags/w702/ba.webp"
                  />
                }>
                Bosnian
              </SelectItem>
            </Select>
          </div>
          <div>
            {isVisible ? (
              <span
                onClick={handleVisible}
                className="cursor-pointer pt-3 text-2xl">
                <FaRegEye />
              </span>
            ) : (
              <span
                onClick={handleVisible}
                className="cursor-pointer pt-3 text-2xl">
                <FaRegEyeSlash />
              </span>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <p className="mt-4">{data?.description}</p>
    </div>
  );
};

export default DetailCardExample;
