import { BlocksSpace } from "@/components/blocksSpace";

import React from "react";

export const BlocksPage = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center gap-5">
      <h1 className="font-bold text-4xl text-center">Interactive Workspace</h1>
      <BlocksSpace />
    </div>
  );
};
