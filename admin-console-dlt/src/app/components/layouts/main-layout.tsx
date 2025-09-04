import Image from "next/image";
export interface IMenuItem {
  name: string;
  icon: string;
  link: string;
  subMenu?: IMenuItem[];
}
const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const menu: IMenuItem[] = [
    {
      name: "Dashboard",
      icon: "/images/icons/menu/element-4.png",
      link: "/dashboard",
    },
    { name: "Point", icon: "/images/icons/menu/note-2.png", link: "/point" },
    {
      name: "Campaign",
      icon: "/images/icons/menu/category-2.png",
      link: "/category",
    },
    { name: "Coupon", icon: "/images/icons/menu/shapes.png", link: "/product" },
  ];
  const developerMenu: IMenuItem[] = [
    {
      name: "API Key",
      icon: "/images/icons/menu/develop/bag-tick-2.png",
      link: "/dashboard",
    },
    {
      name: "API",
      icon: "/images/icons/menu/develop/document-forward.png",
      link: "/dashboard",
    },
    {
      name: "Documentation",
      icon: "/images/icons/menu/develop/document-text.png",
      link: "/dashboard",
    },
  ];
  const manageMenu: IMenuItem[] = [
    {
      name: "Users",
      icon: "/images/icons/menu/setting-admin/user-edit.png",
      link: "/dashboard",
    },
  ];
  const administrationMenu: IMenuItem[] = [
    {
      name: "Settings",
      icon: "/images/icons/menu/setting-admin/setting-5.png",
      link: "/dashboard",
    },
    {
      name: "Reports",
      icon: "/images/icons/menu/setting-admin/chart.png",
      link: "/dashboard",
    },
  ];
  return (
    <div className="w-full h-screen bg-red-00 relative flex flex-row">
      <div className="md:w-[276px] h-full bg-blue-0 absolute z-2">
        <div className="w-full bg-red-0 h-20 flex flex-rows justify-between items-center px-4">
          <div className="flex flex-row">
            <Image
              src="/images/icons/tempicon.png"
              alt="dlt-logo"
              width={30}
              height={30}
              className=""
              style={{ objectFit: "cover" }}
            />
            <div className="text-lg font-bold pl-2 pt-1">DLT Admin</div>
          </div>
          <div>
            <button className="px-3 py-1 rounded-md hover:bg-green-600">
              <Image
                src="/images/icons/MenuIcon.png"
                alt="dlt-logo"
                width={25}
                height={20}
                className=""
                style={{ objectFit: "cover" }}
              />
            </button>
          </div>
        </div>
        <div className="w-full bg-red-0 h-screen p-4">
          <div className="user-menu bg-red-0">
            {/* MAIN MENU */}
            <div className="text-gray-750 text-xl font-semibold">Main</div>
            <div className="grid grid-cols-1 gap-2 p-2">
              {menu.map((m, i) => (
                <div
                  className="flex flex-rows justify-between"
                  key={`item-${i}`}
                >
                  <div className="flex flex-row">
                    <Image
                      src={m.icon}
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className=""
                      style={{ objectFit: "cover" }}
                    />
                    <div className="text-md pl-2 pt-1">{m.name}</div>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/images/icons/arrow-up.png"
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className="rotate-180"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* DEVELOPER MENU */}
            <div className="text-gray-750 text-xl mt-4 font-semibold">
              Developer
            </div>
            <div className="grid grid-cols-1 gap-2 p-2">
              {developerMenu.map((m, i) => (
                <div
                  className="flex flex-rows justify-between"
                  key={`item-dev-${i}`}
                >
                  <div className="flex flex-row">
                    <Image
                      src={m.icon}
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className=""
                      style={{ objectFit: "cover" }}
                    />
                    <div className="text-md pl-2 pt-1">{m.name}</div>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/images/icons/arrow-up.png"
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className="rotate-180"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* MANAGE MENU */}
            <div className="text-gray-750 text-xl mt-4 font-semibold">
              Manage
            </div>
            <div className="grid grid-cols-1 gap-2 p-2">
              {manageMenu.map((m, i) => (
                <div
                  className="flex flex-rows justify-between"
                  key={`item-dev-${i}`}
                >
                  <div className="flex flex-row">
                    <Image
                      src={m.icon}
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className=""
                      style={{ objectFit: "cover" }}
                    />
                    <div className="text-md pl-2 pt-1">{m.name}</div>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/images/icons/arrow-up.png"
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className="rotate-180"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* ADMINISTRATION MENU */}
            <div className="text-gray-750 text-xl mt-4 font-semibold">
              Administration
            </div>
            <div className="grid grid-cols-1 gap-2 p-2">
              {administrationMenu.map((m, i) => (
                <div
                  className="flex flex-rows justify-between"
                  key={`item-dev-${i}`}
                >
                  <div className="flex flex-row">
                    <Image
                      src={m.icon}
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className=""
                      style={{ objectFit: "cover" }}
                    />
                    <div className="text-md pl-2 pt-1">{m.name}</div>
                  </div>

                  <div className="flex items-center">
                    <Image
                      src="/images/icons/arrow-up.png"
                      alt="dlt-logo"
                      width={20}
                      height={20}
                      className="rotate-180"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[72px] bg-green-0 absolute z-1 pl-[276px]">
        <div className="w-full h-full flex flex-row items-center justify-start gap-4 px-4 py-4 bg-green-0 border-b border-gray-200">
          <div className="flex flex-rows">
            <Image
              src="/images/icons/menu/home-2.png"
              alt="back-btn"
              width={20}
              height={20}
              className="py-1"
              style={{ objectFit: "cover" }}
            />
            <div className="mx-1 w-100 bg-red-0 h-5 flex flex-rows justify-start">
              <div className="text-md pl-2 pt-1 font-semibold">Home</div>
              <div className="text-md pl-2 pt-1 text-gray-500">{"/"}</div>
              <div className="text-md pl-2 pt-1 text-gray-500">Dashboard</div>
            </div>
          </div>
          <div className="stick flex flex-rows right-0 ml-auto bg-red-00">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
             <button className="px-3 py-1 rounded-md hover:bg-green-600">
              <Image
                src="/images/icons/menu/FlagContainer.png"
                alt="notification-icon"
                width={30}
                height={20}
                className=""
                style={{ objectFit: "cover" }}
              />
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-green-600">
              <Image
                src="/images/icons/menu/NotificationIcon.png"
                alt="notification-icon"
                width={20}
                height={20}
                className=""
                style={{ objectFit: "cover" }}
              />
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-green-600">
              <Image
                src="/images/icons/menu/sun.png"
                alt="notification-icon"
                width={20}
                height={20}
                className=""
                style={{ objectFit: "cover" }}
              />
            </button>
            <button className="px-3 py-1 rounded-md hover:bg-green-600">
              <Image
                src="/images/icons/menu/AvatarContainer.png"
                alt="notification-icon"
                width={35}
                height={20}
                className=""
                style={{ objectFit: "cover" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-red-0 left-[276px] top-[70px]  h-[94%] w-[84%] absolute z-10 overflow-y-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
