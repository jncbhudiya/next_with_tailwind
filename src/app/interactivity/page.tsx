import React from "react";

function Interactivity() {
  return (
    <div className="bg-purple-900  text-white p-6">
      Interactivity
      <div className="flex flex-col gap-4 m-4 p-5">
        <h1>accent-color</h1>
        <label>
          <input type="checkbox" checked />
          Browser default
        </label>
        <label>
          <input className="accent-pink-500" type="checkbox" checked />
          Customized
        </label>
        <label>
          <input className="accent-purple-500/25" type="checkbox" checked />
          <input className="accent-purple-500/75" type="checkbox" checked />
          Customized with opacity
        </label>
        <label>
          <input
            className="accent-black hover:accent-pink-500"
            type="checkbox"
            checked
          />
          Customized with hover effect
        </label>
      </div>
      <div className="flex flex-col gap-4 m-4 p-5 w-100">
        <h1>caret-color</h1>
        <textarea className="caret-pink-500 border border-pink-300 p-2 focus:border-purple-500 rounded"></textarea>
      </div>
      <div className="flex flex-col gap-4 m-4 p-5">
        <h1>color schema</h1>
        <div className="scheme-light ...">
          <input type="date" />
        </div>
        <div className="scheme-dark ...">
          <input type="date" />
        </div>
        <div className="scheme-light-dark ...">
          <input type="date" />
        </div>
      </div>
      <div className="flex flex-col gap-4 m-4 p-5">
        <h1>cursor</h1>
        <button className="cursor-pointer bg-pink-700 rounded h-10 w-15 ...">
          Submit
        </button>
        <button className="cursor-progress bg-pink-700 rounded h-10 w-17 ...">
          Saving...
        </button>
        <button
          className="cursor-not-allowed bg-pink-700 rounded h-10 w-15 ..."
          disabled
        >
          Confirm
        </button>
      </div>
      <div className="flex flex-col gap-4 m-4 p-5">
        <h1>field sizing</h1>
        <textarea
          className="field-sizing-content placeholder:text-gray-400 w-100 ..."
          placeholder="Enter text here..."
        ></textarea>

        <textarea
          className="field-sizing-fixed w-80 ..."
          placeholder="Enter text here..."
          rows="2"
        ></textarea>
      </div>
      <div>
        <h1>field sizing</h1>
        <textarea className="resize rounded-md ..."></textarea>
      </div>
      <div className="flex flex-row gap-4 m-4 p-5 ">
        <h1>scroll margin</h1>
        <div className="snap-x bg-purple-100  flex gap-4">
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img
              className="w-20 h-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 m-4 p-5">
        <div className="snap-x scroll-pl-6 flex  ...">
          <div className="snap-start ...">
            <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s"
            />
          </div>
          <div className="snap-start ...">
            <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s"
            />
          </div>
          <div className="snap-start ...">
            <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s"
            />
          </div>
          <div className="snap-start ...">
            <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s"
            />
          </div>
          <div className="snap-start ...">
            <img
              className="h-20 w-20"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s"
            />
          </div>
        </div>
      </div>
      <div className="p-15 mb-10">
        <svg
          className="w-6 h-6 fill-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C10.343 2 9 3.343 9 5v.277C6.721 6.165 5 8.388 5 11v4l-1 1v1h16v-1l-1-1v-4c0-2.612-1.721-4.835-4-5.723V5c0-1.657-1.343-3-3-3zm0 20a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2z" />
        </svg>

        <button className="flex items-center bg-white text-indigo-600 rounded-md p-2 hover:bg-indigo-600 hover:text-white ">
          <svg
            className="w-6 h-6 fill-current text-gray-800 dark:text-purple-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
            <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
          </svg>
          <svg
            className="w-6 h-6 stroke-purple-500 dark:text-purple-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
            />
            <path
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            className="w-6 h-6 text-gray-800  stroke-purple-500 dark:stroke-purple-800 stroke-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
            />
          </svg>

           <svg
            className="w-6 h-6 text-gray-800  stroke-purple-500 dark:stroke-purple-800 stroke-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 11-6-2V9l6-2v10Z"
            />
          </svg>
          Check for updates
        </button>
      </div>
    </div>
  );
}

export default Interactivity;
