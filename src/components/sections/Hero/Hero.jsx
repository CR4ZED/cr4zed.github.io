function Hero() {
  return (
    <div className="relative h-screen px-5">
      <div className="mt-28">
        <h1 className="md:text-6xl lg:text-8xl font-extrabold text-center text-3xl">
          Hi, I'm{" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
            Ankush Jha.
          </span>
        </h1>
        <div className="md:max-w-screen-md z-10 mx-auto">
          <p className="mt-6 md:text-xl text-center text-gray-600 mb-8 text-sm">
            a software engineer who loves working with JavaScript, React, and
            Node.js. Whether you need a new web app or improvements to an
            existing one, I'm here to help. Let's build something awesome
            together!
          </p>
          <div className="social-links flex justify-center items-center gap-5">
            <a href="https://github.com/CR4ZED" target="_blank">
              <img src="/github.svg" alt="github" title="github" className="inline-block h-12 w-12"/>
            </a>
            <a href="https://www.linkedin.com/in/ankushjhaa/" target="_blank">
            <img src="/linkedin.svg" alt="linkedin" title="linkedin" className="inline-block h-12 w-12" />
            </a>
            <a href="mailto:ankush9866@gmail.com">
              <img src="/gmail.svg" alt="gmail" title="gmail" className="inline-block h-12 w-12" />
            </a>
          </div>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in touch
            </a>
            <a href="https://drive.google.com/file/d/1pmy3bm0Yom56MX-35nWKmIXobPCk6FWA/view?usp=drivesdk" target="_blank" className="text-sm font-semibold leading-6 text-gray-900 hover:underline">
              View Resume <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mt-32 flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] group">
            <ul className="flex items-center flex-shrink-0 justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-to-l group-hover:paused">
               <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/python.svg"
                  alt="python"
                  title="python"
                  className="md:h-28 md:w-28 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="javascript.svg"
                  alt="javascript"
                  title="javascript"
                  className="md:h-28 md:w-28 h-12 w-12 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/typescript.svg"
                  alt="typescript"
                  title="typescript"
                  className="md:h-28 md:w-28 h-12 w-12 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/react-js.svg"
                  alt="react.js"
                  title="react.js"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/redux.svg"
                  alt="redux"
                  title="redux"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/tailwind-css.svg"
                  alt="tailwindcss"
                  title="tailwindcss"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/node-js.svg"
                  alt="nodejs"
                  title="node.js"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/express-js.svg"
                  alt="expressjs"
                  title="express.js"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/google-cloud.svg"
                  alt="google cloud platform"
                  title="google cloud platform"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
            </ul>
            <ul className="flex items-center flex-shrink-0 justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-to-l group-hover:paused">
               <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/python.svg"
                  alt="python"
                  className="md:h-28 md:w-28 h-12 w-12 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="javascript.svg"
                  alt="javascript"
                  className="md:h-28 md:w-28 h-12 w-12 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/typescript.svg"
                  alt="typescript"
                  className="md:h-28 md:w-28 h-12 w-12 object-cover inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/react-js.svg"
                  alt="react.js"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/redux.svg"
                  alt="redux"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/tailwind-css.svg"
                  alt="tailwindcss"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/node-js.svg"
                  alt="nodejs"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/express-js.svg"
                  alt="expressjs"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
              <li className="p-4 rounded-lg transition-all ease-in duration-200 flex-shrink-0 max-w-[400px]">
                <img
                  src="/google-cloud.svg"
                  alt="expressjs"
                  className="md:h-28 md:w-28 h-12 w-12 object-contain inline-block"
                />
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Hero;
