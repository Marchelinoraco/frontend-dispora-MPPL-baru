import React from "react";
import { Link } from "react-router-dom";
import Visimisi from "../pages/user/VisiMisi";
import Tupoksi from "../pages/user/Tupoksi";
import Strukturdinas from "../pages/user/StrukturDinas";
import Disporabgd9 from "../assets/img/dispora bgD9.png";
const footer = () => {
  return (
    <>
      {/* <!-- footer --> */}
      <div classname="h-56 bg-[#D9D9D9]">
        <div classname="flex justify-between mx-10 items-center mt-4">
          <div classname="h-36">
            <img src={Disporabgd9} alt="" />
          </div>
          <div classname="flex flex-col items-start">
            <h1 classname="text-2xl py-1 pt-5">Tentang Kami</h1>
            <button classname="text-xl py-1">
              <Link to={Visimisi}>Visi Misi</Link>
            </button>
            <button classname="text-xl py-1">
              <Link to={Tupoksi}>Tupoksi</Link>
            </button>
            <button classname="text-xl py-1">
              <Link to={Strukturdinas}>Struktur Dinas</Link>
            </button>
          </div>
          <div classname="flex flex-col items-start">
            <h1 classname="text-2xl py-1 pt-5">Kontak</h1>
            <button classname="text-xl py-1">
              <p>(012) 12345678</p>
            </button>
            <button classname="text-xl py-1">
              <p>Jln. Trans Sulawesi, Amurang</p>
            </button>
            <button classname="text-xl py-1">
              <p>disporaminsel@gmail.com</p>
            </button>
          </div>
          <div classname="flex">
            <button>
              <Link
                to={
                  "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
                }
              >
                <img
                  classname="h-10 px-2"
                  src="./assets/img/🦆 icon _instagram_.png"
                  alt=""
                />
              </Link>
            </button>
            <button>
              <Link
                to={
                  "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
                }
              >
                <img
                  classname="h-10 px-2"
                  src="./assets/img/🦆 icon _facebook_.png"
                  alt=""
                />
              </Link>
            </button>
            <Link
              to={
                "https://www.youtube.com/watch?v=kcnwI_5nKyA&list=PLFIM0718LjIUu3X2zYNqomEWs3sYd-fV1"
              }
            >
              <img
                classname="h-10 px-2"
                src="./assets/img/🦆 icon _whatsapp_.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </>
  );
};

export default footer;
