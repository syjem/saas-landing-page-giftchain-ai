import { customersReviews } from '@/lib/data';

const Testimonials = () => {
  return (
    <section id="customer" className="p-6 lg:px-[100px] lg:pb-[165px]">
      <div className="flex justify-between items-center mb-6 lg:mb-[60px]">
        <h2 className="font-bold text-xl lg:text-[40px] lg:leading-[81px] text-dark_red">
          GiftChain is loved by users
        </h2>
        <div className="md:items-center md:gap-4 hidden md:flex">
          <img
            src="images/arrow-left-circle.svg"
            aria-label="arrow-left-circle"
            className="size-10 hover:scale-[1.1] transition-transform"
          />
          <img
            src="images/arrow-right-circle.svg"
            aria-label="arrow-right-circle"
            className="size-10 hover:scale-[1.1] transition-transform"
          />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:gap-8 place-content-center">
        {customersReviews.map((customer) => (
          <div
            key={customer.name}
            className="relative min-h-fit md:h-auto w-auto max-w-[384px] lg:w-full rounded-[20px] p-8 border border-[#eaeaea] pb-20">
            <div className="flex items-center gap-5 mb-6">
              <img
                className="size-[72px] rounded-full"
                src={customer.img}
                aria-label="Customer Avatar"
              />
              <div className="w-full flex gap-[6px] flex-col">
                <h3 className="text-lg font-semibold mb-0 text-[#343434]">
                  {customer.name}
                </h3>
                <p className="text-left text-sm font-normal m-0 text-[#969696]">
                  {customer.title}
                </p>
              </div>
            </div>
            <blockquote className="text-left text-sm font-normal m-0 text-[#969696]">
              {customer.review}
            </blockquote>
            <div className="flex absolute bottom-8">
              {Array.from({ length: customer.star }).map((_, index) => (
                <img
                  key={index}
                  src="images/star-rating.svg"
                  aria-label="Star rating"
                  className="size-6"
                  alt={`Star ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
