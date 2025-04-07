import React from "react";
import neckband1 from "../assets/neckband1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";

import powerbank2 from "../assets/powerbank2.jpg";
import powerbank3 from "../assets/powerbank3.jpg";
import powerbank4 from "../assets/powerbank4.jpg";
import powerbank5 from "../assets/powerbank5.jpg";
import powerbank6 from "../assets/powerbank6.jpg";

const testimonials = [
  {
    quote:
      "100 hours of battery? Absolute game-changer. I use it for calls, music, and podcasts daily — and still go days without charging. It’s the best battery life I’ve ever seen.",
    author: "Rohan Mehta",
    book: "Verified Buyer",
  },
  {
    quote:
      "The spatial audio makes everything immersive. Whether it’s EDM, Bollywood, or gaming — the sound feels wide and powerful. The 13mm drivers really deliver!",
    author: "Aarav Sharma",
    book: "Music Enthusiast",
  },
  {
    quote:
      "Crystal-clear calls, even when my fan’s on full blast or I'm outside. The AI-ENx mics really clean up the background noise. Clients can finally hear me clearly.",
    author: "Sneha Kulkarni",
    book: "Remote Worker",
  },
  {
    quote:
      "For gaming on the go, these neckbands are top-tier. No lag, smooth performance in COD and BGMI. The audio sync is spot on — I can hear footsteps before I see them.",
    author: "Kunal Jadhav",
    book: "Mobile Gamer",
  },
  {
    quote:
      "Super comfy neckband, and I love the magnetic earbuds. Easy to wear while walking or working out — and no more tangles. Just grab, pop in, and go!",
    author: "Ishita Rane",
    book: "College Student",
  },
  {
    quote:
      "I bought this on a budget but it feels anything but cheap. Great build, stylish look, killer battery, and ANC — honestly outperforms some pricier options I’ve used.",
    author: "Manav Desai",
    book: "Budget Buyer",
  },
  {
    quote:
      "I use them for running and workouts, and they stay put. Sweat-resistant and super light — I forget I’m even wearing them. The sound keeps me pumped up too!",
    author: "Tanvi Nair",
    book: "Fitness Enthusiast",
  },
  {
    quote:
      "I love how fast they connect. Turn on Bluetooth, and boom — paired in seconds. No delays or button-pressing drama. Fast Charge is a huge bonus too.",
    author: "Ankit Verma",
    book: "Tech Lover",
  },
  {
    quote:
      "These are my travel essentials now. ANC works great on flights and trains, and the battery never dies on me. It’s like peace and music in one neckband.",
    author: "Priya Shetty",
    book: "Frequent Traveler",
  },
];


const images = [powerbank2, powerbank3, powerbank4, powerbank5, powerbank6];

const NeckBand = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] md:mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className=" w-fit">
          <img src={neckband1} className=" md:mt-0 w-[400px] md:w-[500px] " />
        </div>
        <div className="w-[380px] md:w-fit h-fit ">
          <p className="text-[42px] md:text-[64px] font-bold mb-6  ">
          boAt Rockerz 255 ANC

          </p>
          <div className="text-lg md:text-md  flex flex-col gap-4">
          <p>✓ Massive 100 Hours Battery Life</p>
    <p>✓ Spatial Audio Experience</p>
    <p>✓ Active Noise Cancellation (~32dB)</p>
    <p>✓ Fast Charge (10 Mins = 24 Hours)</p>
    <p>✓ 3 Mics with AI-ENx Technology</p>
    <p>✓ 13mm Dynamic Drivers</p>
    <p>✓ Bluetooth Wireless with Neckband Design</p>
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
            <br className="md:hidden" /> boAt Rockerz 255 ANC
          </p>

          <p className="text-lg">
    <strong>The Legacy:</strong> From Mumbai’s music enthusiasts to daily
    hustlers, the Rockerz 255 ANC became the go-to neckband for performance and style.
  </p>
  <p className="text-lg">
    <strong>Immersive Audio:</strong> Powered by 
    <span className="text-[#00ADB5]"> Spatial Audio</span> and 13mm drivers,
    every beat drops harder and every note sounds richer.
  </p>
  <p className="text-lg">
    <strong>Noise? Cancelled:</strong> With Hybrid ANC (~32dB) and
    AI-ENx™ triple mics, calls and tunes stay crisp, even in the chaos.
  </p>
  <p className="text-lg">
    <strong>Endurance Champion:</strong> A jaw-dropping 100-hour battery life
    plus Fast Charge (10 mins = 24 hrs) means you’re always powered up.
  </p>
  <p className="text-lg">
    <strong>Made for Motion:</strong> Whether it's workouts, traffic, or travel—
    the lightweight neckband with a snug fit keeps up with your every move.
  </p>
        </div>
        <div className=" w-fit">
          <img src={neckband1} className="w-[500px] " />
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
            Ready to Power Through 100 Hours of Music?

          </h2>
          <p className="text-lg sm:text-xl text-[#e8e8e8] max-w-2xl mx-auto mb-8">
          Join thousands who trust boAt Rockerz 255 ANC for spatial audio, unbeatable battery life, and noise-free calls with AI-ENx mics.

          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white  text-black px-6 py-3 rounded-full font-medium transition-all cursor-pointer">
            Buy Now for ₹1,799
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

export default NeckBand;
