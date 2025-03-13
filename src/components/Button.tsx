import clsx from "clsx";

type ButtonProps = {
  id: string;
  title: string;
  rightIcon: React.ReactNode;
  hoverRightIcon?: React.ReactNode;
  containerClass?: string;
};

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  rightIcon,
  hoverRightIcon,
  containerClass,
}) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      <span className="relative block overflow-hidden font-general text-xs uppercase">
        <div className="w-full transition-transform duration-500 group-hover:translate-y-[-100%]">
          {title} {rightIcon}
        </div>

        <div className="absolute top-full w-full transition-transform duration-500 group-hover:translate-y-[-100%]">
          {title} {hoverRightIcon ? hoverRightIcon : rightIcon}
        </div>
      </span>
    </button>
  );
};

export default Button;
