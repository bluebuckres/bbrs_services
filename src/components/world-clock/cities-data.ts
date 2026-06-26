export interface CityData {
  id: string;
  name: string;
  tz: string; // IANA Timezone string
  lat: number;
  lng: number;
  isReference?: boolean;
}

export const CITIES: CityData[] = [
  {
    id: "kolkata",
    name: "Kolkata",
    tz: "Asia/Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    isReference: true,
  },
  {
    id: "london",
    name: "London",
    tz: "Europe/London",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "dubai",
    name: "Dubai",
    tz: "Asia/Dubai",
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    id: "losangeles",
    name: "Los Angeles",
    tz: "America/Los_Angeles",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: "singapore",
    name: "Singapore",
    tz: "Asia/Singapore",
    lat: 1.3521,
    lng: 103.8198,
  },
];
