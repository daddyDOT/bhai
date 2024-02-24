"use client";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { names } from "@/app/utils/data";

const Sort = () => {
  return (
    <div className="flex justify-end bg-[#fff] rounded-2xl mb-4">
      <Select
        label="Najrelevantnije"
        variant="underlined"
        className="mt-4 mb-4 max-w-xs pb-4 my-0 mr-4 bg-[#fff] pr-4">
        {names.map((name) => (
          <SelectItem key={name.value} value={name.value}>
            {name.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default Sort;
