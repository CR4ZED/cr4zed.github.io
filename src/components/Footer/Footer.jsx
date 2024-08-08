function Footer() {
  return (
    <footer className="mt-32 relative flex flex-col space-y-10 justify-center items-center">
      <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
        <li>
          <a
            href="#"
            className="block py-2 px-3 font-light rounded md:hover:text-indigo-600  md:text-gray-500 md:p-0 md:dark:text-gray-500"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 px-3 font-light  text-gray-500 rounded  md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-500 dark:  md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="block py-2 px-3 font-light  text-gray-500 rounded  md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-500 dark:  md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 px-3 font-light  text-gray-500 rounded  md:hover:text-indigo-600 md:p-0 md:dark:hover:text-indigo-500 dark:  md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="flex sm:justify-center space-x-6">
        <a href="https://github.com/CR4ZED" target="_blank">
          <img
            src="/github.svg"
            alt="github"
            title="github"
            className="inline-block h-8 w-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/ankushjhaa/" target="_blank">
          <img
            src="/linkedin.svg"
            alt="linkedin"
            title="linkedin"
            className="inline-block h-8 w-8"
          />
        </a>
        <a href="mailto:ankush9866@gmail.com">
          <img
            src="/gmail.svg"
            alt="gmail"
            title="gmail"
            className="inline-block h-8 w-8"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
