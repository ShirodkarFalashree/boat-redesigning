import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import ModelViewer from "../ModelViewer";

const LapCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-black h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Logo at the top */}
      <div className="mb-8">
        <div className="w-[120px] h-[120px] rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center border border-indigo-500/30">
          <img src={logo} alt="Logo" className="w-3/4 h-3/4 object-contain" />
        </div>
      </div>

      {/* Horizontal row of categories */}
      <div className="flex justify-center items-center space-x-6">
        <CategoryItem
          modelPath="/models/headphones2.glb"
          onClick={() => navigate("/headphone")}
        />
        <CategoryItem
          modelPath="/models/smartwatch.glb"
          onClick={() => navigate("/smart-watch")}
        />
        <CategoryItem
          modelPath="/models/earpod.glb"
          onClick={() => navigate("/earbuds")}
        />
        <CategoryItem
          modelPath="/models/powerbank2.glb"
          onClick={() => navigate("/powerbank")}
        />
        <CategoryItem
          modelPath="/models/neckband.glb"
          onClick={() => navigate("/neckband")}
        />
      </div>
    </div>
  );
};

const CategoryItem = ({ modelPath, onClick }) => {
  return (
    <div
      className="w-[220px] h-[220px] rounded-full bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center overflow-hidden border border-indigo-400/20 hover:border-indigo-400/50 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-[180px] h-[180px]">
        <ModelViewer modelPath={modelPath} />
      </div>
    </div>
  );
};

export default LapCategories;