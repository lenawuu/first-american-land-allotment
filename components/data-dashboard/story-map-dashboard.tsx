'use client'

import { useRef, useState, useEffect } from "react";
import { type GeoJsonObject, type FeatureCollection } from "geojson";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface StoryMapDashboardProps {
  storyId: string;
}

export default function StoryMapDashboard({ storyId }: StoryMapDashboardProps) {
  // Sample GeoJSON data - in a real app, this would be specific to each story map
  const storyMapGeoJSON: Record<string, FeatureCollection> = {
    "dawes-act": {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Cherokee Allotments",
            year: 1902,
            tribe: "Cherokee",
            landType: "Allotment",
            acres: 75000,
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-95.5, 35.0],
                [-94.5, 35.0],
                [-94.5, 36.0],
                [-95.5, 36.0],
                [-95.5, 35.0],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Kiowa-Comanche-Apache Reservation",
            year: 1900,
            tribe: "Kiowa-Comanche-Apache",
            landType: "Reservation",
            acres: 3000000,
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-99.5, 34.0],
                [-98.5, 34.0],
                [-98.5, 35.0],
                [-99.5, 35.0],
                [-99.5, 34.0],
              ],
            ],
          },
        }
      ]
    },
    "oklahoma-allotments": {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Chickasaw Allotments",
            year: 1904,
            tribe: "Chickasaw",
            landType: "Allotment",
            acres: 45000,
          },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-97.5, 34.0],
                [-96.5, 34.0],
                [-96.5, 35.0],
                [-97.5, 35.0],
                [-97.5, 34.0],
              ],
            ],
          },
        }
      ]
    }
  };

  // Get the correct GeoJSON data for this story
  const mapData: GeoJsonObject = storyMapGeoJSON[storyId as keyof typeof storyMapGeoJSON] || {
    type: "FeatureCollection",
    features: []
  };
  
  const mapRef = useRef(null);

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties) {
      layer.bindPopup(`
        <strong>${feature.properties.name}</strong><br/>
        Tribe: ${feature.properties.tribe}<br/>
        Land Type: ${feature.properties.landType}<br/>
        Year: ${feature.properties.year}<br/>
        Area: ${feature.properties.acres.toLocaleString()} acres
      `);
    }
  };
  
  // Determine map center based on story ID
  const getMapCenter = (): [number, number] => {
    if (storyId === "dawes-act") return [35.5, -97.0]; // Center on Oklahoma
    if (storyId === "oklahoma-allotments") return [35.0, -97.0]; // Center on Oklahoma
    return [39.8283, -98.5795]; // Default US center
  };
  
  return (
    <div className="bg-cream/50 rounded-lg shadow-md overflow-hidden">
      <div className="h-[400px] relative">
        {typeof window !== "undefined" && (
          <MapContainer
            center={getMapCenter()}
            zoom={6}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapData && (
              <GeoJSON 
                data={mapData} 
                style={{ 
                  color: "#16404D", 
                  fillColor: "#16404D", 
                  weight: 1, 
                  opacity: 0.8, 
                  fillOpacity: 0.4 
                }}  
                onEachFeature={onEachFeature}
              />
            )}
            <ZoomControl position="bottomright" />
          </MapContainer>
        )}
      </div>
      
      <div className="p-3 bg-white border-t text-sm text-teal/80">
        <p>
          <strong>Map Legend:</strong> Showing allotment boundaries and reservation lands affected by the 
          {storyId === "dawes-act" ? " Dawes Act" : storyId === "oklahoma-allotments" ? " Oklahoma land allotments" : " allotment policies"}.
        </p>
      </div>
    </div>
  );
} 