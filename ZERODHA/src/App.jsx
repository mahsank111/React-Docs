import React from "react";

function App() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-300 text-xl text-semibold">
          Zerodha
        </div>

        <h1
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] 
      text-[13vw] leading-none tracking-tighter font-semibold text-red-200"
        >
          ZERODHA.
        </h1>
      </div>
    </>
  );
}

export default App;
