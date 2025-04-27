import Button from '@/components/button';
import { pricingLists } from '@/lib/data';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { CheckIcon, CheckIconGrey, CheckIconRed } from './svg';

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleClickAnnual = () => {
    setIsChecked(true);
  };

  const handleClickMonthly = () => {
    setIsChecked(false);
  };

  return (
    <section id="pricing" className="p-6 lg:py-[125px] lg:px-[100px]">
      <h2 className="text-2xl md:text-[52px] font-bold md:leading-[66px] text-center text-dark_red">
        Our Pricing
      </h2>
      <p className="text-sm font-normal text-center text-[#969696] my-4">
        Pay securely online and manage the booking via desktop or our in-sleigh
        app.
      </p>

      <div className="flex gap-6 justify-center my-6">
        <span
          onClick={handleClickMonthly}
          className="cursor-pointer font-medium text-sm md:text-base text-[#343434]">
          Monthly
        </span>
        <label>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isChecked}
            onChange={handleToggle}
          />
          <div className="relative w-11 h-6 bg-[#f2f2ff] rounded-full peer-focus:ring-4 peer-focus:ring-red-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-red_bg peer-checked:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red_bg"></div>
        </label>
        <span
          onClick={handleClickAnnual}
          className="cursor-pointer font-medium text-sm md:text-base text-[#343434]">
          Annually
        </span>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 lg:gap-6">
        {pricingLists.map((list) => (
          <div
            key={list.header}
            className={cn(
              'mt-[36px] py-[50px] px-6 rounded-[14px] w-auto max-w-[384px] lg:w-full shadow-[0px_10px_56px_0px_#0000000d]',
              list.monthly !== '$12' ? 'bg-white' : 'bg-red_bg'
            )}>
            <h3
              className={cn(
                'mb-6 text-xl md:text-2xl font-bold text-center',
                list.monthly !== '$12' ? 'text-dark_red' : 'text-white'
              )}>
              {list.header}
            </h3>
            <p
              className={cn(
                'text-center text-sm md:text-base',
                list.monthly !== '$12' ? 'text-[#969696]' : 'text-[#ececec]'
              )}>
              {list.description}
            </p>
            <div
              className={cn(
                'text-center text-[#969699] font-medium text-sm md:text-base my-6 md:my-9',
                list.monthly === '$12' && 'text-slate-200'
              )}>
              <strong
                className={cn(
                  'text-3xl md:text-5xl font-bold text-white',
                  list.monthly !== '$12' ? 'text-dark_red' : 'text-white'
                )}>
                {!isChecked ? list.monthly : list.annually}
              </strong>
              {!isChecked ? '/month' : '/year'}
            </div>
            <Button
              className={cn(
                'inline-block w-full py-3 px-[65px] border-none mb-[48px] font-bold text-sm md:text-base text-center ',
                list.monthly !== '$12'
                  ? 'bg-red_bg text-white'
                  : 'bg-white text-red_bg'
              )}
              aria-label="Select the Christmas Eve pricing plan">
              Select plan
            </Button>
            <ul className="space-y-8">
              {list.ul.map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    'flex items-center font-medium md:font-semibold',
                    list.monthly !== '$12' ? 'text-dark_red' : '',
                    list.monthly === '$5' && index >= list.ul.length - 2
                      ? 'line-through'
                      : ''
                  )}>
                  {list.monthly !== '$12' &&
                    !(list.monthly === '$5' && index >= list.ul.length - 2) && (
                      <CheckIconRed />
                    )}
                  {list.monthly === '$5' && index >= list.ul.length - 2 && (
                    <CheckIconGrey />
                  )}
                  {list.monthly === '$12' && <CheckIcon />}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
