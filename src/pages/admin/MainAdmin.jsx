import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AddBerita from "./AddBerita";
import AddProgram from "./AddProgram";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";

const MainAdmin = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div classname="flex justify-center py-48">
        <button classname="px-20">
          <Link to={AddBerita}>
            <img src={Dispora1} alt="" />
            <p classname="text-xl font-semibold">Berita dan Pengumuman</p>
          </Link>
        </button>

        <button classname="px-20">
          <Link to={AddProgram}>
            <img src={Copyofdispora} alt="" />
            <p classname="text-xl font-semibold">Program Dinas</p>
          </Link>
        </button>
      </div>
      {/* <!-- Logout --> */}
      <div classname="flex justify-end mt-[-90px] mr-6">
        <button classname="bg-red-700 py-2 px-10 text-white rounded-lg">
          Logout
        </button>
      </div>
    </>
  );
};

export default MainAdmin;
