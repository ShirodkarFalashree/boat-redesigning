import React from "react";



const InfiniteScrollFeedback = ({testimonials}) => {
  return (
    <div className="relative overflow-hidden bg-[#151515] pt-20 pb-20">
      <div className=" animate-scroll flex gap-6 px-4">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-neutral-800 to-black text-white p-6 rounded-xl min-w-[400px] h-[240px] flex flex-col justify-between "
          >
            <p className="text-sm mb-4">{item.quote}</p>
            <div>
              <h4 className="text-sm text-blue-400">{item.author}</h4>
              <p className="text-sm text-blue-300">{item.book}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind CSS Keyframes */}
      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 6s linear infinite;
        }
        `}
      </style>
    </div>
  );
};

export default InfiniteScrollFeedback;
