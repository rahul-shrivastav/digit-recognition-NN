import { useState } from "react";

const Gridpaint = () => {
  const gridSize = 25;
  const [cells, setCells] = useState(
    Array(gridSize * gridSize).fill(0) // Fill with 0s initially
  );
  const [painting, setPainting] = useState(false);

  const handleMouseDown = (event, index) => {
    event.preventDefault();
    setPainting(true);
    updateCell(index);
  };

  const handleMouseUp = () => {
    setPainting(false);
  };

  const handleMouseMove = (index) => {
    if (painting) {
      updateCell(index);
    }
  };

  const updateCell = (index) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[index] = 1; // Mark as painted
      return newCells;
    });
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()} // Prevent context menu
      onMouseUp={handleMouseUp}
      className="grid w-[480px] h-[480px]  shadow-2xl border border-gray-100"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gridTemplateRows: `repeat(${gridSize}, 1fr)` }}
    >
      {cells.map((value, index) => (
        <div
          key={index}
          className={`border border-gray-300 ${value === 1 ? "bg-gray-600" : "bg-white"}`}
          onMouseDown={(e) => handleMouseDown(e, index)}
          onMouseMove={() => handleMouseMove(index)}
        />
      ))}
    </div>
  );
};

export default Gridpaint;
