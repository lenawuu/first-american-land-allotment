'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Dynamically import the map component to avoid SSR issues with Leaflet
const StoryMapDashboard = dynamic(
  () => import("@/components/data-dashboard/story-map-dashboard"),
  { ssr: false }
)

interface StoryMapWrapperProps {
  storyId: string
}

export default function StoryMapWrapper({ storyId }: StoryMapWrapperProps) {
  // Define dashboard filters based on story ID
  const getDashboardUrl = () => {
    const filters = new URLSearchParams()
    
    if (storyId === "dawes-act") {
      filters.append("tribe", "all")
      filters.append("landType", "Allotment")
      filters.append("startYear", "1887")
      filters.append("endYear", "1934")
    } 
    else if (storyId === "oklahoma-allotments") {
      filters.append("tribe", "Cherokee,Chickasaw,Choctaw,Creek,Seminole")
      filters.append("landType", "Allotment")
      filters.append("startYear", "1889")
      filters.append("endYear", "1907")
    }
    else if (storyId === "reservation-boundaries") {
      filters.append("landType", "Reservation")
      filters.append("startYear", "1850")
      filters.append("endYear", "1930")
    }
    else {
      // Default filters
      filters.append("startYear", "1830") 
      filters.append("endYear", "1930")
    }
    
    return `/data?${filters.toString()}`
  }

  return (
    <div className="mt-12">
      {/* <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Interactive Map</h3>
        <Link href={getDashboardUrl()}>
          <Button variant="outline" size="sm" className="flex items-center">
            <span>See in Dashboard</span>
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div> */}
      
      <Suspense fallback={
        <div className="bg-slate-100 rounded-lg p-4 h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <p className="text-slate-600">Loading map data...</p>
          </div>
        </div>
      }>
        <StoryMapDashboard storyId={storyId} />
      </Suspense>
    </div>
  )
} 