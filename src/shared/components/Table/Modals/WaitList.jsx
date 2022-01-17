import React from "react";

export default function Modal(props) {
  console.log(props.modalData, "DAAAA");
  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ background: "rgba(54, 25, 25, .00004)" }}
          >
            <div
              className="relative w-auto my-6 mx-auto max-w-3xl mx-3 rounded"
              style={{ background: "white" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none dark:bg-slate-900 dark:text-slate-400">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-xl text-center font-semibold dark:text-white">
                    Join wait list for {props.modalData.time} in{" "}
                    {props.modalData.location}
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-3xl text-black dark:text-white"
                    onClick={() => props.setShowModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto z-30">
                  <p>
                    If the top person cancels, the next in line will be
                    contacted.
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    people waiting list...
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b w-full">
                  <button
                    className="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowClaimModal(true)}
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
