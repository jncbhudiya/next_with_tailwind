import React from "react";

function Border() {
  return (
    <div>
      Border
      <div className="flex flex-row gap-4 m-4">
        <div className="rounded-sm bg-pink-900 h-20 w-20">Small</div>
        <div className="rounded-md bg-pink-900 h-24 w-24">Medium</div>
        <div className="rounded-lg bg-pink-900 h-28 w-28">Large</div>
        <div className="rounded-xl bg-pink-900 h-32 w-32">Extra Large</div>
      </div>
      <div className="flex flex-row gap-4 m-4">
        <div className="rounded-t-lg bg-sky-500 h-20 w-20">top </div>
        <div className="rounded-r-lg bg-sky-500 h-20 w-20">right</div>
        <div className="rounded-b-lg bg-sky-500 h-20 w-20">bottom</div>
        <div className="rounded-l-lg bg-sky-500 h-20 w-20">left</div>
      </div>
      <div className="flex flex-row gap-4 m-4">
        <div className="rounded-tl-lg bg-pink-500 h-20 w-20">top Left </div>
        <div className="rounded-tr-lg bg-pink-500 h-20 w-20">top Right</div>
        <div className="rounded-br-lg bg-pink-500 h-20 w-20">bottom Right</div>
        <div className="rounded-bl-lg bg-pink-500 h-20 w-20">bottom Left</div>
      </div>
    </div>
  );
}

export default Border;
