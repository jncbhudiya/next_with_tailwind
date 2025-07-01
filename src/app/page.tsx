import Image from "next/image";
import Column from "./column/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">

       <Link href="/column">Column</Link>
      {/* <h1 className=" bg-indigo-600 text-green-900">Hello Next..</h1>
      <button
        className="border-purple-200 text-purple-600 border-2 border-black-900 border-dashed 
                   bg-conic/decreasing   from-violet-700 via-lime-300 to-violet-700 h-16 w-40 flex items-center justify-center text-white hover:bg-purple-600  hover:text-white active:bg-purple-700 ..."
      >
        Message
      </button> */}
    </div>
  );
}
