import { BrowserRouter, Routes, Route } from "react-router-dom";
import Que from "./Views/Que";
import Header from "./shared/components/Header/index.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("darkmode"));

  function changeTheme() {
    if (theme) {
      setTheme(false);
      return localStorage.removeItem("darkmode");
    }
    setTheme(true);
    localStorage.setItem("darkmode", true);
  }

  return (
    <div
      className={`mx-3 ${
        localStorage.getItem("darkmode") ? "dark" : ""
      } dark:bg-slate-700 dark:text-slate-300`}
    >
      <Header
        className="sticky top-0 z-50"
        changeTheme={changeTheme}
        theme={theme}
      />
      <BrowserRouter>
        <Routes>
          <Route className="relative" path="que" element={<Que />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
