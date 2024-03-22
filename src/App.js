import "./index.scss";
import Directory from "./components/directory/directory.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <h1>I am the navigation bar.</h1>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1> I am the shop comp</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
