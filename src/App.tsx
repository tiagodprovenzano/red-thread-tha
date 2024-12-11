import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeScreenFactory } from "@/factories/screens";
import { Layout } from "./layout";
import { MovieScreen } from "./screens/movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreenFactory />} />
          <Route path="/movies/:id" element={<MovieScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
