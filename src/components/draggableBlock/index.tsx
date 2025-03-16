import { useBlocksStore } from "@/store";
import { X } from "@mynaui/icons-react";

import React, { useState } from "react";

import clsx from "clsx";
import { Rnd } from "react-rnd";

import { Button } from "../ui/button";

interface BlockProps {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

const Block = ({ id, x, y, width, height, zIndex }: BlockProps) => {
  const { moveBlock, resizeBlock, bringToFront, removeBlock } =
    useBlocksStore();

  const [isActive, setIsActive] = useState(false);

  return (
    <Rnd
      scale={1}
      size={{ width, height }}
      position={{ x, y }}
      onDragStart={() => setIsActive(true)}
      onDragStop={(_e, d) => {
        moveBlock(id, d.x, d.y);
        setIsActive(false);
      }}
      onResizeStop={(_e, _direction, ref, _delta, position) => {
        resizeBlock(id, ref.offsetWidth, ref.offsetHeight);
        moveBlock(id, position.x, position.y);
      }}
      bounds="parent"
      dragGrid={[10, 10]}
      resizeGrid={[10, 10]}
      style={{
        zIndex,
      }}
      className={clsx(
        "absolute bg-yellow-400 border-[2px] border-solid overflow-hidden transition-all duration-150 ease-in-out rounded-2xl",
        isActive
          ? "cursor-grabbing border-red-500 opacity-90"
          : "cursor-grab border-yellow-600",
      )}
      onMouseDown={() => bringToFront(id)}
    >
      <div className="p-[10px] flex items-center justify-center bg-orange-400">
        <Button
          variant="outline"
          onClick={() => removeBlock(id)}
          className="fixed flex items-center justify-center left-[10px] p-1 w-[30px] h-[30px] bg-red-500 text-sm text-white hover:bg-red-700 rounded-full border-none transition-all duration-300 ease-in-out cursor-pointer"
        >
          <X />
        </Button>
        <span>Title {id}</span>
      </div>
    </Rnd>
  );
};

export default Block;
