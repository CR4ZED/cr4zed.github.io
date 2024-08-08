export default function Contact() {
  return (
    <>
      <section
        className="relative pt-20 pb-8 md:pt-16 md:pb-0 mt-44"
        id="contact"
      >
        <div className="mx-auto px-4 text-gray-600 md:px-8">
          <div className="mx-auto space-y-3 sm:text-center">
            <h3 className="text-indigo-600 font-bold text-4xl tracking-tighter text-center">
              Get in touch
            </h3>
            <p className="text-3xl md:text-5xl max-w-screen-md mx-auto font-bold text-black tracking-tighter text-center">
              Have a question or need more details? Connect with me using the
              links below{" "}
            </p>
          </div>
          <div className="md:flex justify-evenly mt-20">
            <div className="flex md:flex-col gap-5 items-center justify-center mb-5 whitespace-nowrap">
              <a href="mailto:ankush9866@gmail.com">
                <img
                  src="/gmail.svg"
                  alt="gmail"
                  title="gmail"
                  className="inline-block h-8 w-8"
                />
              </a>
              <a href="mailto:ankush9866@gmail.com" className="hover:underline">
                Send an email
              </a>
            </div>
            <div className="flex md:flex-col gap-5 items-center justify-center mb-5 whitespace-nowrap">
              <a href="https:/linkedin.com/in/ankushjhaa" target="_blank">
                <img
                  src="/linkedin.svg"
                  alt="linkedin"
                  title="linkedin"
                  className="inline-block h-8 w-8"
                  target="_blank"
                />
              </a>
              <a
                href="https:/linkedin.com/in/ankushjhaa"
                className="hover:underline"
                target="_blank"
              >
                Connect on linkedin
              </a>
            </div>
            <div className="flex md:flex-col gap-5 items-center justify-center mb-5 whitespace-nowrap">
              <a
                href="https://www.google.com/maps/place/Kakinada,+Andhra+Pradesh/"
                className="hover:underline cursor-pointer"
                target="_blank"
              >
                <img
                  src="/location.svg"
                  alt="location"
                  title="location"
                  className="inline-block h-8 w-8"
                />
              </a>
              <a
                href="https://www.google.com/maps/place/Kakinada,+Andhra+Pradesh/"
                className="hover:underline cursor-pointer"
                target="_blank"
              >
                Kakinada, Andhra Pradesh, India
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
