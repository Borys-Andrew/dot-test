import { useBlocksStore } from "@/store";

import React from "react";

import Block from "../draggableBlock";
import { Button } from "../ui/button";

export const BlocksSpace = () => {
  const { blocks, resetBlocks } = useBlocksStore();

  return (
    <div className="relative w-[90vw] flex-1 bg-inherit border-[2px] border-dashed border-slate-600 p-[10px] rounded-2xl">
      <Button
        onClick={resetBlocks}
        className="absolute top-[10px] right-[10px] px-[15px] py-[10px] border-none bg-[#007bff] text-white z-40 rounded-lg cursor-pointer"
      >
        Reset
      </Button>
      {blocks.map((block) => (
        <Block key={block.id} {...block} />
      ))}
    </div>
  );
};
