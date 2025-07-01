import React from "react";

function Width() {
  return (
    <div>
      <h1>Extra Small</h1>
      <div className="w-3xs bg-blue-500 text-white p-4">
        my width 3xs
      </div>
        <div className="w-2xs bg-purple-500 text-white p-4">
        my width 2xs
      </div>
        <div className="w-xs bg-blue-700 text-white p-4">
        my width xs
      </div>

        {/* <h1>Small</h1> */}
       
        <div className="w-sm bg-red-500 text-white p-4">
          my width small
        </div>
        <div className="w-md bg-green-500 text-white p-4">
          my width medium</div>
        <div className="w-lg bg-yellow-500 text-white p-4">
          my width large    </div>

          <p className="antialiased italic  ...">The quick brown fox ...</p>

    </div>
  );
}

export default Width;
