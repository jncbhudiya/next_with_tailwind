import React from "react";

function Liststyletype() {
  return (
    <div>
      List Style Type
      <ul className="list-disc">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
      </ul>
      <ol className="list-decimal">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
      </ol>
      <ul className="list-none">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
      </ul>
      {/* text decoration line  */}
      <p className="underline">The quick brown fox...</p>
      <p className="overline">The quick brown fox...</p>
      <p className="line-through">The quick brown fox...</p>
      {/* text decoration color */}
      <p>
        I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
        at <a className="underline decoration-sky-500">My Company, Inc</a>.
        Outside of work, I like to
        <a className="underline decoration-pink-500">watch pod-racing</a>
        and have <a className="underline decoration-indigo-500">light-saber</a>
        fights.
      </p>
      {/* text decoration style */}
      <p className="underline decoration-solid">The quick brown fox...</p>
      <p className="underline decoration-double">The quick brown fox...</p>
      <p className="underline decoration-dotted">The quick brown fox...</p>
      <p className="underline decoration-dashed">The quick brown fox...</p>
      <p className="underline decoration-wavy">The quick brown fox...</p>
      {/* text decoration offset */}
      <p className="underline underline-offset-1">The quick brown fox...</p>
      <p className="underline underline-offset-2">The quick brown fox...</p>
      <p className="underline underline-offset-4">The quick brown fox...</p>
      <p className="underline underline-offset-8">The quick brown fox...</p>
      {/* text transform  */}
      <p className="uppercase">The quick brown fox ...</p>
      <p className="lowercase">The QUICK brown fox ...</p>
      <p className="capitalize">The quick brown fox ...</p>
      <p className="normal-case">The quick brown fox ...</p>
      {/* text indent */}
      <p className="indent-1 w-265">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist. ...
      </p>
      <p className="indent-2 w-265">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p className="indent-4 w-265">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      <p className="indent-8 w-265">
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I
        was a marine biologist.
      </p>
      text overflow
      <p className="truncate w-70">
        The longest word in any of the major The longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of
        theThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the majorThe longest word in any of the
        majorThe longest word in any of the major major
      </p>
      <p className="overflow-hidden w-264 text-ellipsis">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsa
        possimus cumque quisquam reprehenderit fuga eligendi, deleniti ut
        aliquam rem voluptas! Perspiciatis dicta, adipisci quasi asperiores
        possimus eligendi accusantium similique. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nostrum aliquid possimus beatae quia
        quisquam, dolorum velit! Voluptate possimus animi ut ipsam saepe. Illum
        blanditiis aliquam ipsam, est incidunt sapiente laboriosam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatem nam cum suscipit
        magnam, deserunt, ea sed autem deleniti eveniet, laborum soluta
        consectetur repellendus corporis natus dolorem similique consequatur
        ipsam optio! The longest word in any of the major...
      </p>
      text wrapping
      <article className="text-wrap w-264">
        <h1>Beloved Manhattan soup stand closes Lorem ipsum, dolor sit amet</h1>
        <p>
          New Yorkers are facing the winter chill... consectetur adipisicing
          elit. Consectetur voluptas nostrum voluptatem nihil laborum ipsa
          alias, perferendis esse aperiam hic odio, eos vitae fuga natus, totam
          quos distinctio nisi eius? Lorem ipsum dolor sit amet consectetur=
          quod maiores culpa! Ducimus, quisquam. Soluta necessitatibus cumque
          inventore neque mollitia, voluptates ratione iusto, error quod in enim
          dolorem assumenda numquam?+
        </p>
      </article>
      <span className="inline-block align-baseline">
        The quick brown fox...
      </span>
      hyphenation
      <p className="hyphens-manual w-264">
        The quick brown fox jumps over the lazy dog. This is a test of
        hyphenation in a long paragraph that should demonstrate how words are
        broken up at &shy; the end of lines. Hyphenation is important for
        justified text, as it helps to create a more even and visually appealing
        layout.
      </p>
      <p className="hyphens-auto w-264" lang="de">
        The quick brown fox jumps over the lazy dog. This is a test of
        hyphenation in a long paragraph that should demonstrate how words are
        broken up at &shy; the end of lines. Hyphenation is important for
        justified text, as it helps to create a more even and visually appealing
        layout.
      </p>
      {/* content  */}
      <p>
        Higher resolution means more than just a better-quality image. With a
        Retina 6K display,{" "}
        <a className="text-blue-600 after:content-['_↗']" href="...">
          Pro Display XDR
        </a>{" "}
        gives you nearly 40 percent more screen real estate than a 5K display.
      </p>
    </div>
  );
}

export default Liststyletype;
