import { cn } from '@/lib/utils';

const Button = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-[5px] md:rounded-[8px] py-2 lg:py-3 px-4 lg:px-[45px] text-sm font-normal leading-[22px]',
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
