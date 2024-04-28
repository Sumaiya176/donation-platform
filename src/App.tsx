import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="dark:bg-black">
      <div className="mx-16 dark:bg-black">
        <MainLayout />
        <Outlet />
        <ScrollToTop smooth className="dark:text-white" />
      </div>
    </div>
  );
}

export default App;
