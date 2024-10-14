import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type Color = {
  name: string;
  hex: string;
};

interface ColorButtonProps {
  color: Color;
  isSelected: boolean;
  onSelect: (color: Color) => void;
}
const ColorButton = ({ color, isSelected, onSelect }: ColorButtonProps) => {
  return (
    <Button
      variant="outline"
      className="relative h-8 w-8 rounded-full p-0"
      style={{ backgroundColor: color.hex }}
      onClick={() => onSelect(color)}
    >
      {isSelected && <Check className="absolute h-4 w-4 text-white" />}
    </Button>
  );
};

const ColorSelector = () => {
  const colors: Color[] = [
    { name: "Brown", hex: "#4F4631" },
    { name: "Blue", hex: "#31344F" },
    { name: "Green", hex: "#314F4A" },
  ];
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color);
  };
  return (
    <div className="flex space-x-2">
      {colors.map((color) => (
        <ColorButton
          key={color.name}
          color={color}
          isSelected={selectedColor?.name === color.name}
          onSelect={handleColorSelect}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
