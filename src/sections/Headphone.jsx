import React from "react";
import earbuds1 from "../assets/earbuds1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";

import headphone2 from "../assets/headphone2.jpg";
import headphone3 from "../assets/headphone3.jpg";
import headphone4 from "../assets/headphone4.jpg";
import headphone5 from "../assets/headphone5.jpg";
import headphone6 from "../assets/headphone6.jpg";
import headphone1 from "../assets/headphone1.png";

const testimonials = [
  {
    quote:
      "70 hours of battery?! I’m honestly blown away. I charge it once and forget about it for days. Easily the most reliable headphones I’ve owned so far.",
    author: "Nikhil Arora",
    book: "Verified Buyer",
  },
  {
    quote:
      "The sound is rich, the bass is deep, and the over-ear fit is just perfect. I can listen to music for hours without any discomfort. Pure bliss!",
    author: "Sanya Kapoor",
    book: "Music Addict",
  },
  {
    quote:
      "Working from home, I needed a solid mic and long comfort hours. These deliver crystal-clear audio on calls and feel light even after long meetings.",
    author: "Rajeev Nambiar",
    book: "Remote Professional",
  },
  {
    quote:
      "Perfect companion for binge-watching. The soft cushions and lag-free Bluetooth make every movie feel like a theatre experience at home.",
    author: "Aanya Deshmukh",
    book: "Streaming Fanatic",
  },
  {
    quote:
      "The controls are super easy to use. Volume, track change, even voice assistant — all without touching my phone. It’s a productivity boost I didn’t know I needed.",
    author: "Zaid Khan",
    book: "Multitasker",
  },
  {
    quote:
      "They’re perfect for travel. Durable, foldable, and with insane battery backup. I used them on a 10-hour trip and still had charge left!",
    author: "Megha Patel",
    book: "Travel Buff",
  },
  {
    quote:
      "Bluetooth 5.0 is smooth as butter. No dropouts, fast pairing, and it remembers my devices. That’s the kind of ease every gadget should offer.",
    author: "Aditya Menon",
    book: "Tech Enthusiast",
  },
  {
    quote:
      "As a gamer, latency matters. While these aren't marketed for gaming, the response time and sound detailing are surprisingly good for casual sessions.",
    author: "Kritika S.",
    book: "Casual Gamer",
  },
  {
    quote:
      "Bought these for my dad and even he finds them comfy and easy to use. The big buttons and soft earcups really make a difference for all age groups.",
    author: "Ritika V.",
    book: "Gift Giver",
  },
];


const images = [headphone2, headphone3, headphone4, headphone5, headphone6];

const Headphone = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] md:mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className=" w-fit">
          <img src={headphone1} className=" md:mt-0 w-[400px] md:w-[500px] " />
        </div>
        <div className="w-[380px] md:w-fit h-fit ">
          <p className="text-[42px] md:text-[64px] font-bold mb-6  ">
            boAt Rockerz 450 Pro
          </p>
          <div className="text-lg md:text-md  flex flex-col gap-4">
            <p>✓ 70 Hours Playback Time</p>
            <p>✓ 40mm Dynamic Drivers for HD Sound</p>
            <p>✓ Bluetooth v5.0 Connectivity</p>
            <p>✓ Comfortable Padded Ear Cushions</p>
            <p>✓ Easy Access Controls & Voice Assistant Support</p>
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
            <br className="md:hidden" /> boAt Rockerz 450 Pro
          </p>
          <p className="text-lg">
            <strong>The Rise of Over-Ear Comfort:</strong> Designed with the
            rhythm of Indian streets in mind, the Rockerz 450 Pro became the
            go-to for those who wanted to feel the bass, not just hear it.
          </p>
          <p className="text-lg">
            <strong>Immersive Sound Experience:</strong> With its powerful{" "}
            <span className="text-[#00ADB5]">40mm dynamic drivers</span>, these
            headphones deliver thumping boAt Signature Sound that makes every
            track feel alive.
          </p>
          <p className="text-lg">
            <strong>Tech Meets Ease:</strong> Bluetooth v5.0 ensures seamless
            connectivity, while built-in mic and voice assistant support keep
            you connected, hands-free and hassle-free.
          </p>
          <p className="text-lg">
            <strong>Unstoppable Playback:</strong> With up to 70 hours of
            battery life, Rockerz 450 Pro powers through your entire week — from
            Monday meetings to Sunday chill sessions.
          </p>
        </div>
        <div className=" w-fit">
          <img src={headphone1} className="w-[500px] " />
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
            Ready to Elevate Your Audio Experience?
          </h2>
          <p className="text-lg sm:text-xl text-[#e8e8e8] max-w-2xl mx-auto mb-8">
            Join thousands of audiophiles who trust boAt Rockerz 450 Pro for
            powerful sound, insane battery life, and all-day comfort.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white  text-black px-6 py-3 rounded-full font-medium transition-all cursor-pointer">
              Buy Now for ₹1,999
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

export default Headphone;
