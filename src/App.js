import { BrowserRouter, Routes, Route } from "react-router-dom";
import Que from "./Views/Que";
import Header from "./shared/components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="que" element={<Que />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
