import { navLists } from '@/lib/data';
import Button from '@/components/button';

type navMobileType = {
  handleToggleMenu: () => void;
};

const NavMobile = ({ handleToggleMenu }: navMobileType) => {
  return (
    <ul className="z-40 flex flex-col md:hidden absolute inset-x-0 -bottom-[290px] p-6 gap-4 bg-red_bg shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)]">
      {navLists.map((list) => (
        <li key={list.name} className="p-0 w-full" onClick={handleToggleMenu}>
          <a
            href={list.href}
            className="block text-white font-normal text-base">
            {list.name}
          </a>
        </li>
      ))}
      <div className="flex items-center gap-2.5 md:hidden ">
        <Button className="text-white bg-inherit border border-white px-8">
          Login
        </Button>
        <Button className="bg-light_red text-dark_red border-none px-8">
          Sign up
        </Button>
      </div>
    </ul>
  );
};

export default NavMobile;
