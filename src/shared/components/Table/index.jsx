// eslint-disable-next-line no-unused-vars
import Modal from "../Modal";
import { useState } from "react";

function Table() {
  const [showModal, setShowModal] = useState(false);
  // const [modalData, setModalData] = useState({});

  return (
    <div>
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
          <tr className="bg-none text-rose-600">
            <td
              className="text-rose-600"
              type="button"
              onClick={() => setShowModal(true)}
            >
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
          </tr>
          <tr>
            <td>Shining Star</td>
          </tr>
        </tbody>
      </table>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </div>
  );
}

export default Table;
