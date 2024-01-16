import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./Home/MyFooter";

function App() {
  return (
    <>
      <NavBar />
      
      <div className="min-h-screen"> 
      {/* fix footer */}
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
