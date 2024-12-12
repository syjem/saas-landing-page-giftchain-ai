import { company, support, works } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] mx-auto max-w-[1440px] md:pt-[79px] p-6 pb-md:[20px] md:px-[100px]">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between">
        <div className="flex md:flex-col flex-wrap gap-8">
          <div className="flex items-center gap-[7.5px]">
            <img src="images/footer-logo.svg" alt="GiftChain.ai logo" />
            <span className="text-dark_red font-semibold text-xl">
              GiftChain.ai
            </span>
          </div>
          <p className="text-[#343434] text-base md:text-lg md:w-[235px] font-normal">
            Manage gifts easily. Everywhere, every time.
          </p>
        </div>

        <div className="flex gap-[69px] relative flex-wrap justify-center">
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#343434]">Company</h4>
            <ul className="flex flex-col gap-4">
              {company.map((list) => (
                <li key={list.name}>
                  <a
                    className="text-[#343434] text-base hover:underline"
                    href={list.href}>
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#343434]">Support</h4>
            <ul className="flex flex-col gap-4">
              {support.map((list) => (
                <li key={list.name}>
                  <a
                    className="text-[#343434] text-base hover:underline"
                    href={list.href}>
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#343434]">Our Works</h4>
            <ul className="flex flex-col gap-4">
              {works.map((list) => (
                <li key={list.name}>
                  <a
                    className="text-[#343434] text-base hover:underline"
                    href={list.href}>
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[160px]">
            <img
              className="h-full"
              src="images/footer-socials.svg"
              alt="Socials Logo"
            />
          </div>
        </div>
      </div>
      <p className="my-12 text-[#343434] text-base leading-[26px] text-center">
        ©2024 GiftChain. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
