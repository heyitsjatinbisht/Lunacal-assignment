import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-[#262A2F] text-white flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row w-full md:space-x-8">
        {/* Empty left half on larger screens, but hidden on smaller screens */}
        <div className="hidden md:block md:w-1/2  max-w-[836px] max-h-[689px]">
          {/* Empty left half */}
        </div>

        {/* Responsive Right Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
