import React from "react";

function Effect() {
  return (
    <div>
      Effect
      <div className="shadow-lg m-4 w-15 h-10 bg-purple-100 shadow-purple-700/50">
        01
      </div>
      <div className="shadow-md m-4 w-15 h-10 bg-purple-100 shadow-purple-700/50 ">
        02
      </div>
      <div className="shadow-sm m-4 w-15 h-10 bg-purple-100 shadow-purple-700/50">
        03
      </div>
      <div className="shadow-xl m-4 w-35 h-10 bg-purple-100">extra large</div>
      <div className="shadow-xl/30 m-4 w-35 h-10 bg-purple-100">xl/30</div>
      <div className="inset-shadow-sm m-4 w-35 h-10 bg-purple-100 inset-shadow-purple-700/50">
        shadow inset
      </div>
      <div className="shadow-inner m-4 w-15 h-10 bg-purple-200 ring-4 ring-purple-700/50">
        04
      </div>
      <div className="shadow-outline m-4 w-40 h-10 bg-purple-100 inset-ring-4 inset-ring-purple-900/50 rounded p-2">
        Ring Inset
      </div>
      <div className="shadow-none m-4 w-15 h-10 bg-purple-100">06</div>
      <h1>Text shadow</h1>
      <p className="text-shadow-lg text-shadow-purple-700/50">
        The quick brown fox...
      </p>
      <div className="bg-pink-200">
        <button className="text-sky-950 text-shadow-2xs text-shadow-sky-300 ...">
          Book a demo
        </button>
        <button className="text-gray-950 dark:text-white dark:text-shadow-2xs ...">
          See pricing
        </button>
      </div>
      <h1>-----opacity----</h1>
      <div className="flex gap-2">
        <button className="bg-indigo-500 opacity-100 w-20 ...">01</button>
        <button className="bg-indigo-500 opacity-75 w-20 ...">02</button>
        <button className="bg-indigo-500 opacity-50 w-20 ...">03</button>
        <button className="bg-indigo-500 opacity-25 w-20 ...">04</button>
      </div>
      <h1>------mix-blend-mode-----</h1>
      <div>
        <div className="flex justify-center -space-x-14">
          <div className="bg-blue-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            01
          </div>
          <div className="bg-pink-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            02
          </div>
        </div>

        <div className="isolate flex justify-center -space-x-14">
          <div className="bg-yellow-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            01
          </div>
          <div className="bg-green-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            02
          </div>
        </div>
        <div className="flex justify-center -space-x-14">
          <div className="bg-purple-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            01
          </div>
          <div className="bg-lime-500 mix-blend-multiply w-20 h-20 rounded-full justify-center items-center flex">
            02
          </div>
        </div>
      </div>
      <h1>------background-blend-mode-----</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className=" bg-blue-500 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeTVugSEXubIMekkdXFWtAYoL5HyHlG8DJA&s')] bg-blend-multiply bg-cover bg-center w-20 h-10 ">
          Multiply
        </div>
        <div className=" bg-purple-500 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeTVugSEXubIMekkdXFWtAYoL5HyHlG8DJA&s')] bg-blend-soft-light bg-cover bg-center w-20 h-10 ">
          Soft Light
        </div>
        <div className=" bg-blue-500 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeTVugSEXubIMekkdXFWtAYoL5HyHlG8DJA&s')] bg-blend-overlay bg-cover bg-center w-20 h-10 ">
          Overlay
        </div>
      </div>
      <h1>----mask clip----</h1>
      <div>
        <div className="border-4 p-4 border-black bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeTVugSEXubIMekkdXFWtAYoL5HyHlG8DJA&s')] bg-cover w-64 h-64 mask-clip-border">
          multiply
        </div>


      
      </div>
    </div>
  );
}

export default Effect;
