import Link from "next/link";

export function Nav() {
  return (
    <div className="mt-2 text-gray-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-white ml-3 font-bold text-xl">BLOGGA</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/design-tools"
            className="mr-5 cursor-pointer link hover:text-gray-500"
          >
            Design Tools
          </Link>
          <Link
            href="/daily-updates"
            className="mr-5 cursor-pointer link hover:text-gray-500"
          >
            Daily Updates
          </Link>
          <Link
            href="/tutorials"
            className="mr-5 cursor-pointer link hover:text-gray-500"
          >
            Tutorials
          </Link>
          <Link
            href="/library"
            className="mr-5 cursor-pointer link hover:text-gray-500"
          >
            Library
          </Link>
        </nav>
        <button className="text-white inline-flex items-center bg-white/10 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Subscribe
        </button>
      </div>
    </div>
  );
}
