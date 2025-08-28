import Image from "next/image";
const MainLayout = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className="w-full h-screen bg-red-00 relative flex flex-row">
      <div className="md:w-[276px] h-full bg-blue-100 absolute z-2"></div>
      <div className="w-full h-[56px] bg-green-100 absolute z-1 pl-[276px]">
        <div className="w-full h-full flex flex-row items-center justify-start gap-4 pr-4">
          <Image
            src="/images/icons/tempicon.png"
            alt="back-btn"
            width={30}
            height={30}
            className=""
            style={{ objectFit: "cover" }}
          />
          <div className="text-sm font-semibold">Admin User</div>
        </div>
      </div>
      <div className={`bg-red-0 left-[276px] top-[56px]  h-[94%] w-[84%] absolute z-10 overflow-y-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
