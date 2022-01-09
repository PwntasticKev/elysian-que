import { BrowserRouter, Routes, Route } from "react-router-dom";
import Que from "./Views/Que";
import Header from "./shared/components/Header/index.jsx";

function App() {
  return (
    <div className="App px-4">
      <Header className="sticky top-0 z-50" />
      <BrowserRouter>
        <Routes>
          <Route className="relative" path="que" element={<Que />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
