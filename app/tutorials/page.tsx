"use client";

import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapIcon,
  SearchIcon,
  LayersIcon,
  InfoIcon,
  BookOpenIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";

export default function TutorialsPage() {
  // Colors from screenshot
  const colors = {
    cream: "#faf3d9", // Light cream/beige
    teal: "#a7ccc7", // Soft teal/aqua
    navy: "#1e3641", // Dark navy blue
    amber: "#d9b46e", // Golden amber
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: colors.cream }}
    >
      <NavBar />

      {/* Hero Section */}
      <section
        style={{ backgroundColor: colors.navy }}
        className="py-20 text-center text-white"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Land Allotment Map Tutorials
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover your ancestral connections and explore historical Native
            land allotments through our interactive mapping tools. Follow these
            comprehensive guides to uncover your heritage.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section
        style={{ backgroundColor: colors.teal }}
        className="py-8 border-b"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: colors.navy }}
          >
            Choose Your Tutorial
          </h2>
          <Tabs defaultValue="beginners" className="w-full max-w-4xl mx-auto">
            <TabsList
              className="grid w-full grid-cols-1 md:grid-cols-3"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              <TabsTrigger value="beginners" style={{ color: colors.navy }}>
                Beginners Guide
              </TabsTrigger>
              <TabsTrigger value="ancestral" style={{ color: colors.navy }}>
                Finding Ancestral Lands
              </TabsTrigger>
              <TabsTrigger value="advanced" style={{ color: colors.navy }}>
                Advanced Research
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="beginners"
              className="mt-4 text-center"
              style={{ color: colors.navy }}
            >
              Start here if you're new to our platform. Learn the basics of
              navigating our interactive map.
            </TabsContent>
            <TabsContent
              value="ancestral"
              className="mt-4 text-center"
              style={{ color: colors.navy }}
            >
              Detailed instructions for tracing family connections to historical
              land allotments.
            </TabsContent>
            <TabsContent
              value="advanced"
              className="mt-4 text-center"
              style={{ color: colors.navy }}
            >
              Techniques for cross-referencing historical records, treaties, and
              modern boundaries.
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Detailed Instructions */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: colors.navy }}
          >
            How to Navigate Our Native Land Allotment Map
          </h2>

          <div className="space-y-12">
            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <MapIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 1: Accessing the Interactive Map
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Click on the "Story Maps" option in the main navigation
                      menu at the top of the page
                    </li>
                    <li>
                      • Select "Native Land Allotment Map" from the dropdown
                      menu
                    </li>
                    <li>
                      • The interactive map will load with a default view of the
                      continental United States
                    </li>
                    <li>
                      • For best performance, use Chrome, Firefox, or Edge
                      browsers
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <LayersIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 2: Understanding Map Layers
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Find the "Map Layers" panel on the left side of your
                      screen
                    </li>
                    <li>
                      • Toggle between different historical periods using the
                      timeline slider (1830-1950)
                    </li>
                    <li>
                      • Available layers include:
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>- Dawes Act Allotments (1887-1934)</li>
                        <li>- Treaty Boundaries (1778-1871)</li>
                        <li>- Reservation Establishment Periods</li>
                        <li>- Contemporary Tribal Territories</li>
                        <li>- Historical Census Records Overlay</li>
                      </ul>
                    </li>
                    <li>
                      • Use the opacity slider to adjust layer transparency when
                      viewing multiple layers
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <SearchIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 3: Searching for Ancestral Connections
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Click on the search icon in the upper right corner of
                      the map
                    </li>
                    <li>
                      • Search by:
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>- Family name or surname</li>
                        <li>
                          - Tribal affiliation (e.g., "Cherokee," "Lakota,"
                          "Navajo")
                        </li>
                        <li>
                          - Geographic location (county, state, or region)
                        </li>
                        <li>
                          - Allotment number (if known from family records)
                        </li>
                        <li>- Treaty name or year</li>
                      </ul>
                    </li>
                    <li>
                      • The map will zoom to relevant locations matching your
                      search criteria
                    </li>
                    <li>
                      • Use quotation marks for exact phrase matches (e.g.,
                      "John Tallchief")
                    </li>
                    <li>
                      • Try alternative spellings if initial searches don't
                      yield results
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <InfoIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 4: Exploring Land Details
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Click directly on any highlighted area of the map to
                      open the information panel
                    </li>
                    <li>
                      • The information panel provides:
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>
                          - Original allotment details (date, acreage, legal
                          description)
                        </li>
                        <li>
                          - Name of original allottee and tribal affiliation
                        </li>
                        <li>- Historical photographs (when available)</li>
                        <li>- Land status changes over time</li>
                        <li>- Links to digitized original documents</li>
                      </ul>
                    </li>
                    <li>
                      • Use the "Related Allotments" tab to see family
                      connections and neighboring parcels
                    </li>
                    <li>
                      • Toggle between "Historical View" and "Modern View" to
                      see how boundaries have changed
                    </li>
                    <li>
                      • Click "Save to Research" to bookmark this location for
                      later reference
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <BookOpenIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 5: Accessing Historical Records
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • From any allotment information panel, click "View Source
                      Documents"
                    </li>
                    <li>
                      • Available historical records may include:
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>- Original allotment certificates</li>
                        <li>- Land survey maps and field notes</li>
                        <li>- Census rolls and enrollment documents</li>
                        <li>
                          - Correspondence between agents and tribal members
                        </li>
                        <li>- Historical photographs of the region</li>
                      </ul>
                    </li>
                    <li>
                      • Use the document viewer to zoom, rotate, and examine
                      details
                    </li>
                    <li>
                      • Click "Download" to save high-resolution copies for your
                      research
                    </li>
                    <li>
                      • Note: Some documents require free registration to access
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>

            <Card
              className="shadow-md overflow-hidden"
              style={{ borderColor: colors.teal }}
            >
              <div className="md:flex">
                <div
                  className="md:w-1/4 flex justify-center items-center p-6"
                  style={{ backgroundColor: colors.teal }}
                >
                  <UserIcon size={64} style={{ color: colors.navy }} />
                </div>
                <CardContent className="p-6 md:w-3/4">
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.navy }}
                  >
                    Step 6: Creating Your Ancestral Profile
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Click "My Ancestry" in the top navigation menu</li>
                    <li>
                      • Select "Create New Profile" to start documenting your
                      connections
                    </li>
                    <li>
                      • Add discovered allotments to your family tree by
                      clicking "Add to Profile" from any information panel
                    </li>
                    <li>
                      • Upload additional family documents and photographs to
                      enhance your research
                    </li>
                    <li>
                      • Connect with others researching the same allotments or
                      family names
                    </li>
                    <li>
                      • Generate and download custom reports showing your
                      ancestral land connections
                    </li>
                    <li>
                      • Share your findings with family members via email or
                      social media
                    </li>
                  </ul>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section style={{ backgroundColor: colors.teal }} className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: colors.navy }}
          >
            Tips & Troubleshooting
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              style={{ borderColor: colors.cream, backgroundColor: "white" }}
            >
              <CardContent className="p-6">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: colors.navy }}
                >
                  For Better Search Results
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Start with broader searches, then narrow down</li>
                  <li>• Consider name variations and phonetic spellings</li>
                  <li>
                    • Search by location if family names aren't yielding results
                  </li>
                  <li>• Use the Advanced Search to filter by time period</li>
                  <li>
                    • Check tribal rolls first if you know your ancestral tribe
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              style={{ borderColor: colors.cream, backgroundColor: "white" }}
            >
              <CardContent className="p-6">
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: colors.navy }}
                >
                  Common Challenges
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Map not loading: Try clearing your browser cache</li>
                  <li>
                    • Missing records: Not all allotments have digitized
                    documents
                  </li>
                  <li>
                    • Name discrepancies: Check for anglicized versions of names
                  </li>
                  <li>
                    • Boundary disputes: Some territories have overlapping
                    claims
                  </li>
                  <li>
                    • Slow performance: Reduce the number of active map layers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="container mx-auto px-4 py-16">
        <h2
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: colors.navy }}
        >
          Video Tutorials
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card style={{ borderColor: colors.teal }}>
            <div className="aspect-[16/12] bg-gray-200 flex items-end justify-items-end w-full relative mb-6 sm:mb-0 overflow-hidden rounded-t-sm">
              <Image
                src="/tutorials/beginner.png"
                alt="Beginner's Guide Video Thumbnail"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold" style={{ color: colors.navy }}>
                Getting Started (7:15)
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Basic navigation and first-time user orientation
              </p>
            </CardContent>
          </Card>

          <Card style={{ borderColor: colors.teal }}>
            <div className="aspect-[16/12] bg-gray-200 flex items-end justify-items-end w-full relative mb-6 sm:mb-0 overflow-hidden rounded-t-sm">
              <Image
                src="/tutorials/ancestory.png"
                alt="Finding Family Connections Thumbnail"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold" style={{ color: colors.navy }}>
                Finding Family Connections (12:43)
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Advanced search techniques for ancestral research
              </p>
            </CardContent>
          </Card>

          <Card style={{ borderColor: colors.teal }}>
            <div className="aspect-[16/12] bg-gray-200 flex items-end justify-items-end w-full relative mb-6 sm:mb-0 overflow-hidden rounded-t-sm">
              <Image
                src="/tutorials/documents.png"
                alt="Document Analysis Thumbnail"
                fill
                className="object-cover object-top"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold" style={{ color: colors.navy }}>
                Understanding Documents (9:21)
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                How to interpret historical allotment records
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            style={{
              backgroundColor: colors.amber,
              color: colors.navy,
              borderColor: colors.navy,
            }}
            className="hover:opacity-90"
          >
            View Full Video Library
          </Button>
        </div>
      </section>

      {/* Community Support */}
      <section
        style={{ backgroundColor: colors.navy }}
        className="py-16 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Additional Help?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our community of researchers and tribal knowledge keepers are here
            to support your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              style={{
                backgroundColor: colors.cream,
                color: colors.navy,
                borderColor: colors.amber,
              }}
              className="hover:opacity-90"
            >
              Join Community Forum
            </Button>
            <Button
              variant="default"
              style={{ backgroundColor: colors.amber, color: colors.navy }}
              className="hover:opacity-90"
            >
              Schedule 1:1 Research Help
            </Button>
            <Button
              variant="outline"
              style={{
                backgroundColor: colors.cream,
                color: colors.navy,
                borderColor: colors.amber,
              }}
              className="hover:opacity-90"
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
