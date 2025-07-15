import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Map,
  Search,
  Database,
  ArrowRight,
} from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-muted">
      <NavBar />

      {/* Hero Section */}
      <header className="relative py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
              Research Resources
            </h1>
            <div className="h-1 w-20 bg-accent mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-cream/90 max-w-2xl">
              Explore primary documents, maps, and academic research on First
              American land allotments.
            </p>
          </div>
        </div>
      </header>

      {/* Documents Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-earth text-center">
            Research Collections
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>

          {/* Documents Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-earth">
              Historical Documents
            </h3>
            <p className="text-earth/80 mb-6">
              Browse thousands of digitized historical documents including
              allotment certificates, treaty texts, and government
              correspondence from 1830 to 1934.
            </p>
            <Link href="/research/documents">
              <Button className="bg-accent text-cream hover:bg-accent/90 group">
                Browse Document Archive
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-earth text-center">
            Featured Collections
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-muted shadow-md overflow-hidden">
              <div className="h-auto w-full bg-muted relative">
                <img
                  src="https://placehold.co/400x200?text=Dawes+Rolls+Collection"
                  alt="Dawes Rolls Collection"
                  className="object-cover w-full"
                />
                <div className="absolute top-0 right-0 m-3 px-3 py-1 rounded bg-accent text-cream text-sm font-semibold">
                  1887-1914
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-earth">
                  Dawes Rolls Collection
                </h3>
                <p className="text-earth mb-4">
                  Comprehensive digital archive of the Dawes Rolls, the official
                  census of the Five Civilized Tribes used to allocate land
                  during the allotment era.
                </p>
                <div className="flex items-center text-sm text-earth mb-4">
                  <Database className="w-4 h-4 mr-1" />
                  <span>112,476 records</span>
                </div>
                <Link href="/research/dawes-rolls">
                  <Button className="w-full bg-primary text-cream hover:bg-primary/90 group">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted shadow-md overflow-hidden">
              <div className="h-auto w-full bg-muted relative">
                <img
                  src="https://placehold.co/400x200?text=Tribal+Territory+Maps"
                  alt="Tribal Territory Maps"
                  className="object-cover w-full"
                />
                <div className="absolute top-0 right-0 m-3 px-3 py-1 rounded bg-accent text-cream text-sm font-semibold">
                  1830-1920
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-earth">
                  Tribal Territory Maps
                </h3>
                <p className="text-earth mb-4">
                  Historical cartographic collection showing changing tribal
                  territories over time, from pre-removal boundaries through
                  reservation creation and allotment periods.
                </p>
                <div className="flex items-center text-sm text-earth mb-4">
                  <Map className="w-4 h-4 mr-1" />
                  <span>4,872 maps</span>
                </div>
                <Link href="/research/territory-maps">
                  <Button className="w-full bg-primary text-cream hover:bg-primary/90 group">
                    View Map Archive
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Tools */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-earth text-center">
            Research Tools
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-md bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-earth">
                  Advanced Search
                </h3>
                <p className="text-earth/80 mb-4">
                  Multi-collection search tool with filters for document type,
                  date range, location, tribal affiliation, and individual
                  names.
                </p>
                <Link href="/research/search">
                  <Button className="w-full bg-accent text-cream hover:bg-accent/90">
                    Search Collections
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-md bg-white">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-copper/20 flex items-center justify-center mb-4">
                  <Map className="w-6 h-6 text-copper" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-earth">
                  Interactive Map Viewer
                </h3>
                <p className="text-earth/80 mb-4">
                  Interactive tool for viewing and comparing historical maps
                  with modern boundaries and satellite imagery.
                </p>
                <Link href="/research/map-viewer">
                  <Button className="w-full bg-accent text-cream hover:bg-accent/90">
                    Open Map Viewer
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Card */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-accent max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-earth mb-3">
                  Need Research Help?
                </h3>
                <p className="text-earth/80">
                  Our research guides provide step-by-step assistance for
                  finding and using historical records.
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <Link href="/research/guides" className="inline-flex">
                  <Button className="bg-accent hover:bg-accent/90 text-cream group whitespace-nowrap">
                    View Research Guides
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
