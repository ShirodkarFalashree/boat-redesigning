import React from "react";

const testimonials = [
  {
    quote:
      "Battery life is insane! I didn’t expect it to last this long. I’ve been using it constantly for music, calls, and even Netflix binges — and it still keeps going. No more running for the charger every few hours!",
    author: "Rohan Mehta",
    book: "Verified Buyer",
  },
  {
    quote:
      "The bass is just *mind-blowing*. You can literally feel every beat thumping in your ears. Whether it’s hip-hop, EDM, or even Bollywood tracks, the sound quality takes everything to the next level.",
    author: "Aarav Sharma",
    book: "Music Enthusiast",
  },
  {
    quote:
      "I work from home and take a lot of client calls, and I’m honestly impressed with how clear my voice sounds even when there's background noise. The noise cancellation is surprisingly effective for this price!",
    author: "Sneha Kulkarni",
    book: "Remote Worker",
  },
  {
    quote:
      "If you’re a mobile gamer, trust me, these are a must-have. I’ve tried them with PUBG and COD, and the low latency mode really reduces the lag — every gunshot and footstep feels real-time!",
    author: "Kunal Jadhav",
    book: "Mobile Gamer",
  },
  {
    quote:
      "The touch controls are so intuitive. Play, pause, change tracks, answer calls — all with just a tap. It feels futuristic and makes life so much easier when I’m on the move or working out.",
    author: "Ishita Rane",
    book: "College Student",
  },
  {
    quote:
      "I wasn’t sure what to expect from earbuds in this price range, but boAt totally surprised me. The build quality, the features, and the audio experience are honestly better than some premium brands I’ve used.",
    author: "Manav Desai",
    book: "Budget Buyer",
  },
  {
    quote:
      "I wear them during my workouts, and they stay in place perfectly. No falling out, no discomfort. Plus, they’re sweat-resistant — so I can focus on my routine without worrying.",
    author: "Tanvi Nair",
    book: "Fitness Enthusiast",
  },
  {
    quote:
      "The moment I open the case, it connects to my phone in seconds. No manual pairing nonsense. This seamless experience really makes a difference when I’m in a rush.",
    author: "Ankit Verma",
    book: "Tech Lover",
  },
  {
    quote:
      "I take these with me every time I travel. They cancel out just enough noise on flights or trains, and the long battery life means I can chill with my playlist or movies for hours.",
    author: "Priya Shetty",
    book: "Frequent Traveler",
  },
];

const InfiniteScrollFeedback = () => {
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
