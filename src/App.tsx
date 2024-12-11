import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeScreenFactory, MovieScrenFactory } from "@/factories/screens";
import { Layout } from "./layout";
import { SessionContextProvider } from "./main/contexts";

function App() {
  return (
    <SessionContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeScreenFactory />} />
            <Route path="/movies/:id" element={<MovieScrenFactory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SessionContextProvider>
  );
}

export default App;
