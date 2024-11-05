import React, { useEffect, useState } from "react";

const RandomBackground = () => {
  const [color, setColor] = useState("#50d71e");

  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomHexColor());
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ background: color }}
      className={` h-screen flex items-center justify-center`}
    >
      <button
        type="button"
        onClick={() => {
          setColor(getRandomHexColor());
        }}
      >
        change color
      </button>
    </div>
  );
};

export default RandomBackground;
