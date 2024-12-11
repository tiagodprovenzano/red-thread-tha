import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeScreenFactory } from "@/factories/screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreenFactory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
