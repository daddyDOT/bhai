"use client";

import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { CiCalendar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { Mermaid } from "mdx-mermaid/Mermaid";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { PublicCardInterface } from "@/app/utils/data";
import { useEffect } from "react";
import mermaid from "mermaid";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { GiSpeaker } from "react-icons/gi";

interface ItemCardProps {
  data: PublicCardInterface | undefined;
}

const DetailCardExample = ({ data }: ItemCardProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("English");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.init(undefined, document.querySelectorAll(".mermaid"));
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  let readingTime;

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  let result;
  if (isVisible && data) {
    result = data.bionic_description.split("\\n\\n");
  }

  function calculateReadingTime(text: string) {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readingTime = wordCount / wordsPerMinute;
    const roundedReadingTime = Math.ceil(readingTime);

    return roundedReadingTime;
  }
  if (data?.description) {
    readingTime = calculateReadingTime(data?.description);
  }

  console.log(data);

  const handleCountrySelect = (e: any) => {
    console.log("Changed");
  };

  return (
    <div className="p-6 bg-[#fff] rounded-md flex flex-col mt-8">
      <div className="flex flex-col text-center">
        <h3 className="font-bold text-2xl text-primaryColor">{data?.title}</h3>
        <h4 className="font-bold text-[#777] pt-2">{data?.subtitle}</h4>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="mt-6 mb-6 w-[1000px]">
          {data?.mermaid_code ? (
            <Mermaid className="mermaid" chart={data?.mermaid_code} />
          ) : (
            ""
          )}
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
              {readingTime} min
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <div className="w-full">
          {currentLanguage === "English" && (
            <Switch color="default" onChange={handleVisible}>
              Bionic Reading
            </Switch>
          )}
        </div>
        <div className="flex gap-16 justify-end items-center w-full">
          <div className="w-[50%]">
            <Select
              placeholder="Select a language"
              variant="underlined"
              labelPlacement="outside"
              onChange={handleCountrySelect}>
              <SelectItem
                key="English"
                onClick={() => setCurrentLanguage("English")}
                startContent={
                  <Avatar
                    alt="English"
                    className="w-6 h-6"
                    src={`/English.webp`}
                  />
                }>
                English
              </SelectItem>
              {
                (data?.languages ?? []).map((language) =>
                  language ? (
                    <SelectItem
                      key={language}
                      onClick={() => setCurrentLanguage(language)}
                      startContent={
                        <Avatar
                          alt={language}
                          className="w-6 h-6"
                          src={`/${language}.webp`}
                        />
                      }>
                      {language}
                    </SelectItem>
                  ) : null
                ) as any
              }
            </Select>
          </div>
          <div>
            <span className="cursor-pointer pt-3 text-3xl">
              <GiSpeaker />
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-4 mb-8" />
      {currentLanguage === "English" &&
        isVisible &&
        result &&
        result.map((res, i) => (
          <div key={i}>
            <MarkdownPreview source={res} />
            <br />
            <br />
          </div>
        ))}
      {currentLanguage === "German" &&
      data?.translations?.German &&
      data.translations.German.length > 0 ? (
        <MarkdownPreview source={data.translations.German[0].content} />
      ) : currentLanguage === "Bosnian" &&
        data?.translations?.Bosnian &&
        data.translations.Bosnian.length > 0 ? (
        <MarkdownPreview source={data?.translations.Bosnian[0].content} />
      ) : !isVisible ? (
        <MarkdownPreview source={data?.description} />
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailCardExample;
