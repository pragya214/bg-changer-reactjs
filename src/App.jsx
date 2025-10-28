import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Buttons container - ek hi jagah sab buttons ek sath */}
      <div className="fixed flex flex-wrap justify-center gap-4 bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white/80 px-6 py-4 rounded-3xl backdrop-blur-md">
          
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("maroon")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "maroon" }}
          >
            Maroon
          </button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg hover:scale-105 duration-200"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
