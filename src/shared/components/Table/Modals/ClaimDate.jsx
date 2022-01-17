import React from "react";
import { FaRegEnvelope, FaKey } from "react-icons/fa";

export default function Modal(props) {
  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            style={{ background: "rgba(54, 25, 25, .00004)" }}
          >
            <div
              className="relative w-auto my-6 mx-3 rounded"
              style={{ background: "white" }}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none dark:bg-slate-900 dark:text-slate-400">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-xl text-center font-semibold dark:text-white">
                    I would like to join the wait list for{" "}
                    {props.modalData.time} at location:{" "}
                    {props.modalData.location}
                  </h5>
                  <button
                    className="text-3xl text-black dark:text-white"
                    onClick={() => props.setShowClaimModal(false)}
                  >
                    <span className="h-6 w-6 text-2xl block">×</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto z-30">
                  <div className="relative text-gray-700">
                    <input
                      className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="text"
                      placeholder="Regular input"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <FaRegEnvelope />
                    </div>
                  </div>
                  <div className="mb-4 relative text-gray-700">
                    <label
                      className="block mb-1"
                      htmlFor="forms-validationInputCode_error"
                    >
                      Password
                    </label>
                    <input
                      className="w-full h-10 px-3 relative text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      type="password"
                      id="forms-validationInputCode_error"
                      aria-describedby="passwordHelp"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <FaKey />
                    </div>
                    <span className="text-xs text-red-700" id="passwordHelp">
                      Your password is too short.
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b w-full">
                  <button
                    className="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowClaimModal(false)}
                  >
                    Claim
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
