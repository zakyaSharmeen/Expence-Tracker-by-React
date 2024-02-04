import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
// import AppRoutes from "./config/routeConfig";
const App = () => {
  return (
    <>
      <Outlet />
      {/* <AppRoutes /> */}
    </>
  );
};

export default App;
