function About() {
  return (
    <section className="w-full py-12 lg:py-24 relative" id="about">
      <div className="container flex flex-col gap-6 px-4 text-center md:gap-10 md:px-6 lg:flex-row lg:items-start lg:text-left xl:gap-16">
        <div className="mx-auto order-2 lg:order-1 max-w-[600px]">
          <div className="grid gap-4 sm:gap-6 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-indigo-600">
              About Me
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              I'm Ankush, a software engineer with a strong background in
              JavaScript, React, and Node.js. My love for technology began at
              12, sparked by gaming, which led me to explore computers and
              eventually pursue a B.Tech in Computer Science. My journey started
              with Python scripts for automation and evolved into full-stack
              development, where I now build and optimize web applications. I
              enjoy connecting with fellow developers and, outside of work, I'm
              into gaming, horror movies, and sky gazing.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 mb-8">
            <h3 className="text-2xl font-bold tracking-tight">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-normal">
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                HTML
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                CSS
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                JavaScript
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Typescript
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Python
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                React.js
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Next.js
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Tailwind CSS
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Redux
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                Node.js
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                express.js
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                webRTC
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                websocket
              </span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-sm bg-white shadow-sm">
                google cloud platform
              </span>
            </div>
          </div>
          <div className="md:flex md:flex-row gap-5 justify-between flex-col">
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-2">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-500">Jr Software Engineer</h4>
                  <p className="text-gray-500 dark:text-gray-400">FULL Creative</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2021 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-2">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-500">B.Tech in Computer Science</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Aditya College Of Engineering
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2017 - 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto order-1 lg:order-2 w-full max-w-sm lg:max-w-xl">
          <img
            src="/ankush.png"
            width="600"
            height="600"
            alt="Profile Picture"
            className="rounded-full object-cover object-center border-4 border-white border-opacity-25 w-full aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
