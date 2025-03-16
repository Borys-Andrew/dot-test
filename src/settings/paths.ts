import { getLinksFromPaths } from "@/utils/getLinksFromPaths";

export const Paths = {
  index: "/",
  blocks: {
    index: "blocks",
  },
  transactions: {
    index: "transactions",
  },

  notFound: "404",
} as const;

export const Links = getLinksFromPaths(Paths);
