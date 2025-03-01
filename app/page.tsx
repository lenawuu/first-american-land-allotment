import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import FeatureCard from "@/components/feature-card"
import StoryMapHighlight from "@/components/story-map-highlight"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-slate-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-slate-700">
            Explore the history and geography of First American land allotments through interactive maps, research, and
            comprehensive data resources.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
            Get Started
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-slate-700 max-w-4xl">
            The First American Land Allotment project documents the historical distribution and changes of indigenous
            lands across North America. Our resources provide researchers, educators, and community members with tools
            to understand the complex history of land ownership, treaties, and federal policies that have shaped tribal
            territories over time. Through interactive maps, comprehensive data sets, and in-depth research, we aim to
            preserve this critical history and support indigenous communities in documenting their land rights.
          </p>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Story Maps"
              description="Explore interactive narratives that combine maps, images, and text to tell the stories of First American land allotments."
            />

            <FeatureCard
              title="Data"
              description="Access comprehensive datasets on historical land allotments, including boundaries, dates, and ownership records."
            />

            <FeatureCard
              title="Research"
              description="Discover scholarly articles, primary sources, and analysis on the history and impact of land allotment policies."
            />
          </div>
        </div>
      </section>

      {/* Story Map Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <StoryMapHighlight />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">First American Land Allotment</h3>
              <p className="text-slate-300">
                Preserving and documenting indigenous land history through interactive resources.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Story Maps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Data Downloads
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Educational Materials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <p className="text-slate-300 mb-4">
                Subscribe to our newsletter for updates on new resources and research.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-slate-800 text-white rounded-l focus:outline-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} First American Land Allotment Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

