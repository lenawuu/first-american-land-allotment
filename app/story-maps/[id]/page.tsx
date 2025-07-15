import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/nav-bar"
import { ArrowLeft, Calendar, Share2, Download, MapPin } from "lucide-react"
import StoryMapWrapper from "@/components/story-map-wrapper"

// Sample story map data - in a real app, this would come from a database or API
const storyMaps = {
  "dawes-act": {
    title: "The Dawes Act and Its Impact",
    description: "Explore how the 1887 Dawes Act transformed indigenous land ownership across America.",
    image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "February 2023",
    author: "Dr. Sarah Johnson",
    content: `
      <p>The General Allotment Act of 1887, commonly known as the Dawes Act, was one of the most significant pieces of legislation affecting Native American land rights in United States history. Named after its sponsor, Senator Henry L. Dawes of Massachusetts, the act authorized the President of the United States to survey Native American tribal land and divide it into allotments for individual Native Americans.</p>
      
      <p>The stated objective of the Dawes Act was to assimilate Native Americans into mainstream American society by encouraging them to take up farming and abandon their traditional communal way of life. However, the act had devastating consequences for Native American communities and their land holdings.</p>
      
      <h3>Key Provisions of the Dawes Act</h3>
      
      <ul>
        <li>Each family head would receive 160 acres (65 hectares)</li>
        <li>Each single person over 18 and orphan under 18 would receive 80 acres (32 hectares)</li>
        <li>Each other single person under 18 would receive 40 acres (16 hectares)</li>
        <li>Land would be held in trust by the government for 25 years</li>
        <li>"Surplus" land would be sold to non-Native settlers</li>
      </ul>
      
      <p>The implementation of the Dawes Act led to a significant reduction in land held by Native Americans. Before the act, Native Americans held approximately 138 million acres. By 1934, when the allotment policy ended with the Indian Reorganization Act, Native American land holdings had been reduced to about 48 million acres—a loss of nearly 90 million acres.</p>
    `,
    locations: ["North Dakota", "South Dakota", "Oklahoma", "Montana", "Washington"],
    relatedStoryMaps: ["oklahoma-allotments", "reservation-boundaries", "allotment-legacy"]
  },
  "oklahoma-allotments": {
    title: "Oklahoma Land Allotments",
    description: "A detailed look at the allotment of tribal lands in Oklahoma Territory.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
    date: "November 2022",
    author: "Prof. Michael White",
    content: `
      <p>The allotment of tribal lands in Oklahoma represents one of the most extensive applications of the Dawes Act and subsequent allotment policies. Between 1889 and 1907, the federal government oversaw the division of communally held tribal lands in Indian Territory (present-day Oklahoma) into individual allotments.</p>
      
      <p>This process was particularly significant in Oklahoma due to the concentration of Native American tribes that had been relocated there during the earlier Removal Era. The Five Civilized Tribes (Cherokee, Chickasaw, Choctaw, Creek, and Seminole) initially were exempt from the Dawes Act, but were later subjected to allotment through the Curtis Act of 1898.</p>
      
      <h3>The Oklahoma Land Runs</h3>
      
      <p>A distinctive feature of Oklahoma's allotment history was the series of land runs that opened "surplus" lands to non-Native settlement. The first and most famous land run occurred on April 22, 1889, when approximately 50,000 people lined up at the borders of the Unassigned Lands to race for claims.</p>
      
      <p>These dramatic events fundamentally altered the demographic and cultural landscape of Oklahoma, transforming what had been designated as Indian Territory into a predominantly non-Native settlement within a remarkably short period.</p>
    `,
    locations: ["Oklahoma"],
    relatedStoryMaps: ["dawes-act", "tribal-sovereignty", "allotment-legacy"]
  },
  // Additional story maps would be defined here
}

export type paramsType = Promise<{ id: string }>;

export default async function StoryMapPage({ params }: { params: paramsType }) {

  const { id } = await params;

  const storyMap = storyMaps[id as keyof typeof storyMaps]
  
  // Handle case where story map doesn't exist
  if (!storyMap) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Story Map Not Found</h1>
          <p className="mb-8">The story map you're looking for doesn't exist or has been removed.</p>
          <Link href="/story-maps">
            <Button>Return to Story Maps</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-slate-700">
          {/* Gray background instead of image */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4">
          <Link href="/story-maps" className="inline-flex items-center text-white mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Story Maps
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{storyMap.title}</h1>
          <p className="text-xl max-w-3xl mb-6 text-white/90">{storyMap.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{storyMap.date}</span>
            </div>
            <div className="flex items-center">
              <span>By {storyMap.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Map Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: storyMap.content }}></div>
              
              {/* Use the client component wrapper */}
              <StoryMapWrapper storyId={id} />
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Action Buttons */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Share and Download</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Story Map
                  </Button>
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download Data
                  </Button>
                </div>
              </div>
              
              {/* Locations */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {storyMap.locations.map((location) => (
                    <span key={location} className="bg-slate-200 px-3 py-1 rounded-full text-sm">
                      {location}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Related Story Maps */}
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Related Story Maps</h3>
                <ul className="space-y-3">
                  {storyMap.relatedStoryMaps.map((id) => {
                    const related = storyMaps[id as keyof typeof storyMaps]
                    return (
                      <li key={id}>
                        <Link href={`/story-maps/${id}`} className="text-primary hover:underline">
                          {related?.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 