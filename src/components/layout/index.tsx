import React from "react";

import { Outlet } from "react-router";

import { NavigationBar } from "../navigationBar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
