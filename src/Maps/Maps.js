import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import "leaflet/dist/leaflet.css";


const WORLDWIDE_URL = "https://disease.sh/v3/covid-19/all";
const COUNTRIES_URL = "https://disease.sh/v3/covid-19/countries";
const HISTORICAL_URL = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

function formatNumber(num) {
  return num.toLocaleString();
}

function Dashboard() {
  const { data: worldwideData } = useQuery("worldwideData", async () => {
    const response = await fetch(WORLDWIDE_URL);
    return response.json();
  });

  const { data: countriesData } = useQuery("countriesData", async () => {
    const response = await fetch(COUNTRIES_URL);
    return response.json();
  });

  const { data: historicalData } = useQuery("historicalData", async () => {
    const response = await fetch(HISTORICAL_URL);
    return response.json();
  });

  if (!worldwideData || !countriesData || !historicalData) {
    return <div>Loading...</div>;
  }

  Chart.register(...registerables);

  const countryMarkers = countriesData.map((countryData) => (
    <Marker
      key={countryData.country}
      position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
    >
      <Popup>
        <div className="popup-content">
          <h2>{countryData.country}</h2>
          <p>Active: {formatNumber(countryData.active)}</p>
          <p>Recovered: {formatNumber(countryData.recovered)}</p>
          <p>Deaths: {formatNumber(countryData.deaths)}</p>
        </div>
      </Popup>
    </Marker>
  ));

  const casesData = Object.entries(historicalData.cases).map(([date, cases]) => ({
    x: new Date(date),
    y: cases,
  }));

  const lineData = {
    datasets: [
      {
        label: "Cases",
        data: casesData,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions = {


    scales: {
      x: {
        type: 'time',
        time: {
          parser: 'MM/DD/YYYY',
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Cases'
        }
      }
    }
  }; return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Worldwide Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="data-card text-center">
            <h3 className="text-lg font-bold">Total Cases</h3>
            <p className="text-2xl font-bold text-red-500">{formatNumber(worldwideData.cases)}</p>
          </div>
          <div className="data-card text-center">
            <h3 className="text-lg font-bold">Recovered</h3>
            <p className="text-2xl font-bold text-green-500">{formatNumber(worldwideData.recovered)}</p>
          </div>
          <div className="data-card text-center">
            <h3 className="text-lg font-bold">Deaths</h3>
            <p className="text-2xl font-bold text-gray-500">{formatNumber(worldwideData.deaths)}</p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Cases Over Time</h2>
        <Line data={lineData} options={lineOptions} />
      </div>


    </div >
  );
}

export default Dashboard;