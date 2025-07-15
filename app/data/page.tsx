import NavBar from "@/components/nav-bar";
import MapDashboard from "@/components/data-dashboard/map-dashboard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DataPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />

      {/* Header Section - Styled like the hero but smaller */}
      <header className="relative py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
              Land Allotment Data
            </h1>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl">
              Explore historical data on First American land allotments,
              treaties, and territorial changes.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Introduction Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-earth">
                Interactive Data Explorer
              </h2>
              <p className="text-earth/80 text-lg mb-8">
                Use the interactive map to explore land allotment data. Filter
                by tribe, time period, or land type. You can also annotate the
                map and download data for your research.
              </p>

              {/* Info Card */}
              <div className="bg-slate-50 p-6 rounded-xl shadow-md mb-8 border-l-4 border-accent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-earth mb-3">
                      Need Help?
                    </h3>
                    <p className="text-earth/80">
                      Our tutorials provide step-by-step guidance on using all
                      our research tools and resources.
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <Link href="/tutorials" className="inline-flex">
                      <Button size="lg" className="px-4 py-2 bg-teal text-white rounded-md hover:bg-teal/80 transition-colors focus:outline-none focus:ring-2 focus:ring-teal">
                        View Tutorials
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Dashboard Section */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <MapDashboard />
            </div>
          </div>
        </section>

        {/* Information Cards Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-earth text-center">
              Data Resources
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Understanding the Data Card */}
              <div className="bg-muted p-8 rounded-xl shadow-md border border-secondary/20">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-earth mb-4">
                  Understanding the Data
                </h3>
                <p className="text-earth mb-6">
                  The data presented in this dashboard represents historical
                  records of land allotments, treaties, and territorial changes
                  affecting First American nations from 1830 to 1930.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium text-earth mb-3">
                    Filter Categories Explained
                  </h4>
                  <ul className="text-earth space-y-3">
                    <li className="flex items-start">
                      <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>
                        <strong className="text-earth">Tribe:</strong> Filter by
                        specific tribal nations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>
                        <strong className="text-earth">Land Type:</strong>{" "}
                        Filter by categories such as treaty territories,
                        reservations, allotments, or ceded lands
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>
                        <strong className="text-earth">Time Period:</strong>{" "}
                        Filter by year range to see changes over time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Research Applications Card */}
              <div className="bg-muted p-8 rounded-xl shadow-md border border-copper/20">
                <div className="bg-copper/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-copper"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-earth mb-4">
                  Research Applications
                </h3>
                <p className="text-earth mb-6">
                  This data can be used for various research purposes, including
                  historical analysis, legal research, genealogy, and
                  educational initiatives.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-earth mb-2">
                      Citation Guidelines
                    </h4>
                    <p className="text-earth bg-white p-4 rounded-lg border border-copper/10">
                      When using this data in your research, please cite the
                      First American Land Allotment Project and relevant primary
                      sources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth mb-2">
                      Data Limitations
                    </h4>
                    <p className="text-earth bg-white p-4 rounded-lg border border-copper/10">
                      This data represents our best understanding based on
                      available historical records, which may be incomplete or
                      contain inaccuracies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
