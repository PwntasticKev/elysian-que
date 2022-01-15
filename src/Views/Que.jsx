import Table from "../shared/components/Table";
import { useState, useEffect } from "react";
import axios from "axios";

function Que() {
  const [ques, setQues] = useState([]);

  useEffect(() => {
    const getQues = async () => {
      const { data } = await axios.get("/test");
      setQues(data);
    };
    getQues();
  }, []);

  return (
    <div>
      <h2 className="m-0 font-bold text-xl divide-y divide-solid mb-5">
        Available Times
      </h2>
      <Table ques={ques} />
    </div>
  );
}

export default Que;
