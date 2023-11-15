import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/LoginAdmin";
import MainUser from "./pages/user/MainUser";

function App() {
  return (
    <div className="App h-screen">
      <Routes>
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/*" element={<MainUser />} />
        <Route path="/pages/*" element={<MainAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
