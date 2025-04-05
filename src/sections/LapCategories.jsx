import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const LapCategories = () => {
  const navigate = useNavigate();

  return (
    // <div className="relative bg-[radial-gradient(circle,_rgba(139,130,88,1)_0%,_rgba(41,86,89,1)_57%,_rgba(0,0,0,1)_98%)] h-screen flex items-center justify-center overflow-hidden">
    <div className="relative bg-red-300 h-screen flex items-center justify-center overflow-hidden">
      {/* Rotating flower wrapper */}
      <div className="relative w-[600px] h-[600px]">
        {/* Center Circle (non-rotating) */}
        <div className="w-[150px] h-[150px] rounded-full items-center flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
          <img src={logo} alt="" />
        </div>

        {/* 5 Petals - these will rotate with the wrapper */}

        <div
          onClick={() => navigate("/headphone")}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2"
        >
          <CategoryCircle label="Headphones" />
        </div>

        <div
          onClick={() => navigate("/smart-watch")}
          className="absolute top-[40%] left-[90%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <CategoryCircle label="Smart Watch"  />
        </div>

        <div
          onClick={() => navigate("/earbuds")}
          className="absolute -bottom-6 left-[70%] transform -translate-x-1/2"
        >
          <CategoryCircle label="Earpods"  />
        </div>

        <div
          onClick={() => navigate("/powerbank")}
          className="absolute -bottom-6 left-[25%] transform -translate-x-1/2"
        >
          <CategoryCircle label="Powerbank"  />
        </div>

        <div
          onClick={() => navigate("/neckband")}
          className="absolute top-[40%] left-[10%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <CategoryCircle label="Neckband"  />
        </div>
      </div>
    </div>
  );
};

// Reusable Petal
const CategoryCircle = ({ label }) => {
  return (
    <div
      className={`w-[250px] h-[250px] rounded-full bg-transparent border border-white  cursor-pointer hover:shadow-white  font-semibold flex items-center justify-center shadow-lg`}
    >
      {label}
    </div>
  );
};

export default LapCategories;
