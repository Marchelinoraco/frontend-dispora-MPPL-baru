import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProdukHukum from "./ProdukHukum";
import Renstra from "./Renstra";
import ProgramBeasiswa from "./ProgramBeasiswa";
import SejarahDinas from "./SejarahDinas";
import StrukturDinas from "./StrukturDinas";
import Tupoksi from "./Tupoksi";
import VisiMisi from "./VisiMisi";
import FormBeasiswa from "./FormBeasiswa";
import DetailPendaftar from "./DetailPendaftar";

const MainUser = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produkhukum" element={<ProdukHukum />} />
          <Route path="/programbeasiswa" element={<ProgramBeasiswa />} />
          <Route path="/renstra" element={<Renstra />} />
          <Route path="/sejarahdinas" element={<SejarahDinas />} />
          <Route path="/strukturdinas" element={<StrukturDinas />} />
          <Route path="/tupoksi" element={<Tupoksi />} />
          <Route path="/visimisi" element={<VisiMisi />} />
          <Route path="/formbeasiswa" element={<FormBeasiswa />} />
          <Route path="/detailpendaftar" element={<DetailPendaftar />} />
        </Routes>
      </div>
    </>
  );
};

export default MainUser;
