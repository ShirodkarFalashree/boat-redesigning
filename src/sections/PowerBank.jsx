import React from "react";
import pb1 from "../assets/pb1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";

import pb2 from "../assets/pb2.jpg";
import pb3 from "../assets/pb3.jpg";
import pb4 from "../assets/pb4.jpg";
import pb5 from "../assets/pb5.jpg";
import pb6 from "../assets/pb6.jpg";
const testimonials = [
  {
    quote:
      "Compact and powerful! The 10000mAh capacity lasted me through a whole weekend trip. I charged my phone and earbuds multiple times and still had juice left.",
    author: "Rohan Mehta",
    book: "Verified Buyer",
  },
  {
    quote:
      "Fast charging is a game-changer. My phone goes from dead to 50% in no time — perfect when I'm in a rush and need quick power before heading out.",
    author: "Aarav Sharma",
    book: "On-the-Go User",
  },
  {
    quote:
      "The Smart IC Protection really gives peace of mind. I don’t worry about overheating or overcharging anymore, especially when I leave it plugged in overnight.",
    author: "Sneha Kulkarni",
    book: "Tech-Savvy Professional",
  },
  {
    quote:
      "Build quality is premium. That aluminum casing not only looks stylish but also feels durable. It’s survived a few accidental drops without a scratch.",
    author: "Kunal Jadhav",
    book: "Everyday Commuter",
  },
  {
    quote:
      "Those LED indicators are super handy. I always know how much battery I’ve got left. No more guessing games like with my old powerbank.",
    author: "Ishita Rane",
    book: "College Student",
  },
  {
    quote:
      "Honestly didn’t expect this much value at this price point. It beats my older, costlier powerbanks in both performance and looks.",
    author: "Manav Desai",
    book: "Budget Buyer",
  },
  {
    quote:
      "I use this during long gym sessions and while traveling. It’s lightweight, easy to carry, and charges both my phone and smartwatch at the same time.",
    author: "Tanvi Nair",
    book: "Fitness Enthusiast",
  },
  {
    quote:
      "It instantly starts charging the moment I plug in — no lag, no fuss. The fast output ports are great for both my phone and tablet.",
    author: "Ankit Verma",
    book: "Tech Lover",
  },
  {
    quote:
      "I’ve carried it on several trips. Reliable backup, sleek design, and it fits in my smallest bag pocket. Perfect for frequent travelers like me.",
    author: "Priya Shetty",
    book: "Frequent Traveler",
  },
];


const images = [pb2, pb3, pb4, pb5, pb6];

const PowerBank = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] md:mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className=" w-fit">
          <img src={pb1} className=" md:mt-0 w-[400px] md:w-[500px] " />
        </div>
        <div className="w-[380px] md:w-fit h-fit ">
          <p className="text-[42px] md:text-[64px] font-bold mb-6  ">
            Energyshroom PB300
          </p>
          <div className="text-lg md:text-md  flex flex-col gap-4">
            <p>✓ 10000mAh Battery Capacity</p>
            <p>✓ 22.5W Fast Charging</p>
            <p>✓ 12-Layer Smart IC Protection</p>
            <p>✓ LED Battery Level Indicators</p>
            <p>✓ Premium Aluminum Alloy Casing</p>
          </div>
          <button className="border-2 border-white hover:bg-white hover:text-[#151515] px-10 py-4 md:px-8 md:py-2 mt-8 rounded-4xl flex items-center justify-center gap-2 text-md cursor-pointer transition ease-in  ">
            Buy Now <MdArrowOutward className="inline text-lg" />
          </button>
        </div>
      </div>
      {/* section2 */}
      <div className="bg-[#151515] text-white min-h-screen md:h-screen w-screen font-figtree font-semibold flex flex-col-reverse md:flex-row items-center justify-center gap-20 px-4 md:px-10 pb-10">
        {/* Right Section - History */}
        <div className="max-w-[600px] text-sm md:text-base leading-relaxed space-y-4 ">
          <p className="text-[42px] font-bold mb-6 leading-[54px] ">
            About
            <br className="md:hidden" /> boAt Energyshroom PB300
          </p>

          <p className="text-lg">
            <strong>The Pulse of Power:</strong> Engineered in India, the
            Energyshroom PB300 is more than just a powerbank — it’s a symbol of
            unstoppable energy for the digital generation.
          </p>
          <p className="text-lg">
            <strong>Fast Forward:</strong> With{" "}
            <span className="text-[#00ADB5]">22.5W Fast Charging</span>, this
            compact beast juices up your devices faster than ever — because life
            doesn't wait.
          </p>
          <p className="text-lg">
            <strong>Safe & Smart:</strong> The 12-Layer Smart IC Protection
            ensures your gadgets are always in safe hands, avoiding
            overcharging, overheating, and short circuits.
          </p>
          <p className="text-lg">
            <strong>All-Day Power:</strong> Armed with a massive 10000mAh
            battery, it keeps your devices running — from morning meetings to
            midnight movie sessions.
          </p>
          <p className="text-lg">
            <strong>Crafted to Last:</strong> Its sleek Aluminum Alloy Casing
            and LED Indicators combine premium aesthetics with practical
            utility, built for life on-the-go.
          </p>
        </div>
        <div className=" w-fit">
          <img src={pb1} className="w-[500px] " />
        </div>
      </div>
      {/* HorizontalScroll */}
      <div>
        <HorizontalScroll images={images} />
      </div>
      <div>
        <InfiniteScrollFeedback testimonials={testimonials} />
      </div>
      {/* end section */}
      <div>
        <div className="bg-black py-20 px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Power Up Without Limits?

          </h2>
          <p className="text-lg sm:text-xl text-[#e8e8e8] max-w-2xl mx-auto mb-8">
          Join thousands who trust the boAt Energyshroom PB300 for lightning-fast charging, all-day power, and smart protection on the go.

          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white  text-black px-6 py-3 rounded-full font-medium transition-all cursor-pointer">
            Buy Now for ₹1,199

            </button>
            <button className="bg-none border-2 border-white  hover:bg-white text-white cursor-pointer hover:text-black px-6 py-3 rounded-full font-medium transition-all">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerBank;
