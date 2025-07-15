import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              First American Land Allotment
            </h3>
            <p className="text-slate-300">
              Preserving and documenting indigenous land history through
              interactive resources.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/story-maps"
                  className="text-slate-300 hover:text-white"
                >
                  Story Maps
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-slate-300 hover:text-white"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-slate-300 hover:text-white"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mission"
                  className="text-slate-300 hover:text-white"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-300 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-slate-300 hover:text-white"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Stay Connected</h4>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for updates on new resources and
              research.
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-slate-800/50 text-white rounded-l-md focus:outline-none"
              />
              <button className="px-4 me-2 py-2 border bg-white border-teal hover:bg-accent text-teal hover:text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-50">
          <p>
            © {new Date().getFullYear()} First American Land Allotment Project.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
