import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { History } from "./page/History";
import { CycleContextProvider } from "./context/CycleContextProvider";

export function Router() {
  return (
    <BrowserRouter>
      <CycleContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </CycleContextProvider>
    </BrowserRouter>
  );
}
