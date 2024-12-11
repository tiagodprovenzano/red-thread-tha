import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeScreenFactory, MovieScrenFactory } from "@/factories/screens";
import { Layout } from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreenFactory />} />
          <Route path="/movies/:id" element={<MovieScrenFactory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
