"use client";

import AnimatedText from "./cursor-follow-text";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-bg relative border 2xl:h-[550px] h-fit lg:pb-20 w-[95%] mx-auto mb-8 rounded-lg overflow-hidden radial-gradient-bg
                   [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
                   dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]"
      >
        <div className="gap-10 sm:flex justify-between p-5 2xl:py-10 py-5 dark:bg-[#4c61ff]   bg-orange-400 rounded-sm rounded-b-none text-white">
          <div className="sm:block flex sm:mt-0 mt-4  gap-2 sm:w-auto w-full sm:space-y-2 relative z-[1]">
            <a
              href="https://github.com/invenlore"
              target="_blank"
              className="bg-gray-50 sm:w-auto w-full   grid place-content-center 2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100% "
                viewBox="0 0 16 16"
                fill="currentColor"
                className="sm:w-24 w-full text-orange-400"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-gray-50 sm:w-auto w-full  grid place-content-center  2xl:h-40 h-32 2xl:p-10 p-5 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 80 78"
                fill="none"
                className="sm:w-24 w-full text-orange-400"
              >
                <path
                  d="M16.6 8.79036C16.6 13.3937 12.9 17.1237 8.33333 17.1237C3.76667 17.1237 0.0666667 13.3937 0.0666667 8.79036C0.0666667 4.19036 3.76667 0.457031 8.33333 0.457031C12.9 0.457031 16.6 4.19036 16.6 8.79036ZM16.6667 23.7904H0V77.1237H16.6667V23.7904ZM43.2733 23.7904H26.7133V77.1237H43.2767V49.127C43.2767 33.5604 63.3733 32.287 63.3733 49.127V77.1237H80V43.3537C80 17.087 50.26 18.0437 43.2733 30.9737V23.7904Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:flex hidden">
          <AnimatedText
            text="INVELORE"
            className="2xl:text-[11rem] text-[12vw]"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
