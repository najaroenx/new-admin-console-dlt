"use client";
import Image from "next/image";
import MainLayout from "../components/layouts/main-layout";
const DashboardPage = () => {
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
      <div className="mx-4 mt-4 bg-blue-0 h-[434px] mb-10 flex flex-row justify-between px-4">
        <div className="w-[300px] h-full grid grid-cols-1">
            <div className="w-full h-[134px] bg-white border border-gray-200 rounded"></div>
            <div className="w-full h-[134px] bg-white border border-gray-200 rounded"></div>
            <div className="w-full h-[134px] bg-white border border-gray-200 rounded"></div>
        </div>
        <div className="w-[450px] bg-white border px-4 py-2">
            <div className="font-semibold">Revenue</div>
        </div>
        <div className="w-[550px] bg-white border px-4 py-2">
             <div className="font-semibold">Customer</div>
        </div>
      </div>
      <div className="mx-4 mt-4 bg-blue-100 h-[434px] mb-10">
        <div className="w-[260px] bg-pink-400 h-full"></div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
