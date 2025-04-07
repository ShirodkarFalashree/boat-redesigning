import React from "react";
import sw1 from "../assets/sw1.png";
import { MdArrowOutward } from "react-icons/md";
import HorizontalScrollSection from "../components/HorizontalScroll";
import logo from "../assets/logo.png";
import HorizontalScroll from "../components/HorizontalScroll";
import InfiniteScrollFeedback from "../components/Feedback";

import sw2 from "../assets/sw2.jpg"
import sw3 from "../assets/sw3.jpg"
import sw4 from "../assets/sw4.jpg"
import sw5 from "../assets/sw5.jpg"
import sw6 from "../assets/sw6.jpg"

const testimonials = [
  {
    quote:
      "The AMOLED display is just stunning! Super bright and crisp — I can see everything clearly even under direct sunlight. Makes checking notifications feel premium.",
    author: "Rohan Mehta",
    book: "Verified Buyer",
  },
  {
    quote:
      "Love the fitness nudges! They actually help me stay on track throughout the day. It feels like I have a mini coach on my wrist constantly pushing me to be better.",
    author: "Aarav Sharma",
    book: "Fitness Buff",
  },
  {
    quote:
      "The build quality is top-tier. I’ve worn it while jogging in rain, working in dust, and during intense workouts — it handles everything like a champ!",
    author: "Sneha Kulkarni",
    book: "Outdoor Runner",
  },
  {
    quote:
      "That rotating crown is a game-changer. It’s so smooth and makes navigating through menus super convenient — I don’t even miss touchscreen scrolling anymore.",
    author: "Kunal Jadhav",
    book: "Smartwatch Fan",
  },
  {
    quote:
      "So many watch faces to choose from! I change mine every few days to match my outfit or mood. It’s like having a new watch every week.",
    author: "Ishita Rane",
    book: "Style Enthusiast",
  },
  {
    quote:
      "I compared this with a few other smartwatches in the ₹3K range, and honestly, nothing comes close. The features, display, and battery life totally surprised me.",
    author: "Manav Desai",
    book: "Budget Conscious Buyer",
  },
  {
    quote:
      "Tracks my steps, heart rate, sleep, and even reminds me to drink water — it's like a health buddy wrapped around my wrist. Very handy!",
    author: "Tanvi Nair",
    book: "Wellness Focused",
  },
  {
    quote:
      "Battery life easily lasts me 5–6 days on a single charge. I don’t even worry about carrying the charger while traveling. Super convenient.",
    author: "Ankit Verma",
    book: "Frequent Traveler",
  },
  {
    quote:
      "I got it for daily use, but now I wear it almost everywhere — college, workouts, even casual outings. It just fits in so well with every setting.",
    author: "Priya Shetty",
    book: "Everyday User",
  },
];


const images = [
    sw2,
    sw3,
    sw4,
    sw5,
    sw6,
];

const SmartWatch = () => {
  return (
    <div>
      {/* logo section */}
      <div className="bg-[#151515] md:mb-[-40px] ">
        <img src={logo} className="w-[120px] pt-2 " />
      </div>
      {/* section1 */}
      <div className="bg-[#151515] text-white h-screen w-screen font-figtree font-semibold flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <div className=" w-fit">
          <img src={sw1} className=" md:mt-0 w-[400px] md:w-[500px] " />
        </div>
        <div className="w-[380px] md:w-fit h-fit ">
          <p className="text-[42px] md:text-[64px] font-bold mb-6  ">
          boAt Ultima Ember
          </p>
          <div className="text-lg md:text-md  flex flex-col gap-4">
          <p>✓ 1.96” (4.97 cm) AMOLED Display</p>
    <p>✓ Personalized Fitness Nudges</p>
    <p>✓ Functional Crown for Easy Navigation</p>
    <p>✓ 100+ Sports Modes</p>
    <p>✓ Customizable Watch Faces</p>
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
            <br className="md:hidden" /> boAt Ultima Ember
          </p>

          <p className="text-lg">
    <strong>The Rise of Ember:</strong> Crafted in the innovation labs of boAt, Ultima Ember is not just a smartwatch — it's a statement for the modern lifestyle, blending tech with bold design.
  </p>
  <p className="text-lg">
    <strong>The AMOLED Magic:</strong> With a stunning{" "}
    <span className="text-[#00ADB5]">1.96” AMOLED Display</span>, visuals come alive — whether you're checking your health metrics or customizing your watch face.
  </p>
  <p className="text-lg">
    <strong>Fitness, Personalized:</strong> Stay ahead with fitness nudges tailored just for you. It’s your wellness coach on your wrist, 24/7.
  </p>
  <p className="text-lg">
    <strong>Control in a Click:</strong> The functional crown offers seamless navigation, bringing convenience right at your fingertips.
  </p>
  <p className="text-lg">
    <strong>India-Ready:</strong> Whether it's a workout in the gym or a walk in the monsoon, Ultima Ember is built to match every hustle and every season.
  </p>
        </div>
        <div className=" w-fit">
          <img src={sw1} className="w-[500px] " />
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
          Ready to Elevate Your Fitness Game?
          </h2>
          <p className="text-lg sm:text-xl text-[#e8e8e8] max-w-2xl mx-auto mb-8">
          Join thousands who trust the boAt Ultima Ember for stunning visuals,
    fitness tracking, and smart features that redefine your daily routine.

          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white  text-black px-6 py-3 rounded-full font-medium transition-all cursor-pointer">
            Buy Now for ₹2,499
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

export default SmartWatch;
