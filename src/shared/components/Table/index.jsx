// eslint-disable-next-line no-unused-vars
import Modal from "./Modals/WaitList";
import { useState } from "react";

function Table(props) {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <table className="table-auto w-full text-left dark:bg-slate-900 dark:text-slate-400">
        <thead>
          <tr className="text-left">
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {props.ques.map((que) => (
            <tr key={que.id} className="bg-none">
              <td
                className=""
                type="button"
                onClick={() => {
                  setModalData(que);
                  setShowModal(true);
                }}
              >
                {que.location}
              </td>
              <td>{que.time}</td>
              <td>{que.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      ></Modal>
    </>
  );
}

export default Table;
