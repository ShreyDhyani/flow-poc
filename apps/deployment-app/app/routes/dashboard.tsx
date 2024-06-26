import React from "react";
import { Card } from "../../components";

export interface DashboardInterface {}

const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-x-2 gap-y-4 py-3">
      <Card name="Sample Name 1" />
      <Card name="Sample Name 2" />
      <Card name="Sample Name 3" />
      <Card name="Sample Name 4" />
      <Card name="Sample Name 5" />
      <Card name="Sample Name 6" />
      <Card name="Sample Name 7" />
      <Card name="Sample Name 8" />
      <Card name="Sample Name 9" />
    </div>
  );
};

export default Dashboard;
