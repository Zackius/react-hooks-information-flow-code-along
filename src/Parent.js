import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildColor] = useState("#FFF")

  function handleColor( newChildColor) {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor);
    setChildColor( newChildColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color ={childrenColor} onChangeColor={handleColor} />
      <Child color ={childrenColor}  onChangeColor={ handleColor}/>
    </div>
  );
}

export default Parent; 
