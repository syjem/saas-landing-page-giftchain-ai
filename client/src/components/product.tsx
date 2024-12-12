import { features } from '@/lib/data';

const Product = () => {
  return (
    <section
      id="product"
      className="p-6 pt-8 xs:mt-[180px] sm:pt-12 mt-[100px] sm:mt-[200px] lg:px-[100px] lg:mt-[300px] 2xl:mt-[350px]">
      <h2 className="text-dark_red font-bold text-[36px] text-center leading-[45px]">
        Everything Santas Need In One Platform
      </h2>
      <p className="mt-6 md:mt-8 mb-10 md:mb-[65px] font-normal text-sm text-[#969696] text-center">
        We automated Santa's job and added it to the blockchain so that you
        don’t have to do it.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 md:gap-8">
        {features.map((item) => (
          <div
            key={item.header}
            className="rounded-[15px] p-6 md:p-8 border border-[#eaeaea]">
            <item.icon />
            <h3 className="mb-5 text-[#343434] font-semibold text-lg">
              {item.header}
            </h3>
            <p className="text-sm text-[#969696] h-[120px]">
              {item.description}
            </p>
            <a
              href={item.href}
              className="underline text-red_bg text-base font-semibold hover:no-underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
