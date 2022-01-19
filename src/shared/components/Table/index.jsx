// eslint-disable-next-line no-unused-vars
import WaitList from "./Modals/WaitList";
import ClaimDate from "./Modals/ClaimDate";
import { useState } from "react";

function Table(props) {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);

  return (
    <>
      <table className="table-auto px-4 w-full text-left">
        <thead>
          <tr className="text-left">
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {props.ques.map((que) => (
            <tr
              key={que.id}
              className="bg-none"
              style={{ borderBottom: "1px solid lightgray" }}
              onClick={() => {
                setModalData(que);
                setShowModal(true);
              }}
            >
              <td className="py-3 font-bold text-blue-400">{que.location}</td>
              <td>{que.time}</td>
              <td className="text-primary test-sm">{que.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <WaitList
        showModal={showModal}
        setShowModal={setShowModal}
        setShowClaimModal={setShowClaimModal}
        modalData={modalData}
      ></WaitList>
      <ClaimDate
        showModal={showClaimModal}
        setShowClaimModal={setShowClaimModal}
        modalData={modalData}
      ></ClaimDate>
    </>
  );
}

export default Table;
