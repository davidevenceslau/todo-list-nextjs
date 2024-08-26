import { Loading } from "../Loading";

type ButtonProps = {
  label: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ label, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="h-10 w-[100%] md:w-[auto] min-w-[170px] flex justify-center items-center px-4 pt-3 pb-2 md:mt-0 rounded-3xl bg-primay enabled:hover:bg-primay-highlight dark:bg-primay-dark enabled:dark:hover:bg-primay-dark-highlight disabled:opacity-80 disabled:cursor-not-allowed"
    >
      {isLoading && <Loading />}
      <span className="font-bold text-lg text-text-black dark:text-white">
        {label}
      </span>
    </button>
  );
}
