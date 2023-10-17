import { twMerge } from "tailwind-merge";

interface IPageContainer {
  children: React.ReactNode;
  className?: string;
}
const PageContainer = ({ children, className }: IPageContainer) => {
  return (
    <div
      className="flex min-h-screen w-screen justify-center
  bg-gray-200"
    >
      <div className={twMerge("h-full w-full max-w-screen-2xl", className)}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
