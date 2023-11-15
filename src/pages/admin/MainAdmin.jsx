import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import AddBerita from "./AddBerita";
import AddProgram from "./AddProgram";
import DataPendaftar from "./DataPendaftar";

const MainAdmin = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div classname="flex justify-center py-48">
        <Link to="">
          <button classname="px-20">
            <img src="./assets/img/Copy of Dispora 1.png" alt="" />
            <p classname="text-xl font-semibold">Berita dan Pengumuman</p>
          </button>
        </Link>
        <button classname="px-20">
          <img src="./assets/img/Copy of Dispora (1) 1.png" alt="" />
          <p classname="text-xl font-semibold">Program Dinas</p>
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
