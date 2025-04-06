import React from "react";
import { useNavigate } from "react-router-dom";
const MobCategories = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-20 p-6 bg-red-300">
      <div
        onClick={() => navigate("/headphone")}
        className="bg-pink-100 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow"
      >
        Headphones
      </div>
      <div
        onClick={() => navigate("/earbuds")}
        className="bg-pink-100 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow"
      >
        earbuds
      </div>
      <div
        onClick={() => navigate("/powerbank")}
        className="bg-pink-100 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow"
      >
        powerbank
      </div>
      <div
        onClick={() => navigate("/smart-watch")}
        className="bg-pink-100 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow"
      >
        smart watch{" "}
      </div>
      <div
        onClick={() => navigate("/neckband")}
        className="bg-pink-100 w-[320px] h-[320px] text-center flex items-center justify-center rounded-full shadow"
      >
        neckband
      </div>
    </div>
  );
};

export default MobCategories;
