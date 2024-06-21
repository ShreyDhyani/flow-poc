import React from "react";
import { Card } from "../../components";

export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <div>
      <Card name="Sample Name" />
      {/* <div className="border px-5 py-3 bg-blue-300 ">{"JOHN DOE"}</div> */}
    </div>
  );
};

export default Dashboard;
