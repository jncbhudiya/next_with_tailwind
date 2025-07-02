import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="align-middle flex flex-col items-right h-screen ">
      <li className="text-rose-900">
        
        <Link href="/column" >
          Column
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/width" >
          Width
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/fontsize" >
          Font Size
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/fontweight" >
          Font Weight
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/font-stretch" >
          Font Stretch
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/font-variant-number" >
          Font Variant Number
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/line-clamp" >
          Line Clamp
        </Link>
      </li>
      <li className="text-rose-900">
        <Link href="/text-overflow" >
          Text Overflow
        </Link>
      </li>
      <li className="text-rose-900"> 
        <Link href="/list-style-image" >
          List Style Image
        </Link>
      </li>

      <li className="text-rose-900"> 
        <Link href="/list-style-type" >
          List Style Type
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/flex-box-and-grid" >
          Flexbox and Grid
        </Link>
      </li>

      <li className="text-rose-900">
        <Link href="/border" >
          Border
        </Link>
      </li>
    </div>
  );
}
