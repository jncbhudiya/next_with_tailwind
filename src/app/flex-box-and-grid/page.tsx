import React from "react";

function Flexboxandgrid() {
  return (
    <div>
      <h6>Flexbox and Grid</h6>
      <div className="flex flex-row gap-4">
        <div className="basis-64 bg-purple-400 rounded-sm h-10">01</div>
        <div className="basis-64 bg-purple-400 rounded-sm h-10">02</div>
        <div className="basis-128 bg-purple-400 rounded-sm h-10">03</div>
      </div>
      <div className="flex flex-row gap-4 m-4">
        <div className="basis-2/5 bg-blue-400 rounded-sm h-10">01</div>
        <div className="basis-3/5 bg-blue-400 rounded-sm h-10">02</div>
      </div>
      <div className="flex flex-row gap-4 m-4">
        {/* Prefix a flex-basis utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above: */}
        <div className="basis-1/4 md:basis-1/3 bg-purple-400 rounded-sm h-10">
          01
        </div>
        <div className="basis-1/4 md:basis-1/3 bg-purple-400 rounded-sm h-10">
          02
        </div>
        <div className="basis-1/2 md:basis-1/3 bg-purple-400 rounded-sm h-10">
          03
        </div>
      </div>
      <div>
        flex direction
        <div className="flex flex-row gap-4 m-4">
          <div className="basis-1/8 bg-pink-400 rounded-sm h-10 text-center">
            01
          </div>
          <div className="basis-1/8 bg-pink-400 rounded-sm h-10 text-center">
            02
          </div>
          <div className="basis-1/8 bg-pink-400 rounded-sm h-10 text-center">
            03
          </div>
        </div>
        row-reverse
        <div className="flex flex-row-reverse gap-4  ...">
          <div className="basis-1/8 bg-green-400 rounded-sm h-10 text-center">
            01
          </div>
          <div className="basis-1/8 bg-green-400 rounded-sm h-10 text-center">
            02
          </div>
          <div className="basis-1/8 bg-green-400 rounded-sm h-10 text-center">
            03
          </div>
        </div>
        column
        <div className="flex flex-col gap-4  ...">
          <div className="basis-1/8 bg-amber-400 rounded-sm h-100 w-100 text-center">
            01
          </div>
          <div className="basis-1/8 bg-amber-400 rounded-sm h-100 w-100 text-center">
            02
          </div>
          <div className="basis-1/8 bg-amber-400 rounded-sm h-100 w-100 text-center">
            03
          </div>
        </div>
        column-reverse
        <div className="flex flex-col-reverse gap-4  ...">
          <div className="basis-1/8 bg-red-400 rounded-sm h-100 w-100 text-center">
            01
          </div>
          <div className="basis-1/8 bg-red-400 rounded-sm h-100 w-100 text-center">
            02
          </div>
          <div className="basis-1/8 bg-red-400 rounded-sm h-100 w-100 text-center">
            03
          </div>
        </div>
        <div>
          <h1>Flex-wrap</h1>
          <div className="flex flex-nowrap gap-4 m-4 w-600">
            <div className="bg-amber-600 w-800">01</div>
            <div className="bg-amber-600 w-800">02</div>
            <div className="bg-amber-600 w-800">03</div>
          </div>

          <div className="flex flex-wrap gap-4 m-4 w-450">
            <div className="bg-yellow-300 w-800">01</div>
            <div className="bg-yellow-300 w-800">02</div>
            <div className="bg-yellow-300 w-800">03</div>
          </div>

          <div className="flex flex-wrap-reverse gap-4 m-4 w-350">
            <div className="bg-green-300 w-200">01</div>
            <div className="bg-green-300 w-50">02</div>
            <div className="bg-green-300 w-100">03</div>
          </div>
        </div>
        <div>
          <h1>flex</h1>
          <div className="flex gap-4 m-4 w-350">
            <div className="w-14 flex-none bg-lime-400 ">01</div>
            <div className="w-64 flex-1 bg-lime-400 ">02</div>
            <div className="w-32 flex-1 bg-lime-400 ">03</div>
          </div>
        </div>
        <div>
          <h1>flex grow</h1>
          {/* Use grow to allow a flex item to grow to fill any available space. */}
          <div className="flex gap-4 ...">
            <div className="size-14 flex-none bg-teal-700 ...">01</div>
            <div className="size-14 grow bg-teal-700 ...">02</div>
            <div className="size-14 grow    bg-teal-700 ...">03</div>
          </div>
        </div>
        <div>
          <h1>order</h1>
          <div className="flex justify-between gap-4 ">
            <div className="order-3 bg-cyan-400 w-250 h-10">01</div>
            <div className="order-1 bg-cyan-400 w-250 h-10">02</div>
            <div className="order-2 bg-cyan-400 w-250 h-10">03</div>
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <div className="order-last bg-sky-400 w-250 h-10">01</div>
            <div className="order-1 bg-sky-400 w-250 h-10">02</div>
            <div className="order-2 bg-sky-400 w-250 h-10">04</div>
            <div className="order-first bg-sky-400 w-250 h-10">03</div>
          </div>
        </div>
        <div>
          <h1>grid-template-columns</h1>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-violet-500 h-10">01</div>
            <div className="bg-violet-500 h-10">02</div>
            <div className="bg-violet-500 h-10">03</div>
            <div className="bg-violet-500 h-10">04</div>
            <div className="bg-violet-500 h-10">05</div>
            <div className="bg-violet-500 h-10">06</div>
            <div className="bg-violet-500 h-10">07</div>
            <div className="bg-violet-500 h-10">08</div>
            <div className="bg-violet-500 h-10">09</div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-fuchsia-500 h-10">01</div>
            <div className="bg-fuchsia-500 h-10">02</div>
            <div className="bg-fuchsia-500 h-10">03</div>
            <div className="bg-fuchsia-500 h-10">04</div>
            <div className="bg-fuchsia-500 h-10">05</div>
            <div className="col-span-3 grid grid-cols-subgrid gap-4">
              <div className="col-start-2 bg-fuchsia-500 h-10">06</div>
            </div>
          </div>
        </div>
        <div>
          <h1>Grid column</h1>
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-slate-600">01</div>
            <div className="bg-slate-600">02</div>
            <div className="bg-slate-600">03</div>
            <div className="col-span-2 bg-slate-600">04</div>
            <div className="bg-slate-600">05</div>
            <div className="bg-slate-600">06</div>
            <div className="col-span-2 bg-slate-600">07</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flexboxandgrid;
