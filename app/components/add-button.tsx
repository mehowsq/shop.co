import React, { useState } from "react";
import { Button } from "./ui/button";

interface AddButtonProps {
  initialCount?: number;
  minCount?: number;
  maxCount?: number;
}

const AddButton = ({
  initialCount = 0,
  minCount = 0,
  maxCount = 10,
}: AddButtonProps) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, maxCount));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, minCount));
  };

  return (
    <div className="inline-flex items-center justify-between space-x-2 rounded-full bg-secondary p-1 px-5">
      <Button
        variant="ghost"
        onClick={handleDecrement}
        className="h-8 w-8 rounded-full p-0 text-xl font-bold"
        disabled={count <= minCount}
      >
        <img src="/images/decrease-icon.svg" />
      </Button>
      <span className="font-satoshiMedium w-8 text-center">{count}</span>
      <Button
        variant="ghost"
        onClick={handleIncrement}
        className="h-8 w-8 rounded-full p-0 text-xl font-bold "
        disabled={count >= maxCount}
      >
        <img src="/images/increase-icon.svg" />
      </Button>
    </div>
  );
};

export default AddButton;
