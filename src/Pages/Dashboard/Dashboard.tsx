import { Outlet } from "react-router-dom";
import DashNav from "../../Layouts/DashNav/DashNav";

const Dashboard = () => {
  return (
    <div className="my-10 mx-16">
      <DashNav />
      <Outlet />
    </div>
  );
};

export default Dashboard;
