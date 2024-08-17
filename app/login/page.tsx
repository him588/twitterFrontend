import {
  EditIcon,
  EmailIcon,
  PasswordIcon,
  PersonIcon,
  XSvg,
} from "@/components/icons";
import React from "react";

function Page() {
  return (
    <div className="h-screen w-full bg-black flex items-center max-[450px]:min-h-screen ">
      <div className="w-1/2 flex justify-end px-10 max-[450px]:w-0">
        <XSvg className=" h-[300px] w-[300px] " fill="white" />
      </div>
      <div className="w-1/2 flex flex-col items-start max-[450px]:w-full">
        <p className="text-white font-extrabold text-4xl">Lets Go.</p>
        <div className=" flex flex-col gap-2 mt-2">
          <div className=" h-[50px] w-[300px] px-1 flex items-center gap-2 border-[1px] border-solid border-gray-500 rounded max-[450px]:h-[40px]">
            <PersonIcon h={30} w={30} c="white" />
            <input
              type="text"
              className=" bg-transparent w-[80%] outline-none  text-xl max-[450px]:text-base text-white"
              placeholder="User Name"
            />
          </div>
          <div className=" h-[50px] w-[300px] px-1 flex items-center gap-2 border-[1px] border-solid border-gray-500 rounded max-[450px]:h-[40px]">
            <PasswordIcon h={30} w={30} c="white" />
            <input
              type="text"
              className=" bg-transparent w-[80%] outline-none  text-xl max-[450px]:text-base text-white"
              placeholder="Password"
            />
          </div>
        </div>
        <button className=" w-[300px] h-[50px] text-xl font-medium text-white bg-[#317be3] rounded-full mt-2 max-[450px]:h-[40px] max-[450px]:text-base">
          Login
        </button>
        <div className=" flex items-center justify-center w-[300px]">
          <div className=" w-[250px] h-[1.2px] bg-white rounded-full mt-3"></div>
        </div>
        <p className="text-white font-semibold text-lg mt-2 px-2 max-[450px]:text-base">
          Don,t have account ?
        </p>
        <button className=" w-[300px] h-[50px] text-xl font-medium text-white border-[#317be3] border-[2px] border-solid rounded-full mt-2 max-[450px]:h-[40px] max-[450px]:text-base">
          Sigh in
        </button>
      </div>
    </div>
  );
}

export default Page;
