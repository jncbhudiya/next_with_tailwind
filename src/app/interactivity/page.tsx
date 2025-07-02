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
        <button className="cursor-pointer bg-pink-700 rounded h-10 w-15 ...">Submit</button>
        <button className="cursor-progress bg-pink-700 rounded h-10 w-17 ...">Saving...</button>
        <button className="cursor-not-allowed bg-pink-700 rounded h-10 w-15 ..." disabled>Confirm</button>
      </div>


      <div className="flex flex-col gap-4 m-4 p-5">
        <h1>field sizing</h1>
        <textarea className="field-sizing-content placeholder:text-gray-400 w-100 ..." placeholder="Enter text here...">

        </textarea>

        <textarea className="field-sizing-fixed w-80 ..." placeholder="Enter text here..." rows="2">

        </textarea>
      </div>

      <div>
        <h1>field sizing</h1>
        <textarea className="resize rounded-md ..."></textarea>

      </div>


      <div className="flex flex-row gap-4 m-4 p-5 ">
        <h1>scroll margin</h1>
        <div className="snap-x bg-purple-100  flex gap-4">
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
          <div className="snap-start scroll-ml-6 ...">
            <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCSx4QJDS0bdOa8y_rqYG4O726S7X2YMdgQ&s" />
          </div>
        </div>
      </div>


      <div className="flex flex-row gap-4 m-4 p-5">
        <div className="snap-x scroll-pl-6 flex  ...">
          <div className="snap-start ...">
            <img className="h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
          </div>
          <div className="snap-start ...">
            <img className="h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
          </div>
          <div className="snap-start ...">
            <img className="h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
          </div>
          <div className="snap-start ...">
            <img className="h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
          </div>
          <div className="snap-start ...">
            <img className="h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interactivity;
