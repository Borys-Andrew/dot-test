import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Links } from "@/settings";

import React from "react";

import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <Card className="max-w-2xl w-full text-center">
        <CardHeader>
          <CardTitle>Welcome to App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This application allows you to play with draggable blocks and track
            real-time Bitcoin transactions via WebSocket. You can start tracking
            live transactions, view transaction details, and reset data.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Built with React 18, TypeScript, Zustand(persist) for local storage
            management, and shadcn/ui for styling.
          </p>

          <div className="mt-6 text-left space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Task 1: Interactive Workspace
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implement an interactive workspace consisting of five draggable
              and resizable blocks. Users can move, resize, and delete blocks,
              with changes being persistent even after a page refresh.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">
              Task 2: WebSocket-based Bitcoin Transactions
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Track live Bitcoin transactions using the Blockchain WebSocket
              API. You can start tracking, view incoming transaction details,
              and reset the data.
            </p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <Button>
              <Link to={Links.transactions.index}>View Transactions</Link>
            </Button>
            <Button>
              <Link to={Links.blocks.index}>View Bloks</Link>
            </Button>
            <Button>
              <Link to="/candidates">Other candidates?</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
