import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./page/Home";
import { History } from "./page/History";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
