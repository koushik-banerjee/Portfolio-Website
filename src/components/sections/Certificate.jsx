import { FcGoogle } from "react-icons/fc";
import { PiCertificateFill } from "react-icons/pi";
import { SiHackerrank, SiIbm } from "react-icons/si";
import user_info from "../../data/user_info.js";

function getCertificateIcon(icon) {
    if (icon === "ibm") {
      return <SiIbm className="text-blue-500 absolute right-5 top-0 text-5xl" />;
    } else if (icon === "Google" || icon === "Google Cloud") {
      return <FcGoogle className="absolute right-5 top-3 text-3xl" />;
    } else if (icon === "NIIT") {
      return (
        <img
          src="./niit.png"
          alt="Coursera"
          className="absolute right-5 top-3 w-12 h-8 object-contain"
        />
      );
    } 
    else if(icon === "Johns Hopkins University"){
        return (
            <img
          src="./johns.png"
          alt="Coursera"
          className="absolute right-5 top-3 w-12 h-8 object-contain"
        />
        );
    } 
    else if(icon === "University of Colorado Boulder"){
        return (
            <img
          src="./colorado.png"
          alt="Coursera"
          className="absolute right-5 top-3 w-12 h-8 object-contain"
        />
        );
    } 
    else {
      return <SiHackerrank className="text-green-500 absolute right-5 top-3 text-3xl" />;
    }
  }

function Certificate() {
  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-24 max-w-7xl mx-auto">
      {/* =========== CERTIFICATES TITLE =========== */}
      <h4 className="text-3xl dark:text-white mt-10 font-bold flex gap-2 items-center">
        <PiCertificateFill className="text-3xl text-red-800 dark:text-red-500" />
        Certificates
      </h4>

      <div
        data-hs-carousel='{"loadingClasses": "opacity-0"}'
        className="relative mt-6 w-full"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-96 bg-white dark:bg-gray-800 rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {user_info.certificates.map((cert, index) => (
              <div className="hs-carousel-slide relative w-full" key={index}>
                {getCertificateIcon(cert.icon)}

                <div className="flex justify-center items-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
                  <div className="hs-tooltip [--placement:bottom] inline-block">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hs-tooltip-toggle text-center text-gray-800 dark:text-white hover:text-red-800 hover:dark:text-red-500"
                    >
                      <p className="transition duration-700 px-6 font-bold text-lg">
                        {cert.title}
                      </p>
                      <p className="transition duration-700 px-6 text-sm">
                        {cert.description}
                      </p>
                    </a>
                    <span
                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
                      role="tooltip"
                    >
                      Open Certificate
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========== CONTROLS =========== */}
        <button
          type="button"
          className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
        >
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
        >
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* =========== PAGINATION =========== */}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          {user_info.certificates.map((_, index) => (
            <span
              key={index}
              className="hs-carousel-active:bg-red-700 hs-carousel-active:border-red-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-red-500 dark:hs-carousel-active:border-red-500"
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
