import { cn } from "@/lib/utils";
import { Paths } from "@/settings";

import React from "react";

import { NavLink } from "react-router";

const navItems = [
  { name: "Home", link: Paths.index },
  { name: "Blocks", link: Paths.blocks.index },
  { name: "Transactions", link: Paths.transactions.index },
];

export const NavigationBar = () => {
  return (
    <nav className="w-full bg-gray-100 p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Hello World!</h1>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-lg transition",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-200",
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
