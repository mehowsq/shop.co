import React, { useState } from "react";
import { Button } from "./ui/button";

type Size = "Small" | "Medium" | "Large" | "X-Large";

interface SizeButtonProps {
  size: Size;
  isSelected: boolean;
  onSelect: (size: Size) => void;
}

const SizeButton = ({ size, isSelected, onSelect }: SizeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => onSelect(size);

  const getVariant = () => {
    if (isSelected || isHovered) return "default";
    return "secondary";
  };

  return (
    <Button
      variant={getVariant()}
      className="rounded-full font-satoshiLight text-base"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {size}
    </Button>
  );
};

const SizeSelector = () => {
  const sizes: Size[] = ["Small", "Medium", "Large", "X-Large"];
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {sizes.map((size) => (
        <SizeButton
          key={size}
          size={size}
          isSelected={selectedSize === size}
          onSelect={handleSizeSelect}
        />
      ))}
    </div>
  );
};

export default SizeSelector;
