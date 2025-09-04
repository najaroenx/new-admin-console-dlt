"use client";
import Image from "next/image";
import MainLayout from "../components/layouts/main-layout";
import RevenueCard from "../components/dashboard/revenue";
import InvoicesComponent from "../components/dashboard/invoices";
import IncomeChartCard from "../components/dashboard/total-income-invoices";
import TopSalesSemiDonut from "../components/dashboard/top-sales-semi-donut";
const DashboardPage = () => {
  const customers = [
    {
      name: "Emily Clark",
      invoices: 45,
      outstanding: 3589,
      img: "/images/icons/avatar/avatar1.png",
    },
    {
      name: "John Doe",
      invoices: 30,
      outstanding: 1200,
      img: "/images/icons/avatar/avatar2.png",
    },
    {
      name: "Jane Smith",
      invoices: 25,
      outstanding: 800,
      img: "/images/icons/avatar/avatar3.png",
    },
    {
      name: "Michael Brown",
      invoices: 40,
      outstanding: 2200,
      img: "/images/icons/avatar/avatar3.png",
    },
    {
      name: "Sarah Johnson",
      invoices: 15,
      outstanding: 500,
      img: "/images/icons/avatar/avatar4.png",
    },
    {
      name: "Sarah Johnson",
      invoices: 15,
      outstanding: 500,
      img: "/images/icons/avatar/avatar5.png",
    },
  ];
  return (
    <MainLayout className="mb-10">
      <div className="flex flex-row justify-between p-4 bg-blue-00">
        <div className="font-semibold text-md text-center my-2">Dashboard</div>
        <div className="flex flex-row justify-center gap-2">
          <div className="h-10 border border-gray-300  flex items-center justify-center rounded bg-gray-200 text-sm px-2 gap-1">
            <div>22/08/2025 - 30/08/2025</div>
            <Image
              src="/images/icons/Calendar_Icon.png"
              alt="back-btn"
              width={15}
              height={15}
              className=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-10 w-[160px] border flex justify-center items-center text-white font-semibold rounded-md bg-[#7539FF]">
            <div>Create new</div>
            <Image
              src="/images/icons/arrow-down.png"
              alt="back-btn"
              width={15}
              height={15}
              className="ml-2"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="h-10 w-[120px] border flex justify-center items-center font-semibold rounded-md bg-white gap-1">
            <Image
              src="/images/icons/export.png"
              alt="back-btn"
              width={20}
              height={20}
              className="ml-2"
              style={{ objectFit: "cover" }}
            />
            <div>Export</div>
          </div>
        </div>
      </div>
      <div className="m-4 h-[165px] rounded bg-[#7539FF] flex flex-row justify-between p-4">
        <div className="grid grid-cols-1">
          <div className="flex flex-col">
            <div className="text-xl font-semibold text-white">
              Good Morning, Jafna Cremson
            </div>
            <div className="text-md text-white">
              You have 15+ invoices saved to draft that has to send to customers
            </div>
          </div>
          <div className="flex flex-row mt-4 gap-2">
            <div className="flex flex-row gap-2">
              <Image
                src="/images/icons/Calendar_Icon.png"
                alt="back-btn"
                width={20}
                height={15}
                className="py-2"
                style={{ objectFit: "contain" }}
              />
              <div className="text-md text-white py-4">Friday, 24 Mar 2025</div>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src="/images/icons/ClockIcon.png"
                alt="back-btn"
                width={20}
                height={15}
                className="py-2"
                style={{ objectFit: "contain" }}
              />
              <div className="text-md text-white py-4">11:24 PM</div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/icons/dashboard-person.png"
            alt="back-btn"
            width={200}
            height={200}
            className=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="mx-4 mt-6 bg-blue-00 flex flex-row justify-between gap-2">
        {[1, 2, 3].map((item) => (
          <div
            className="w-[32%] h-[200px] bg-pink-0 border border-gray-200 rounded p-4"
            key={item}
          >
            <div className="flex flex-row items-start gap-1">
              <Image
                src="/images/icons/OverviewIcon.png"
                alt="back-btn"
                width={20}
                height={15}
                className=""
                style={{ objectFit: "contain" }}
              />
              <div className="font-semibold text-md">Overview</div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-row gap-2">
                <Image
                  src="/images/icons/OverviewItemIconContainer.png"
                  alt="back-btn"
                  width={44}
                  height={44}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <div>Invoices</div>
                  <div className="font-semibold text-lg">0.00</div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/images/icons/OverviewDoc.png"
                  alt="back-btn"
                  width={44}
                  height={44}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <div>Quotations</div>
                  <div className="font-semibold text-lg">0.00</div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/images/icons/OverviewDuedate.png"
                  alt="back-btn"
                  width={44}
                  height={44}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <div>Amount Due</div>
                  <div className="font-semibold text-lg">0.00</div>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/images/icons/OverviewPerson.png"
                  alt="back-btn"
                  width={44}
                  height={44}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <div>Customers</div>
                  <div className="font-semibold text-lg">0</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-4 bg-blue-00 h-[434px] mb-10 flex flex-row justify-between px-0 gap-4">
        <div className="w-[55%] h-full flex flex-col justify-between">
          <div className="w-full h-[134px] bg-white border border-gray-200 rounded shadow-md/3 flex flex-col p-6 relative">
            <div className="w-full bg-blue-0 flex flex-rows justify-between border-b-1 border-gray-200 pb-4">
              <div className="grid grid-cols-2">
                <div className="text-xl text-gray-600 col-span-2">
                  Total Sales
                </div>
                <div className="text-sm text-gray-700 font-semibold">645</div>
                <div className="h-[20px] rounded bg-[#f4fbf7] border border-green-200 text-green-400 text-xs flex flex-rows justify-center">
                  +45%
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/icons/SidebaIcon.png"
                  alt="back-btn"
                  width={48}
                  height={15}
                  className=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start mt-2">
              <div className="text-gray-900 text-sm underline">
                View Inventory
              </div>
            </div>
            <div className="absolute right-0 -bottom-22 h-full">
              <Image
                src="/images/icons/SidebarGraphics1.png"
                alt="back-btn"
                width={50}
                height={100}
                className=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="w-full h-[134px] bg-white border border-gray-200 rounded shadow-md/3 flex flex-col p-6 relative">
            <div className="w-full bg-blue-0 flex flex-rows justify-between border-b-1 border-gray-200 pb-4">
              <div className="grid grid-cols-2">
                <div className="text-xl text-gray-600 col-span-2">
                  Total Sales
                </div>
                <div className="text-sm text-gray-700 font-semibold">645</div>
                <div className="h-[20px] rounded bg-[#f4fbf7] border border-green-200 text-green-400 text-xs flex flex-rows justify-center">
                  +45%
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/icons/SidebaIcon.png"
                  alt="back-btn"
                  width={48}
                  height={15}
                  className=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start mt-2">
              <div className="text-gray-900 text-sm underline">
                View Inventory
              </div>
            </div>
            <div className="absolute right-0 -bottom-22 h-full">
              <Image
                src="/images/icons/SidebarGraphics2.png"
                alt="back-btn"
                width={50}
                height={100}
                className=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="w-full h-[134px] bg-white border border-gray-200 rounded shadow-md/3 flex flex-col p-6 relative">
            <div className="w-full bg-blue-0 flex flex-rows justify-between border-b-1 border-gray-200 pb-4">
              <div className="grid grid-cols-2">
                <div className="text-xl text-gray-600 col-span-2">
                  Total Sales
                </div>
                <div className="text-sm text-gray-700 font-semibold">645</div>
                <div className="h-[20px] rounded bg-[#f4fbf7] border border-green-200 text-green-400 text-xs flex flex-rows justify-center">
                  +45%
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src="/images/icons/SidebaIcon.png"
                  alt="back-btn"
                  width={48}
                  height={15}
                  className=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="flex flex-row justify-start mt-2">
              <div className="text-gray-900 text-sm underline">
                View Inventory
              </div>
            </div>
            <div className="absolute right-0 -bottom-21 h-full">
              <Image
                src="/images/icons/SidebarGraphics3.png"
                alt="back-btn"
                width={50}
                height={100}
                className=""
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] bg-white border px-4 py-2 border-gray-200 rounded shadow-md/3">
          <div className="font-semibold text-xl">Revenue</div>
          <RevenueCard />
        </div>
        <div className="w-full bg-white border px-4 py-2 border-gray-200 rounded shadow-md/3">
          <div className="font-semibold text-xl mb-4">Customers</div>
          {customers.map((customer, index) => (
            <div
              className="w-full h-[48px] bg-blue-0 flex flex-row justify-between my-2"
              key={`customer-${index}`}
            >
              <div className="text-sm font-semibold text-gray-500 flex items-center gap-2">
                <Image
                  src={customer.img}
                  alt="back-btn"
                  width={48}
                  height={48}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <div>{customer.name}</div>
                  <div className="text-xs text-gray-400">
                    No of Invoices : {customer.invoices}
                  </div>
                </div>
              </div>
              <div className="font-semibold text-gray-500 items-center grid grid-cols-1">
                <div className="text-xs leading-5">Outstanding </div>
                <div className="text-md text-gray-900">
                  ${customer.outstanding}
                </div>
              </div>
              <div className="flex flex-rows items-center gap-2">
                <button>
                  <Image
                    src="/images/icons/OverviewItemIconContainer.png"
                    alt="back-btn"
                    width={30}
                    height={48}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </button>
                <button>
                  <Image
                    src="/images/icons/OverviewDoc.png"
                    alt="back-btn"
                    width={30}
                    height={48}
                    className=""
                    style={{ objectFit: "contain" }}
                  />
                </button>
              </div>
            </div>
          ))}
          <div className="w-full bg-gray-200 h-8 flex items-center justify-center font-semibold underline">
            All Customers
          </div>
        </div>
      </div>
      <div className="mx-4 mt-4 bg-blue-0 border border-gray-200 rounded h-[434px] shadow-md gird grid-cols-1  overflow-y-auto">
        <div className="flex flex-rows justify-between p-8">
          <div className="text-xl font-semibold">Invoices</div>
          <button className="h-10 w-[160px]  flex justify-center items-center font-semibold rounded-md bg-[#7539FF] text-white gap-1">
            View All invoices
          </button>
        </div>
        <InvoicesComponent className="mb-10" />
      </div>
      <div className="mx-4 mt-4 bg-blue-0 h-[460px] flex flex-rows gap-8 mb-10">
        <div className="w-[70%] bg-pink-0 h-full gird grid-cols-1 border border-gray-200 rounded shadow-md/3 overflow-y-auto">
          <div className="flex flex-rows justify-start font-semibold p-8">
            Recent Transactions
          </div>
          <div className="gird grid-cols-1 px-8">
            <h4 className="text-sm font-semibold mb-4">Today</h4>
            <div className="w-full flex flex-rows justify-between">
              <div className="flex flex-rows gap-4">
                <Image
                  src="/images/icons/paypal.png"
                  alt="back-btn"
                  width={48}
                  height={48}
                  className="p-1"
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <p className="text-black">Andrew James</p>
                  <p className="text-gray-400 text-sm">#INV45478</p>
                </div>
              </div>
              <div className="flex items-center w-[87px]">
                <div className="bg-[#f4fbf7] mx-auto px-2 py-1 rounded text-green-500 border border-[#eaf7ef]">
                  +1200
                </div>
              </div>
            </div>
            <div className="w-full flex flex-rows justify-between">
              <div className="flex flex-rows gap-4">
                <Image
                  src="/images/icons/paypal.png"
                  alt="back-btn"
                  width={48}
                  height={48}
                  className="p-1"
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <p className="text-black">Andrew James</p>
                  <p className="text-gray-400 text-sm">#INV45478</p>
                </div>
              </div>
              <div className="flex items-center w-[87px]">
                <div className="bg-[#f4fbf7] mx-auto px-2 py-1 rounded text-green-500 border border-[#eaf7ef]">
                  +1200
                </div>
              </div>
            </div>
            <div className="border-b-1 border-gray-300 mt-4" />
          </div>
          <div className="gird grid-cols-1 px-8 mt-4">
            <h4 className="text-sm font-semibold mb-4">Yesterday</h4>
            <div className="w-full flex flex-rows justify-between">
              <div className="flex flex-rows gap-4">
                <Image
                  src="/images/icons/paypal.png"
                  alt="back-btn"
                  width={48}
                  height={48}
                  className="p-1"
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <p className="text-black">Andrew James</p>
                  <p className="text-gray-400 text-sm">#INV45478</p>
                </div>
              </div>
              <div className="flex items-center w-[87px]">
                <div className="bg-[#f4fbf7] mx-auto px-2 py-1 rounded text-green-500 border border-[#eaf7ef]">
                  +1200
                </div>
              </div>
            </div>
            <div className="w-full flex flex-rows justify-between">
              <div className="flex flex-rows gap-4">
                <Image
                  src="/images/icons/paypal.png"
                  alt="back-btn"
                  width={48}
                  height={48}
                  className="p-1"
                  style={{ objectFit: "contain" }}
                />
                <div className="grid grid-cols-1">
                  <p className="text-black">Andrew James</p>
                  <p className="text-gray-400 text-sm">#INV45478</p>
                </div>
              </div>
              <div className="flex items-center w-[87px]">
                <div className="bg-[#fef4f4] mx-auto px-2 py-1 rounded text-red-500 border border-[#fde9e9]">
                  -1200
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-pink-0 h-full border border-gray-200 rounded shadow-md/3 overflow-y-auto">
          <div className="flex flex-rows justify-start font-semibold p-8">
            Quotations
          </div>
          <div className="bg-blue-0 w-full px-8 h-full">
            {customers.map((customer, index) => (
              <div
                key={`index-of-${index}`}
                className="flex flex-rows justify-between border-b border-gray-200 my-2"
              >
                <div className="flex flex-rows">
                  <div className="">
                    <Image
                      src={customer.img}
                      alt="back-btn"
                      width={48}
                      height={48}
                      className="p-1"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="grid grid-cols-1 py-2 mx-2">
                    <div className="text-sm text-gray-900 font-semibold">
                      {customer.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      #INV{customer.invoices}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 py-2 mx-2">
                  {index % 2 === 0 ? (
                    <div className="w-[85px] h-[25px] text-xs text-blue-500 flex flex-row justify-center items-center bg-[#f4f9fe] border-[#eaf2fe] rounded">
                      accept
                    </div>
                  ) : index % 3 === 0 ? (
                    <div className="w-[85px] h-[20px] text-xs text-red-500 flex flex-row justify-center items-center   bg-[#fde9e9] border-[#eaf7ef] rounded">
                      daft
                    </div>
                  ) : (
                    <div className="w-[85px] h-[20px] text-xs text-green-500 flex flex-row justify-center items-center  bg-[#f4fbf7] border-[#eaf7ef]  rounded">
                      paid
                    </div>
                  )}

                  <div className="text-xs text-gray-400">
                    Due on 12 Aug, 2025
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-pink-0 h-full overflow-y-auto grid grid-cols-1 gap-4">
          <IncomeChartCard />
          <div className="h-[356px] bg-blue-0 mr-4 border border-gray-200 rounded px-">
            <TopSalesSemiDonut />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
