import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8  h-150 overflow-y-auto">
            <h1 className="text-3xl font-bold text-purple-900 mb-6 text-center">
              Explore Tailwind CSS Features
            </h1>
            <ul className="space-y-4">
              {[
                { href: "/column", label: "Column" },
                { href: "/width", label: "Width" },
                { href: "/fontsize", label: "Font Size" },
                { href: "/fontweight", label: "Font Weight" },
                { href: "/font-stretch", label: "Font Stretch" },
                { href: "/font-variant-number", label: "Font Variant Number" },
                { href: "/line-clamp", label: "Line Clamp" },
                { href: "/text-overflow", label: "Text Overflow" },
                { href: "/list-style-image", label: "List Style Image" },
                { href: "/list-style-type", label: "List Style Type" },
                { href: "/flex-box-and-grid", label: "Flexbox and Grid" },
                { href: "/border", label: "Border" },
                { href: "/layout-class", label: "Layout Class" },
                { href: "/effects", label: "Effects" },
                { href: "/filter", label: "Filter" },
                { href: "/table", label: "Table" },
                { href: "/transitions-animation", label: "Transitions & Animation" },
                { href: "/interactivity", label: "Interactivity" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-purple-700 text-lg font-medium rounded-md px-4 py-3 transition-colors duration-300 hover:bg-purple-200 hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  );
}
