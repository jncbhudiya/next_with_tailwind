import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <li>  <Link href="/column">Column</Link></li>
    
      <li><Link href="/width">Width</Link></li>

      <li><Link href="/fontsize">Font Size</Link></li>

      <li><Link href="/fontweight">Font Weight</Link></li>

      <li><Link href="/font-stretch">Font Stretch</Link></li>

      <li><Link href="/font-variant-number">Font Variant Number</Link></li>
    
      <li><Link href="/line-clamp">Line Clamp</Link></li>
      
      <li><Link href="/list-style-image">List Style Image</Link></li>
    </div>
  );
}
