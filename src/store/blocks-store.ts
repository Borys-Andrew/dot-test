import { Block } from "@/types";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BlocksState {
  blocks: Block[];
  moveBlock: (id: number, x: number, y: number) => void;
  resizeBlock: (id: number, width: number, height: number) => void;
  bringToFront: (id: number) => void;
  removeBlock: (id: number) => void;
  resetBlocks: () => void;
}

const initialBlocks: Block[] = [
  { id: 1, x: 0, y: 0, width: 300, height: 100, zIndex: 1 },
  { id: 2, x: 320, y: 0, width: 300, height: 100, zIndex: 1 },
  { id: 3, x: 0, y: 120, width: 300, height: 100, zIndex: 1 },
  { id: 4, x: 320, y: 120, width: 300, height: 100, zIndex: 1 },
  { id: 5, x: 160, y: 240, width: 300, height: 100, zIndex: 1 },
];

export const useBlocksStore = create<BlocksState>()(
  persist(
    (set) => ({
      blocks: initialBlocks,
      moveBlock: (id, x, y) =>
        set((state) => ({
          blocks: state.blocks.map((block) =>
            block.id === id ? { ...block, x, y } : block,
          ),
        })),
      resizeBlock: (id, width, height) =>
        set((state) => ({
          blocks: state.blocks.map((block) =>
            block.id === id ? { ...block, width, height } : block,
          ),
        })),
      bringToFront: (id) =>
        set((state) => ({
          blocks: state.blocks.map((block) =>
            block.id === id
              ? {
                  ...block,
                  zIndex: Math.max(...state.blocks.map((b) => b.zIndex)) + 1,
                }
              : block,
          ),
        })),
      removeBlock: (id) =>
        set((state) => ({
          blocks: state.blocks.filter((block) => block.id !== id),
        })),
      resetBlocks: () => set({ blocks: initialBlocks }),
    }),
    { name: "goga-block" },
  ),
);
