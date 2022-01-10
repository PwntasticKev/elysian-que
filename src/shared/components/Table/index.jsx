import Modal from "../Modal";
import { useState } from "react";

function Table() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-left">
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-left">
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  );
}

export default Table;
