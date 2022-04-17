import { Dictionary } from "./components/Dictionary/Dictionary";
import { NavBar } from "./components/NavBar/NavBar";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  return (
    <div className=" bg-blue-800 h-full">
      <div>
        <NavBar />
      </div>
      <div>
        <SideBar />
      </div>
      <div className=" bg-blue-800 mx-24 mt-12">
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
