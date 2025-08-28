"use client";
import Image from "next/image";
const LoginPage = () => {
  return (
    <div className="bg-red-0 h-screen w-full flex items-center justify-center">
      <div className="md:h-[600px] md:w-[450px] bg-yellow-0 flex flex-col">
        <div className="md:h-[70px] w-full bg-blue-00 flex items-start justify-center gap-1">
          <Image
            src="/images/icons/tempicon.png"
            alt="back-btn"
            width={30}
            height={30}
            className=""
            style={{ objectFit: "cover" }}
          />
          <div className="text-2xl font-bold">DLT Admin console</div>
        </div>
        <div className="w-full h-full shadow-xl/4 flex items-start justify-center bg-red-0">
          <div className="grid grid-cols-1 w-full">
            <div className="flex flex-col">
              <div className="font-bold text-2xl text-center">Sing in</div>
              <div className="text-xs text-gray-500 text-center mt-1">
                Please enter below details to access the dashboard
              </div>
            </div>
            {/* Input */}
            <div className="flex flex-col w-full flex flex-col gap-4 mt-4 px-8">
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold">Password</div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 text-sm rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="bg-blue-0 flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <input type="checkbox" className="accent-blue-500" />
                  <div className="text-sm font-semibold py-1">
                    Remember password
                  </div>
                </div>
                <div className="text-gray-500 text-sm py-1">
                  Forgot password ?
                </div>
              </div>
              <button className="bg-blue-500 font-semibold text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Login
              </button>
            </div>
            {/* Login via */}
            <div className="relative my-8">
              <div className="w-[85%] h-[1px] bg-gray-300 absolute left-8 bottom-2.5 z-0" />
              <div className="text-semibold absolute bottom-0 z-10 w-10 text-center bg-white left-[45%] text-gray-400">
                OR
              </div>
            </div>
            <div className="h-10 bg-blue-0 mx-8 flex flex-row items-center justify-between">
              <div className="w-[49%] border border-gray-300 h-full rounded flex flex-rows items-center justify-center gap-1 px-4">
                <Image
                  src="/images/icons/bi_facebook.png"
                  alt="back-btn"
                  width={15}
                  height={15}
                  className=""
                  style={{ objectFit: "cover" }}
                />
                <div className="text-sm font-semibold">Facebook</div>
              </div>
              <div className="w-[49%] border border-gray-300 h-full rounded flex flex-rows items-center justify-center gap-1 px-4">
                <Image
                  src="/images/icons/bi_google.png"
                  alt="back-btn"
                  width={15}
                  height={15}
                  className=""
                  style={{ objectFit: "contain" }}
                />
                <div className="text-sm font-semibold">Google</div>
              </div>
            </div>
            <div className="h-10 bg-blue-0 mx-8 flex flex-row items-center justify-center gap-1 text-sm">
              Don’t have an account yet?{" "}
              <div className="underline text-blue-500">Register</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
