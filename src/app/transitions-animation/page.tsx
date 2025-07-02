import React from "react";

function Animation() {
  return (
    <div className="flex flex-col items-center">
      Animation
      <div>
        <button className="bg-green-900 p-2 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-800">
          Save Changes
        </button>
        <button className="bg-purple-900 p-2 text-white rounded-lg transition duration-150 ease-in-out hover:bg-purple-500 hover:scale-110">
          Button A
        </button>
        <button className="bg-purple-900 p-2 text-white rounded-lg transition duration-300 ease-in-out hover:bg-purple-500 hover:scale-110">
          Button B
        </button>
        <button className="bg-purple-900 p-2 text-white rounded-lg transition duration-700 ease-in-out hover:bg-purple-500 hover:scale-110">
          Button C
        </button>
        <span className="relative flex size-3 ">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
        </span>
        <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
          <div className="flex animate-pulse space-x-4">
            <div className="size-10 rounded-full bg-gray-200"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 m-4">
          <h1>backface-visibility</h1>
          <div className="size-20 ...">
            <div className="translate-z-12 rotate-x-0 bg-sky-300/75 backface-hidden p-4">
              1
            </div>
            <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-hidden p-4">
              2
            </div>
            <div className="translate-x-12 rotate-y-90 bg-sky-300/75 backface-hidden p-4">
              3
            </div>
            <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-hidden p-4">
              4
            </div>
            <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-hidden p-4">
              5
            </div>
            <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-hidden p-4">
              6
            </div>
          </div>
          <div className="size-20 ...">
            <div className="translate-z-12 rotate-x-0 bg-sky-300/75 backface-visible p-4">
              1
            </div>
            <div className="-translate-z-12 rotate-y-18 bg-sky-300/75 backface-visible p-4">
              2
            </div>
            <div className="translate-x-12 rotate-y-90 bg-sky-300/75 backface-visible p-4">
              3
            </div>
            <div className="-translate-x-12 -rotate-y-90 bg-sky-300/75 backface-visible p-4">
              4
            </div>
            <div className="-translate-y-12 rotate-x-90 bg-sky-300/75 backface-visible p-4">
              5
            </div>
            <div className="translate-y-12 -rotate-x-90 bg-sky-300/75 backface-visible p-4">
              6
            </div>
          </div>
        </div>
        <div className="flex gap-4 m-4">
          <h1>Rotate</h1>
          <img
            className="rotate-45 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="rotate-90 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="rotate-210 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="-rotate-45 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="-rotate-90 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="-rotate-210 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGsWvD8He2tWT7KN-tZcTLIZrGxcXdOJuHw&s"
          />
          <img
            className="rotate-x-50 rotate-z-45 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToh2LI5HzWbL9CgzsQNni16ijO6GfBadvsuw&s"
          />
          <img
            className="rotate-x-15 -rotate-y-30 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToh2LI5HzWbL9CgzsQNni16ijO6GfBadvsuw&s"
          />
          <img
            className="rotate-y-25 rotate-z-30 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToh2LI5HzWbL9CgzsQNni16ijO6GfBadvsuw&s"
          />
          <img
            className="skew-3 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&s"
          />
          <img
            className="skew-6 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&s"
          />
          <img
            className="skew-12 h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&s"
          />
          <img
            className="scale-150 transform-gpu h-20 w-20 ..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVzkOBYJ0zwXh6l1j9k6v5TDwLZDUbWjUbQ&s"
          />
        </div>
        <div className="flex gap-4 m-4 bg-gray-100 p-4 w-90 h-30">
          <img className="origin-center rotate-45 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OWPtyGCwENZhAMoN7CXihTpaEt-GSSNXzQ&s" />
          <img className="origin-top-left rotate-12 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OWPtyGCwENZhAMoN7CXihTpaEt-GSSNXzQ&s" />
          <img className="origin-bottom -rotate-12 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OWPtyGCwENZhAMoN7CXihTpaEt-GSSNXzQ&s" /></div>
      </div>

      <div className="flex gap-4 m-4 bg-purple-100  w-100 h-35">
        <img className="-translate-6 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtUWNKbspp6PLZ8vefQkaOjOw1oJlJH-bUA&s" />
        <img className="translate-2 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtUWNKbspp6PLZ8vefQkaOjOw1oJlJH-bUA&s" />
        <img className="translate-8 h-20 w-20 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtUWNKbspp6PLZ8vefQkaOjOw1oJlJH-bUA&s" />

        <div className="transform-3d">
          <img className="-translate-z-8 rotate-x-70 rotate-z-45 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeEJ47c_Y9g5VeNDcUWmFMuvpjB4LsrR3ZQ&s" />
          <img className="translate-z-2 rotate-x-50 rotate-z-45 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeEJ47c_Y9g5VeNDcUWmFMuvpjB4LsrR3ZQ&s" />
          <img className="translate-z-1/2 rotate-x-50 rotate-z-45 ..." src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeEJ47c_Y9g5VeNDcUWmFMuvpjB4LsrR3ZQ&s" />
        </div>
      </div>
    </div>
  );
}

export default Animation;
