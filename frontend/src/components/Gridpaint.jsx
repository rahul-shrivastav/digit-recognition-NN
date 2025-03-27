import { useState } from "react";
import { IoReloadCircle } from "react-icons/io5";

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
      onContextMenu={(e) => e.preventDefault()} 
      onMouseUp={handleMouseUp}
      className="relative grid w-[480px] h-[480px]  shadow-2xl shadow-slate-400 "
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)`, gridTemplateRows: `repeat(${gridSize}, 1fr)` }}
    >
      <button
        onClick={() => setCells(Array(gridSize * gridSize).fill(0))}
        className="absolute bottom-0 -right-10 hover:scale-105 hover:cursor-pointer transition-transform w-7 h-7 flex items-center justify-center text-4xl text-gray-800"
      >
        <IoReloadCircle />
      </button>

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
