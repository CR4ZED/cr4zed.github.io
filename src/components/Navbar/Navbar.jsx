import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]"); // Select only sections with IDs
    const observer = new IntersectionObserver(
      (entries) => {
        let active = "#home"; // Default to home link
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            active = `#${entry.target.id}`;
          }
        });
        setActiveLink(active);
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 antialiased transition-transform ${
        scrolled || isOpen ? "border-b border-gray-200 backdrop-blur-lg" : ""
      } ${isOpen ? "bg-white" : ""}`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-3xl font-bold whitespace-nowrap text-indigo-600">
            {"{"}
            <span>A</span>
            {"}"}
          </span>
        </a>
        {/* Desktop Navbar */}
        <div className="hidden md:flex md:items-center md:justify-between md:w-auto">
          <ul className="flex flex-row md:space-x-8 space-y-4 md:space-y-0 font-medium text-gray-900">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 rounded transition ${
                  activeLink === "#home" ? "text-indigo-600" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 rounded transition ${
                  activeLink === "#about" ? "text-indigo-600" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 px-3 rounded transition ${
                  activeLink === "#projects" ? "text-indigo-600" : ""
                }`}
                aria-current="page"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 px-3 rounded transition ${
                  activeLink === "#contact" ? "text-indigo-600" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Hamburger Button */}
        <button
          type="button"
          className="fixed top-4 right-4 p-2 w-10 h-10 z-20 text-indigo-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "" : "hidden"
          } inset-0 top-16 bg-white w-full h-full transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center min-h-screen justify-center h-full space-y-6 font-medium text-black">
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center rounded transition ${
                  activeLink === "#home" ? "text-indigo-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 px-4 text-center rounded transition ${
                  activeLink === "#about" ? "text-indigo-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 px-4 text-center rounded transition ${
                  activeLink === "#projects" ? "text-indigo-600" : ""
                }`}
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 px-4 text-center rounded transition ${
                  activeLink === "#contact" ? "text-indigo-600" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
