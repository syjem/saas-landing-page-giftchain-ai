import { navLists } from '@/lib/data';
import Button from './button';

const Headers = () => {
  return (
    <header className="max-w-[1440px] mx-auto bg-red_bg">
      <nav className="flex items-center justify-between p-6 lg:py-10 lg:px-[100px]">
        <div className="flex items-center gap-2.5 text-white">
          <img src="images/logo.svg" alt="GiftChain.ai logo" />
          <span className="text-lg font-semibold leading-[21px]">
            GiftChain.ai
          </span>
        </div>

        <button
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
          className="p-2 mr-2 text-gray-100 rounded-lg cursor-pointer md:hidden hover:text-gray-300 hover:bg-gray-100 focus:bg-inherit focus:ring-2 focus:ring-gray-100 ">
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
          <span className="sr-only">Toggle sidebar</span>
        </button>

        <ul className="hidden md:flex md:gap-6 lg:gap-[40px]">
          {navLists.map((list) => (
            <li key={list.name} className="p-0">
              <a href={list.href} className="text-white font-normal text-base">
                {list.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex md:items-center md:gap-2.5">
          <Button className="text-white bg-inherit border border-white">
            Login
          </Button>
          <Button className="bg-light_red text-dark_red border-none">
            Sign up
          </Button>
        </div>
      </nav>
      <section className="relative m-0 px-8 pb-[132px] md:px-[100px] md:pb-[265px]">
        <h1 className="font-bold text-white text-center text-[40px] leading-[48px] md:text-[64px] md:leading-[81px]">
          AI-Powered Blockchain for Effortless Gift Management
        </h1>
        <p className="font-normal text-white text-center leading-8 text-base mt-8 mb-[35px]">
          Scaling holiday logistics through a decentralized proof-of-work
          protocol with autonomous LLM-powered agents.
        </p>
        <div className="w-full flex items-center justify-center gap-4 md:gap-[25px] mb-12 md:mb-[82px]">
          <Button className="bg-light_red text-dark_red border-none">
            Try for free
          </Button>
          <Button className="text-white bg-inherit border border-white">
            Watch a demo
          </Button>
        </div>
        <img
          className="z-40 block absolute max-w-full w-[85%] md:w-[70%] left-1/2 -translate-x-[48%] rounded-[20px]"
          src="images/dashboard.png"
          alt="Dashboard screenshot of GiftChain.ai"
        />
      </section>
    </header>
  );
};

export default Headers;
