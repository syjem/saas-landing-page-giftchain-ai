import Button from '@/components/button';
import { SolutionBackground } from '@/components/svg';
import { elvesImages } from '@/lib/data';

const Solution = () => {
  return (
    <section
      id="solution"
      className="z-10 p-6 lg:mt-[105px] lg:px-[100px] overflow-hidden relative lg:py-[157px] bg-[#f1f5f9]">
      <h2 className="w-auto lg:w-[534px] text-dark_red font-bold text-[40px] lg:text-[56px] leading-[50px] lg:leading-[78px] z-50">
        Say goodbye to gift chaos this year
      </h2>
      <p className="my-4 lg:my-8 text-sm text-[#969696] font-normal w-auto lg:w-[379px] z-50">
        No need to worry about your gift being lost or delivered to the wrong
        child. We’ll handle every single one.
      </p>
      <div className="flex items-center gap-4 w-fit">
        <div className="flex -space-x-4">
          {elvesImages.map((item, i) => (
            <img
              key={i + 1}
              src={item.src}
              alt="elves"
              className="block rounded-full size-10 border-[2px] border-light_red"
            />
          ))}
        </div>
        <p className="m-0 text-[#343434] font-semibold">
          More than 10,000 elves have tried
        </p>
      </div>
      <Button
        className="text-white font-semibold text-sm border-none mt-[33px] bg-red_bg"
        aria-label="Try GiftChain.ai for free">
        Try for free
      </Button>
      <img
        className="hidden lg:block absolute lg:right-4 xl:right-[80px] top-[119px] w-1/2 rounded-[11px] z-10"
        src="images/dashboard.png"
        alt="Dashboard screenshot of GiftChain.ai"
      />
      <SolutionBackground />
    </section>
  );
};
export default Solution;
