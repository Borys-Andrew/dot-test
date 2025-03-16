import React from "react";

import { useRoutes } from "react-router";

import AppLayout from "./components/layout";
import { BlocksPage, HomePage, NotFoundPage, TransactionsPage } from "./pages";
import { Paths } from "./settings";

function App() {
  const element = useRoutes([
    {
      path: Paths.index,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: Paths.blocks.index,
          element: <BlocksPage />,
        },
        {
          path: Paths.transactions.index,
          element: <TransactionsPage />,
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return <>{element}</>;
}

export default App;
