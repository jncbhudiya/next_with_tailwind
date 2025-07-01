import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="bg-indigo-900 text-yellow-100">Hello Next..</h1>
      <button className="border-purple-200 text-purple-600  hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
        Message
      </button>
    </div>
  );
}
