import { Button } from "./ui/button";
interface AddButtonProps {
  count: number;
  onCountChange: (newCount: number) => void;
  minCount?: number;
  maxCount?: number;
}

const AddButton = ({
  count,
  onCountChange,
  minCount = 0,
  maxCount = 10,
}: AddButtonProps) => {
  const handleIncrement = () => {
    onCountChange(Math.min(count + 1, maxCount));
  };

  const handleDecrement = () => {
    onCountChange(Math.max(count - 1, minCount));
  };

  return (
    <div className="inline-flex items-center justify-between space-x-2 rounded-full bg-secondary p-1 px-5">
      <Button
        variant="ghost"
        onClick={handleDecrement}
        className="h-8 w-8 rounded-full p-0 text-xl font-bold"
        disabled={count <= minCount}
      >
        <img src="/images/decrease-icon.svg" alt="Decrease" />
      </Button>
      <span className="w-8 text-center font-satoshiMedium">{count}</span>
      <Button
        variant="ghost"
        onClick={handleIncrement}
        className="h-8 w-8 rounded-full p-0 text-xl font-bold"
        disabled={count >= maxCount}
      >
        <img src="/images/increase-icon.svg" alt="Increase" />
      </Button>
    </div>
  );
};

export default AddButton;
