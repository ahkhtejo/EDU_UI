import React from "react";
//import { backgroud } from "../../assets/backgroupd";
import DateTime from "../../component/Date/date";

export default function ComingSoon() {
  return (
    <>
      {/* main */}
      <div className=" bg-indigo-700 text-white min-h-screen flex flex-col  ">
        {/* logo */}
        <div className=" m-14 text-8xl ">logo</div>
        {/* data and date */}

        <div className=" flex flex-1 flex-col items-center text-center justify-center">
          <DateTime />
          <h2 className=" text-9xl mt-9 font-bold ">COMING SOON</h2>
        </div>
      </div>
    </>
  );
}
