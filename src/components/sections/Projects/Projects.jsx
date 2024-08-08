function Projects() {
  return (
    <section
      className="section container mx-auto relative pt-20 pb-8 md:pt-16 md:pb-0 mt-44"
      id="projects"
    >
      <div>
        <div className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl text-indigo-600 leading-normal mb-2 font-bold tracking-tighter">
            My Projects 🚀
          </h2>
          <p className="max-w-screen-md font-bold tracking-tighter text-3xl md:text-5xl mx-auto pb-2">
            Take a look at some of the work I’ve done and see what I can offer.
          </p>
        </div>
        <div className="flex flex-wrap justify-center text-center mt-32">
          <div
            className="flex-shrink px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border hover:shadow-lg rounded-md border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <img src="/satellite-tracker.png" alt="looplab" className="w-full inline-block"/>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Satellite Tracker
              </h3>
              <p className="text-gray-500 mb-4">
                A satellite tracker, that can track around 3000 active satellites orbiting around the earth. Made with the help of python, html, css, js and node.js.
              </p>
              <a href="https://github.com/CR4ZED/Satellite-Tracker" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Live Preview</a>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border hover:shadow-lg rounded-md border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <img src="/looplab.png" alt="looplab" className="w-full inline-block"/>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Looplab
              </h3>
              <p className="text-gray-500 mb-4">
                A single page website made using bootstrap for an imaginary social media app
              </p>
              <a href="https://thelooplab.netlify.app/" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Live Preview</a>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border hover:shadow-lg rounded-md border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <img src="/newsgrid.png" alt="looplab" className="w-full inline-block"/>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Newsgrid
              </h3>
              <p className="text-gray-500 mb-4">
                A blog website made with the help of html and css grids
              </p>
              <a href="https://gridnewssite.netlify.app/" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Live Preview</a>
            </div>
            {/* end service block */}
          </div>
          <div
            className="flex-shrink px-4 w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border hover:shadow-lg rounded-md border-gray-200  transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <img src="/glozzom.png" alt="looplab" className="w-full inline-block"/>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Glozzom
              </h3>
              <p className="text-gray-500 mb-4">
                A fictional multi page tech website made with the help of bootstrap
              </p>
              <a href="https://glozzom.vercel.app/" target="_blank" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Live Preview</a>
            </div>
            {/* end service block */}
          </div>
        </div>
        {/* end row */}
      </div>
    </section>
  );
}

export default Projects;
