import React from "react";
import { useNavigate } from "react-router-dom";
import ModelViewer from "../ModelViewer"; // Make sure the path is correct

const MobCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { label: "Headphones", path: "/headphone", model: "/models/headphones2.glb" },
    { label: "Earbuds", path: "/earbuds", model: "/models/earpod.glb" },
    { label: "Powerbank", path: "/powerbank", model: "/models/powerbank.glb" },
    { label: "Smart Watch", path: "/smart-watch", model: "/models/smartwatch.glb" },
    { label: "Neckband", path: "/neckband", model: "/models/neckband.glb" },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-20 p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => navigate(cat.path)}
          className="bg-white/10 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow overflow-hidden"
        >
          <div className="w-full h-full">
            <ModelViewer modelPath={cat.model} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobCategories;
