import React from "react";
import yourFD from "../utils/yourFD";

const Notification = () => {
  const yourinfo = yourFD.yourFDinfo;
  return (
    <div className="flex flex-wrap">
      {yourinfo.map((info) => (
        <>
          <div
            key={info.name}
            className=" m-6 p-4 my-0 w-[450px] rounded-lg shadow-md"
          >
            <div className="font-bold text-xl">{info.box_name}</div>

            <div className="flex mt-4 ">
              <div className="mb-3 text-sm  text-slate-400">{info.time}</div>
            </div>
            <div className="flex ">
              <div>
                <div className="text-5xl bg-gray-100 px-2 font-bold ">{info.date}</div>
                <div className="bg-red-500 text-white px-1">
                  {info.date_month_year}
                </div>
              </div>
              <div className=" mb-4">
                <div className="font-bold ml-14 mb-2">{info.name}</div>
                <div className="flex ml-12 my-1 ">
                  <div className="mx-1.5  ">
                  <div className="text-slate-400">Deposit Amt</div>
                    <div className="font-bold">Rs {info.Deposit_Amt}</div>
                  </div>
                  <div className="mx-1.5  ">
                  <div className="text-slate-400">Tennure</div>
                    <div className="font-bold">{info.Tennure}</div>
                  </div>
                  <div className="mx-1.5  ">
                    <div className="text-slate-400">Interest Rate</div>
                    <div className="font-bold">{info.Interest_rate}</div>
                  </div>
                </div>
              </div>
            </div>
            {info.video_kyc === true ? (
              <div className=" mt-4">
                <button className=" bg-blue-700 text-white py-3 w-[48%] rounded-lg mx-2">
                  Complete Now
                </button>
                <button className=" border border-blue-700 text-blue-700 py-3 w-[48%] rounded-lg">
                  Reschedule
                </button>
              </div>
            ) : info.pending_payment === true ? (
              <div className="mt-4">
                <button className=" bg-blue-700 text-white  py-3 w-[48%] rounded-lg mx-2">
                  Pay Now
                </button>
                <button className=" border border-blue-700 text-blue-700 px-2 py-3 w-[48%] rounded-lg">
                  Cancel Application
                </button>
              </div>
            ) : (
              <div className="  mt-4">
                <button className=" bg-blue-700 text-white px-2 py-3 w-[48%] rounded-lg mx-2">
                  Renew Now
                </button>
                <button className=" border border-blue-700 text-blue-700 px-2 py-3 w-[48%] rounded-lg">
                  Compare Other FDs
                </button>
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default Notification;
