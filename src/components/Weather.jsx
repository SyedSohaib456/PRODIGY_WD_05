import React, { useState, useEffect } from "react";
import weatherData from "../data"; 
import "../styles/Weather.css"; 
import { FaSun, FaCloud } from "react-icons/fa";
import { IoRainy } from "react-icons/io5";
import { WiStrongWind } from "react-icons/wi";
import { Container, Box, Heading } from "@chakra-ui/react";
import { FaDroplet } from "react-icons/fa6";
import { BsThermometerSun } from "react-icons/bs";
import Loader from '../components/Loader';

const Weather = ({ country }) => {
  const [data, setData] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (country && typeof country === "string") {
        const countryData = weatherData.find(
          (item) => item.country.toLowerCase() === country.toLowerCase()
        );
        setLoading(true);
        setTimeout(() => {
          setData(countryData);
          setLoading(false);
        },1000 );
      } else {
        setData(null);
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  useEffect(() => {
    if (data) {
      if (data.condition === "Sunny") {
        setIcon(<FaSun className="text-yellow-400" />);
      } else if (data.condition === "Partly Cloudy") {
        setIcon(
          <div style={{ position: "relative", width: "40px", height: "40px" }}>
            <FaSun
              style={{
                position: "absolute",
                top: "10%",
                left: "0%",
                width: "60%",
                height: "60%",
                color: "#fbbf24",
                zIndex: 1,
              }}
            />
            <FaCloud
              style={{
                position: "absolute",
                top: "20%",
                left: "30%",
                width: "70%",
                height: "70%",
                color: "#9ca3af",
                zIndex: 2,
              }}
            />
          </div>
        );
      } else if (data.condition === "Rainy") {
        setIcon(<IoRainy className="text-gray-600" />);
      }
    }
  }, [data]);

  return (
    <Container 
      minW="100vw"
      minH="100vh"
      className="weather-container flex justify-center items-center"
      centerContent
    >
      {loading ? (
        <Loader />
      ) : data ? (
        <Box
          className="box flex flex-col justify-center items-center mb-9"
          padding="4"
          minW={["90%", "md", "lg", "lg"]} 
        >
          <Box w={'100%'} className="flex justify-center items-center align-middle mb-4">
            <Heading textAlign={'center'}>{data.country}</Heading>
            <img
              width={'100px'}
              src={data.flag}
              alt={`${data.country} flag`}
              style={{ maxHeight: 'sm', marginLeft: '10px' }}
            />
          </Box>
          <Box>
            <p className="flex justify-start items-center align-middle space-x-1">
              <strong >Temperature:</strong> {data.temperature}°C{" "}
              <BsThermometerSun className="text-md text-red-300" />
            </p>
            <p className="flex justify-start items-center space-x-1">
              <strong>Condition:</strong> {data.condition} {icon}
            </p>
            <p className="flex justify-start items-center space-x-1">
              <strong>Humidity: </strong> {data.humidity}%{" "}
              <FaDroplet className="text-md text-blue-300" />
            </p>
            <p className="flex justify-start items-center space-x-1">
              <strong>Wind Speed:</strong> {data.windSpeed} km/h{" "}
              <WiStrongWind className="text-xl text-blue-300" />
            </p>
          </Box>
        </Box>
      ) : (
        <p>No data found for the selected country.</p>
      )}
    </Container>
  );
};

export default Weather;
