import React from "react";

function Layout() {
  return (
    <div className="p-25">
      Layout
      <div className="columns-2 bg-gray-200 p-4 ">
        <p>Well, let me tell you something, </p>
        <p className="break-inside-avoid-column">Sure, go ahead, laugh</p>
        <p>Maybe we can live without</p>
        <p>Look. If you think this is</p>
      </div>
      ..
      <div className="columns-2 bg-green-400 p-4">
        <p>.Well, let me tell you something, </p>
        <p className="break-before-column">Sure, go ahead, laugh</p>
        <p>===Maybe we can live without</p>
        <p>****Look. If you think this is</p>
      </div>
      <h1>Box Decoration Break</h1>
      <div className="m-5 ">
        <span className="box-decoration-slice  rounded-md border-4 border-gray-900 bg-linear-to-r from-indigo-600 to-pink-500 px-2 p-3 w-80 h-80 m-5  text-white ">
          Hello
          <br />
          World
        </span>
        <span className="box-decoration-clone rounded-md border-4 border-gray-900 bg-linear-to-r from-indigo-600 to-pink-500 px-2 p-3 w-80 h-80 m-5 text-white ">
          Hello
          <br />
          World
        </span>
      </div>
      <div>
        <h1>Display</h1>
        <h2>Block and Inline</h2>
        <div className="flex flex-col w-43">
          <p>
            When controlling the flow of text, using the CSS property{" "}
            <span className="inline bg-sky-200">display: inline</span> will
            cause the text inside the element to wrap normally.
          </p>
          <p>
            While using the property{" "}
            <span className="inline-block bg-yellow-200">
              display: inline-block
            </span>{" "}
            will wrap the element to prevent the text inside from extending
            beyond its parent.
          </p>
          <p>
            Lastly, using the property{" "}
            <span className="block bg-red-200">display: block</span> will put
            the element on its own line and fill its parent.
          </p>
        </div>

        <h2>***********************Flow Root****************************</h2>
        <div>
          <div className="p-4">
            <div className="flow-root bg-indigo-200 w-50">
              <div className="my-4">Well, let me tell you something, </div>
            </div>
            <div className="flow-root bg-pink-200 w-50">
              <div className="my-4 ">Sure, go ahead, laugh if you want</div>
            </div>
          </div>
        </div>

        <h2>***********************Flow Root****************************</h2>
        <div className="p-4">
          <div className="flow-root bg-indigo-200 w-50">
            <div className="flex items-center">
              <img
                className="w-15 h-12 rounded-full p-1 "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-trfUKy61boM_s-9io41rP3M3OJcMH5vK-A&s"
              />
              <div>
                <strong>Andrew Alfred</strong>
                <span>Technical advisor</span>
                <br />
                <span>United States</span>
                <br />

                <span className="text-sm text-gray-500">Joined in 2023</span>
              </div>
            </div>
          </div>
        </div>

        <h2>*********************Inline Flex************************</h2>
        <div className="p-4 w-70">
          <p>
            Today I spent most of the day researching ways to 
            <span className="inline-flex items-baseline">
              <img
                className="w-5 h-5 rounded-full "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeTVugSEXubIMekkdXFWtAYoL5HyHlG8DJA&s"
              />
              <span>Kramer</span>
            </span>
            keeps telling me there is no way to make it work, that 
          </p>
        </div>

        <h1>
          ************************************Screen-reader
          only*******************************
        </h1>
        <div>
          <p className="sr-only">
            This content is only visible to screen readers.
          </p>
          <span className="sm:not-sr-only">Settings</span>
        </div>
      </div>
      <h1>
        --------------------Floating elements to the
        right------------------------
      </h1>
      <div className="w-300">
        <article>
          <img
            className="float-right w-20 h-20 m-2 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPjasn-8EECz9w5rcUPPbKc1Zm77HFjqHlg&s"
          />
          <p className="text-justify">
            Maybe we can live without libraries, people like you and me. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            labore maiores error molestias dolorem perspiciatis nemo. Voluptate
            quo sequi nihil excepturi alias similique mollitia iusto laudantium,
            quos, est non commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt culpa unde fugiat dicta impedit recusandae,
            possimus rerum iure expedita deleniti ipsum dolorum! Illum, quis
            perspiciatis accusamus doloremque amet ipsam consequuntur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quaerat minus
            nihil, voluptatum accusantium laudantium soluta debitis quo dolores
            perspiciatis exercitationem nobis in ea reiciendis maiores
            temporibus itaque voluptas esse dicta. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam consequatur doloribus quas
            magni tenetur dolores, enim quasi doloremque ratione perferendis
            earum, ab adipisci perspiciatis quos beatae rem, quidem harum
            similique!
          </p>
        </article>
      </div>
      <h1>
        --------------------Floating elements to the
        left------------------------
      </h1>
      <article className="w-300">
        <img
          className="float-left w-20 h-20 m-2 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPjasn-8EECz9w5rcUPPbKc1Zm77HFjqHlg&s"
        />
        <p className="text-justify">
          Maybe we can live without libraries, people like you and me.  Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Totam labore
          maiores error molestias dolorem perspiciatis nemo. Voluptate quo sequi
          nihil excepturi alias similique mollitia iusto laudantium, quos, est
          non commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sunt culpa unde fugiat dicta impedit recusandae, possimus rerum iure
          expedita deleniti ipsum dolorum! Illum, quis perspiciatis accusamus
          doloremque amet ipsam consequuntur? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quaerat minus nihil, voluptatum
          accusantium laudantium soluta debitis quo dolores perspiciatis
          exercitationem nobis in ea reiciendis maiores temporibus itaque
          voluptas esse dicta. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam consequatur doloribus quas magni tenetur
          dolores, enim quasi doloremque ratione perferendis earum, ab adipisci
          perspiciatis quos beatae rem, quidem harum similique!
        </p>
      </article>
      <h1>---------------------clear------------</h1>
      <div>
        <article className="w-200">
          <img
            className="float-left h-20 w-20 m-2 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsW1oZb0tkhoOWammVY0jMyujx6m8Igyi2A&s"
          />
          <img
            className="float-right h-20 w-20 m-2 rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kqsTMDXS4TAMiSMnOQMtwWvIE8WPTraiVA&s"
          />
          <p className="clear-none">
            Maybe we can live without libraries Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptates expedita maxime earum! Ex
            aliquam quisquam consectetur iusto quidem voluptates natus eos
            possimus odio ullam illum amet porro, optio atque beatae?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ab dolore porro
            neque consectetur tempore enim consequatur natus obcaecati quibusdam
            commodi reiciendis sint praesentium optio nobis, quae sed eaque
            nesciunt nisi!Lorem Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eaque quam hic ipsam culpa quisquam repudiandae,
            similique facere, deserunt perspiciatis molestiae qui sequi unde
            vitae sunt voluptatibus tempore dolorum harum eos? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Amet, blanditiis nisi sequi
            vel magnam eaque voluptatum incidunt eligendi ea a voluptatibus.
            Pariatur temporibus voluptas quo sequi delectus nemo, maiores
            maxime? ;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero odit nostrum aspernatur at officia minima tenetur animi
            explicabo est atque. Repellat accusantium repudiandae nemo a
            incidunt corrupti eaque repellendus quasi!
          </p>
        </article>
      </div>
      <h1>-----------------isolation-----------------</h1>
      <div>
        <div className=" w-80 h-50 bg-blue-200 p-2 m-2">
          <img
            className="float-left w-30 h-30 m-2 rounded-lg isolate"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FtfmsssmtxZf6kokdEamdzFmlwot4DvA6A&s"
          />

          <img
            className="float-left w-30 h-30 m-2 rounded-lg md:isolation-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FtfmsssmtxZf6kokdEamdzFmlwot4DvA6A&s"
          />
        </div>

        <div className="relative w-80 h-80 bg-blue-200 p-4 m-4 isolate">
          <img
            className="absolute top-4 left-4 w-40 h-40 rounded-lg z-10 mix-blend-multiply"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FtfmsssmtxZf6kokdEamdzFmlwot4DvA6A&s"
          />
          <img
            className="absolute top-8 left-8 w-40 h-40 rounded-lg z-20 mix-blend-multiply"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FtfmsssmtxZf6kokdEamdzFmlwot4DvA6A&s"
          />
        </div>

        <h1>------------------object-fit-------------------</h1>
        <div className="bg-gray-100">
          <img
            className="h-20 w-20 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBcgDJmYehEXe68mvREUpo9W2A8b_HE1ndQ&s"
          />
        </div>
        <div className="bg-purple-100">
          <img
            className="h-20 w-20 object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBcgDJmYehEXe68mvREUpo9W2A8b_HE1ndQ&s"
          />
        </div>
      </div>
      <h1>---------------object position-----------------</h1>
      <div className="bg-green-900 w-30 h-30">
        <img
          className="size-24 object-left-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMW8dQ9QbhKwfMTRY_yW9ygtIc3zDyLYY9Jw&s"
        />
      </div>
      <h1> -----------------overflow---------------</h1>
      <div>
        <p className="overflow-scroll w-50 h-32 bg-indigo-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          hic repellat et deleniti illum ducimus nisi ea, vero veniam mollitia
          sint adipisci nesciunt id voluptatem cumque minus accusantium!
          Cupiditate, hic.
        </p>
      </div>
      <h1>-----------------position-----------------</h1>
      <div className="static bg-cyan-200 p-4 m-4 w-30">
        <p>Static parent</p>
        <div className="absolute w-30   p-4 m-4 bg-red-200 ">
          <p>Absolute child</p>
        </div>
      </div>
      <div className="static bg-indigo-200 mt-25 p-4">
        <div className="static bg-green-200 p-4 m-4 w-30">
          <p>Static child..1</p>
        </div>
        <div className="inline-block bg-pink-200 p-4 m-4 w-30">
          <p>Static sibling</p>
        </div>
        {/* <div className="absolute bg-blue-200 p-4 m-6 w-30">
          <p>Absolute child..11</p>
        </div> */}
        <div className="inline-block bg-yellow-200 p-4 m-4 w-30">
          <p>Static sibling</p>
        </div>
      </div>
      <h1>-------------left/right/bottom/top---------------------</h1>
      <div>
        <div className="relative size-25 bg-sky-200 ">
          <div className="absolute top-0 left-0 size-16 bg-yellow-200 ">01</div>
        </div>
        <div className="relative size-25 bg-purple-200 mt-4 ">
          <div className="absolute inset-x-0 top-0 h-16 bg-yellow-200 ">02</div>
        </div>
        <div className="relative size-25 bg-amber-400 mt-4 ">
          <div className="absolute top-0 right-0 size-16 bg-yellow-200 ">03</div>
        </div>
        <div className="relative size-25 bg-lime-300 mt-4 ">
          <div className="absolute inset-y-0 left-0 w-16 bg-yellow-200 ">04</div>
        </div>
        <div className="relative size-25 bg-blue-200 mt-4 ">
          <div className="absolute inset-0  w-16 bg-yellow-200 ">05</div>
        </div>
        <div className="relative size-25 bg-purple-200 mt-4 ">
          <div className="absolute inset-y-0 right-0 w-16 bg-yellow-200 ">06</div>
        </div>
        <div className="relative size-25 bg-amber-400 mt-4 ">
          <div className="absolute bottom-0 left-0 size-16 bg-yellow-200 ">07</div>
        </div>
        <div className="relative size-25 bg-lime-300 mt-4 ">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-200 ">08</div>
        </div>
        <div className="relative size-25 bg-sky-500 mt-4 ">
          <div className="absolute right-0 bottom-0 size-16 bg-yellow-200 ">09</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
