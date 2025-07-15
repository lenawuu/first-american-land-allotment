'use client'

import { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapDashboard() {
  // Mock GeoJSON data
  const geoJSONdata: GeoJSON.FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Cherokee Nation",
          year: 1866,
          tribe: "Cherokee",
          landType: "Treaty Territory",
          acres: 7500000,
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
          name: "Navajo Reservation",
          year: 1868,
          tribe: "Navajo",
          landType: "Reservation",
          acres: 16000000,
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-110.5, 36.0],
              [-109.5, 36.0],
              [-109.5, 37.0],
              [-110.5, 37.0],
              [-110.5, 36.0],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Lakota Territory",
          year: 1851,
          tribe: "Lakota",
          landType: "Traditional Territory",
          acres: 20000000,
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-104.5, 43.0],
              [-103.5, 43.0],
              [-103.5, 44.0],
              [-104.5, 44.0],
              [-104.5, 43.0],
            ],
          ],
        },
      }
    ]
  };

  // Filter selections
  const [selectedTribe, setSelectedTribe] = useState("all");
  const [selectedLandType, setSelectedLandType] = useState("all");
  const [timeRangeStart, setTimeRangeStart] = useState(1830);
  const [timeRangeEnd, setTimeRangeEnd] = useState(1930);
  
  // Displayed data state (separate from filter selections)
  const [filteredData, setFilteredData] = useState<GeoJSON.FeatureCollection>({
    type: "FeatureCollection",
    features: geoJSONdata.features
  });
  
  // Track if the map has been refreshed with new filters
  const [mapKey, setMapKey] = useState(Date.now());
  
  // Lists for filter options
  const tribes = ["Cherokee", "Navajo", "Lakota", "Choctaw", "Creek", "Seminole"];
  const landTypes = ["Treaty Territory", "Reservation", "Traditional Territory", "Allotment", "Ceded Land"];

  const mapRef = useRef(null);

  // Apply filters when Apply Filters button is clicked
  const handleApplyFilters = () => {
    console.log(`Applying filters: Tribe=${selectedTribe}, LandType=${selectedLandType}, Years=${timeRangeStart}-${timeRangeEnd}`);
    
    // Reset any current data
    const filtered: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: geoJSONdata.features.filter(feature => {
        const properties = feature.properties;
        const tribeMatch = selectedTribe === "all" || properties.tribe === selectedTribe;
        const landTypeMatch = selectedLandType === "all" || properties.landType === selectedLandType;
        const yearMatch = properties.year >= timeRangeStart && properties.year <= timeRangeEnd;
        
        return tribeMatch && landTypeMatch && yearMatch;
      })
    };
    
    // Force map to refresh by updating the key
    setMapKey(Date.now());
    setFilteredData(filtered);
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedTribe("all");
    setSelectedLandType("all");
    setTimeRangeStart(1830);
    setTimeRangeEnd(1930);
    
    // Immediately apply the reset
    setFilteredData({
      type: "FeatureCollection",
      features: geoJSONdata.features
    });
    
    // Force map to refresh
    setMapKey(Date.now());
  };

  const onEachFeature = (feature, layer) => {
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
  
  return (
    <div className="bg-cream/50 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-white border-b">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="w-full md:w-1/5">
            <label className="block text-sm font-medium text-teal mb-1">Tribe</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
              value={selectedTribe}
              onChange={(e) => setSelectedTribe(e.target.value)}
            >
              <option value="all">All Tribes</option>
              {tribes.map(tribe => (
                <option key={tribe} value={tribe}>{tribe}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-1/5">
            <label className="block text-sm font-medium text-teal mb-1">Land Type</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
              value={selectedLandType}
              onChange={(e) => setSelectedLandType(e.target.value)}
            >
              <option value="all">All Land Types</option>
              {landTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-medium text-teal mb-1">
              Time Period: {timeRangeStart} - {timeRangeEnd}
            </label>
            <div className="flex space-x-4 items-center">
              <input
                type="number"
                min="1830"
                max={timeRangeEnd}
                value={timeRangeStart}
                onChange={(e) => {
                  const value = Math.max(1830, Math.min(timeRangeEnd, Number(e.target.value)));
                  setTimeRangeStart(value);
                }}
                className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
              />
              <span>to</span>
              <input
                type="number"
                min={timeRangeStart}
                max="1930"
                value={timeRangeEnd}
                onChange={(e) => {
                  const value = Math.max(timeRangeStart, Math.min(1930, Number(e.target.value)));
                  setTimeRangeEnd(value);
                }}
                className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
              />
            </div>
          </div>
          
          <div className="w-full md:w-auto mt-8 md:mt-6 flex space-x-3">
            <button 
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-teal text-white rounded-md hover:bg-teal/80 transition-colors focus:outline-none focus:ring-2 focus:ring-teal"
            >
              Apply Filters
            </button>
            <button 
              onClick={resetFilters}
              className="px-4 py-2 border border-teal text-teal rounded-md hover:bg-teal hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      
      <div className="col-span-3 h-[600px] relative">
        {typeof window !== "undefined" && (
          <MapContainer
            key={`map-container-${mapKey}`}
            center={[39.8283, -98.5795]}
            zoom={4}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredData && (
              <GeoJSON 
                key={`map-data-${mapKey}`}
                data={filteredData} 
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
      
      <div className="p-4 bg-white border-t">
        <div className="text-sm text-teal/80">
          <p><strong>Current Filter:</strong> Showing data for 
            {selectedTribe === "all" ? " all tribes" : ` the ${selectedTribe} tribe`}, 
            {selectedLandType === "all" ? " all land types" : ` ${selectedLandType} lands`}, 
            between {timeRangeStart} and {timeRangeEnd}.
            {filteredData.features.length === 0 && " (No matching data found)"}
          </p>
        </div>
      </div>
    </div>
  );
}