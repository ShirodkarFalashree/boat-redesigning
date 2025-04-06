import React from "react";
import earbuds1 from "../assets/earbuds1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";
const EarBuds = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex items-center justify-center gap-20">
        <div className=" w-fit">
          <img src={earbuds1} className="w-[500px] " />
        </div>
        <div className="">
          <p className="text-[64px] font-bold mb-6  ">boAt Airdopes 141</p>
          <div className=" text-md  flex flex-col gap-4">
            <p>✓ Long Lasting - 42 Hours Playtime</p>
            <p>✓ Beast Mode - 50ms Low Latency</p>
            <p>
              ✓ Quad Mics ENx<super>TM</super> Technology
            </p>
            <p>✓ boAt Signature Sound</p>
            <p>✓ 32db ANC ( Active Noise Cancellation )</p>
          </div>
          <button className="border-2 border-white hover:bg-white hover:text-[#151515] px-8 py-2 mt-8 rounded-4xl flex items-center justify-center gap-2 text-md cursor-pointer transition ease-in  ">
            Buy Now <MdArrowOutward className="inline text-lg" />
          </button>
        </div>
      </div>
      {/* section2 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex items-center justify-center gap-20 px-10">
        {/* Right Section - History */}
        <div className="max-w-[600px] text-sm md:text-base leading-relaxed space-y-4">
          <p className="text-[42px] font-bold mb-6  ">
            About boAt Airdopes 141
          </p>

          <p>
            <strong>The Origin:</strong> Born in the heart of Mumbai, boAt began
            a revolution in sound. From college streets to corporate beats, the
            Airdopes 141 quickly became an icon among the youth.
          </p>
          <p>
            <strong>The Soundwave Shift:</strong> Boasting{" "}
            <span className="text-[#00ADB5]">boAt Signature Sound</span>, it
            elevated every playlist — whether it's chill vibes or power
            workouts.
          </p>
          <p>
            <strong>Tech that Talks:</strong> ENx™ Quad Mics for seamless
            calling, Beast Mode for gaming, and ANC to cut through the chaos —
            these weren’t just features, they were lifestyle upgrades.
          </p>
          <p>
            <strong>Power Packed:</strong> With a staggering 42-hour battery
            life, these buds stayed with you — from first commute to final binge
            session.
          </p>
          <p>
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
        <HorizontalScroll />
      </div>
      <div>
        <InfiniteScrollFeedback />
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
