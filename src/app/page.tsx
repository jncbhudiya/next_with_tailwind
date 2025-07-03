import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl w-full max-w-xl p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-purple-800 text-center tracking-tight">
          Tailwind CSS Playground
        </h1>
        <p className="text-center text-purple-600 text-lg">
          Discover the power of utility-first CSS
        </p>
        <ul className="space-y-3">
          {features.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-between bg-purple-50 hover:bg-purple-100 text-purple-800 font-medium px-5 py-3 rounded-lg transition duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                <span>{label}</span>
                <svg
                  className="w-5 h-5 text-purple-500 group-hover:text-purple-700 transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
