import './App.css';
import { useState } from "react";

function App() {
  const [RandomColor, setRandomColor] = useState("#000000");
  const [value, setValue] = useState();

  function generateToValue(value) {
    setRandomColor(value);
  }

  function generateColor() {
    let letters = "012345678abcdef";
    let color = "#";

    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
      setRandomColor(color);
    }
    return color;
  }
  return (
    <div className="App"
    style={{
      width: "100%",
      height: "100vh",
      backgroundColor: RandomColor
    }}>
      <div className='form'>
        <input type="text" placeholder="#..." value={value} onChange={(event) => {
          setValue(event.target.value);
          generateToValue(event.target.value);
        }}/>
        <button className='color-btn' onClick={generateColor}>Change color</button>
      </div>
    </div>
  );
}

export default App;
