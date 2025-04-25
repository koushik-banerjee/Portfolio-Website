import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="hero"
      className="pb-28 pt-16 md:pt-20 lg:pt-24 flex px-6 lg:px-24"
    >
      <div className="self-center">
        {/* =========== MOBILE IMAGE + TOOLTIP =========== */}
        <div className="hs-tooltip [--placement:right] w-40 md:w-52 hs-tooltip-toggle mx-auto flex justify-center">
  <img src={user_info.main.photo} className="rounded-full mb-6 lg:hidden" alt="Koushik Banerjee" />
  <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
    Hello! 👋 How are you doing? 🤔
  </span>
</div>

        {/* =========== MAIN TEXT CONTENT =========== */}
        <div className="flex gap-2 align-center flex-wrap md:flex-nowrap">
          <div className="lg:w-[80%] text-zinc-900 dark:text-zinc-100 self-center">
            <h2 className="text-xl font-semibold text-red-700 dark:text-red-500 text-center lg:text-start">
              <Typewriter
                words={["Full Stack Developer", "Frontend Developer", "Backend Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <h1 className="font-black mt-3 text-4xl md:text-5xl lg:w-[85%] text-center lg:text-left">
              {user_info.main.name}
            </h1>

            <p className="mt-6 dark:text-zinc-300 text-base font-light lg:w-[87%] leading-7 text-center lg:text-start">
              {user_info.main.description}
            </p>

            <div className="flex gap-2 mt-6 items-center justify-center lg:items-start lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 border border-black relative overflow-hidden group dark:border-white font-medium transition-all duration-300 text-black dark:text-white"
              >
                <span className="absolute inset-0 bg-red-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10">Projects</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div>
          </div>

          {/* =========== DESKTOP IMAGE + TOOLTIP =========== */}
          <div className="hidden lg:block w-[480px] self-center group">
            <div className="relative dark:bg-white bg-red-500 rounded-2xl">
              <img
                className="rounded-[10%] transform rotate-3 animate-spinOnce"
                src={user_info.main.photo}
                alt="Koushik Banerjee"
              />
              <span className="absolute bottom-4 left-4 bg-zinc-900 text-white px-3 py-2 text-sm rounded shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                Hello there 👋
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
