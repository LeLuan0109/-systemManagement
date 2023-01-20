import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import Home from "./Layout/Home";
import Admin from "./Layout/Admin";
import Teacher from "./Layout/Teacher";
import QLCC from "./Layout/QLCC";

import Login from "./Layout/LogIn";
import CourseTail from "./Layout/Home/Course/CourseTail";

export const AppContext = createContext({
  user: {},
  setUser: () => {},
  course: {},
  setCourse: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState();

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser, course, setCourse }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/giangvien" element={<Teacher />} />
            <Route path="/qlcc" element={<QLCC />} />
            <Route path="/dangnhap" element={<Login />} />
            <Route path="/chitietkhoahoc" element={<CourseTail />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
