import React from "react";

import { Button } from "../ui/button";

interface ControlsProps {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export const TransactionControlPanel = ({
  onStart,
  onStop,
  onReset,
}: ControlsProps) => {
  return (
    <div className="flex justify-center space-x-6 mb-4">
      <Button
        onClick={onStart}
        className="bg-green-600 hover:bg-green-700 cursor-pointer"
      >
        Start
      </Button>
      <Button
        onClick={onStop}
        className="bg-red-600 hover:bg-red-700 cursor-pointer"
      >
        Stop
      </Button>
      <Button
        onClick={onReset}
        className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
      >
        Reset
      </Button>
    </div>
  );
};
