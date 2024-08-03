const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-5 pt-3 xl:flex-row">
      <h5 className="mb-4 text-sm font-medium text-gray-400 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-sm text-gray-400 sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} Horizon UI. All Rights Reserved. Made with love by <span className="font-bold">Simmmple!</span>
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href=" "
              className="text-base font-medium text-gray-400 hover:text-gray-400"
            >
              Support
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=" "
              className="text-base font-medium text-gray-400 hover:text-gray-400"
            >
              License
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=" "
              className="text-base font-medium text-gray-400 hover:text-gray-400"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              target="blank"
              href=" "
              className="text-base font-medium text-gray-400 hover:text-gray-400"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
