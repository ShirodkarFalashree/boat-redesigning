import React from "react";
import earbuds1 from "../assets/earbuds1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";

import earbuds2 from "../assets/earbuds2.jpg"
import earbuds3 from "../assets/earbuds3.jpg"
import earbuds4 from "../assets/earbuds4.jpg"
import earbuds5 from "../assets/earbuds5.jpg"
import earbuds6 from "../assets/earbuds6.jpg"

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

const images = [
    earbuds2,
    earbuds3,
    earbuds4,
    earbuds5,
    earbuds6,
];

const EarBuds = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] md:mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className=" w-fit">
          <img src={earbuds1} className=" md:mt-0 w-[400px] md:w-[500px] " />
        </div>
        <div className="w-[380px] md:w-fit h-fit ">
          <p className="text-[42px] md:text-[64px] font-bold mb-6  ">
            boAt Airdopes 141
          </p>
          <div className="text-lg md:text-md  flex flex-col gap-4">
            <p>✓ Long Lasting - 42 Hours Playtime</p>
            <p>✓ Beast Mode - 50ms Low Latency</p>
            <p>
              ✓ Quad Mics ENx<super>TM</super> Technology
            </p>
            <p>✓ boAt Signature Sound</p>
            <p>✓ 32db ANC ( Active Noise Cancellation )</p>
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
            <br className="md:hidden" /> boAt Airdopes 141
          </p>

          <p className="text-lg">
            <strong>The Origin:</strong> Born in the heart of Mumbai, boAt began
            a revolution in sound. From college streets to corporate beats, the
            Airdopes 141 quickly became an icon among the youth.
          </p>
          <p className="text-lg">
            <strong>The Soundwave Shift:</strong> Boasting{" "}
            <span className="text-[#00ADB5]">boAt Signature Sound</span>, it
            elevated every playlist — whether it's chill vibes or power
            workouts.
          </p>
          <p className="text-lg">
            <strong>Tech that Talks:</strong> ENx™ Quad Mics for seamless
            calling, Beast Mode for gaming, and ANC to cut through the chaos —
            these weren’t just features, they were lifestyle upgrades.
          </p>
          <p className="text-lg">
            <strong>Power Packed:</strong> With a staggering 42-hour battery
            life, these buds stayed with you — from first commute to final binge
            session.
          </p>
          <p className="text-lg">
            <strong>Built for India:</strong> Sweat? Dust? Mumbai trains?
            Airdopes 141 kept up with everything, just like its users.
          </p>
        </div>
        <div className=" w-fit">
          <img src={earbuds1} className="w-[500px] " />
        </div>
      </div>
      {/* HorizontalScroll */}
      <div>
        <HorizontalScroll images={images}/>
      </div>
      <div>
        <InfiniteScrollFeedback testimonials={testimonials} />
      </div>
      {/* end section */}
      <div>
        <div className="bg-black py-20 px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Experience the Ultimate Sound?
          </h2>
          <p className="text-lg sm:text-xl text-[#e8e8e8] max-w-2xl mx-auto mb-8">
            Join thousands of music lovers who trust boAt Airdopes 141 for
            immersive sound, powerful bass, and all-day comfort.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white  text-black px-6 py-3 rounded-full font-medium transition-all cursor-pointer">
              Buy Now for ₹1,499
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

export default EarBuds;
