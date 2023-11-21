import React from "react";
import { Link } from "react-router-dom";
import HomePage from "../pages/user/HomePage";
import Dispora1 from "../assets/img/Dispora 1.png";
const navbar = () => {
  return (
    <>
      {/* <!-- navbar --> */}
      <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div classname="flex">
          <img classname="w-72 h-20" src={Dispora1} alt="" />
        </div>
        <div classname="flex max-w-7xl items-center font-semibold">
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              HOME
            </Link>
          </button>
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              PROFIL DINAS
            </Link>
          </button>
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              BERITA & PENGUMUMAN
            </Link>
          </button>
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              PROGRAM
            </Link>
          </button>
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              GALERI
            </Link>
          </button>
          <button>
            <Link classname="text-xl p-4 mr-1" to={HomePage}>
              FORUM
            </Link>
          </button>
        </div>
        <div classname="flex items-center">
          <input
            classname="flex w-28 h-8 shadow-sm rounded-xl border-2 border-red-800 mr-2"
            type="text"
          />
          <p classname="text-xl font-bold mr-5">Cari</p>
        </div>
      </div>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default navbar;
