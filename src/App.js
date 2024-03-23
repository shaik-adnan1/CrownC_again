import "./index.scss";
import Directory from "./components/directory/directory.component";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";


const Shop = () => {
  return <h1> I am the shop comp</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
