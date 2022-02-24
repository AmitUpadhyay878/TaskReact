import { Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./compo/List/List";
import Navbar from "./Navbar";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
