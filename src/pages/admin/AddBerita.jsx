import React from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";
import Copyofdispora from "../../assets/img/Copy of Dispora (1) 1.png";
import Grup4 from "../../assets/img/Group 4.png";
import Grup5 from "../../assets/img/Group 5.png";

const AddBerita = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div classname="flex">
          <img classname="w-72 h-20" src={Dispora1} alt="" />
        </div>

        <div classname="flex items-center mr-6">
          <img classname="h-20" src={Grup2} alt="" />
        </div>
      </div>

      <div>
        <img classname="h-14" src={Grup3} alt="" />
      </div>

      <div classname="mx-40">
        <h1 classname="text-4xl py-10">Berita dan Pengumuman</h1>
        <button classname="px-10 py-3 my-10 rounded-xl text-xl bg-green-500">
          <span>+</span>Tambah Berita
        </button>
      </div>

      <div classname="h-52 mx-40 flex">
        <img
          classname="h-60 rounded-tl-xl rounded-bl-xl"
          src={Copyofdispora}
          alt=""
        />

        <div classname="p-5 bg-[#D9D9D9] rounded-tr-xl rounded-br-xl">
          <h1 classname="font-semibold text-xl py-2">
            Pelaksanaan Kegiatan Gotong Royong Masyarakat Minahasa Selatan
          </h1>
          <p classname="text-[#595959] py-1">Sabtu, 11 Oktober 2023</p>
          <p>
            Kegiatan gotong royong membersihkan lingkungan seputaran Kecamatan
            Amurang pada <br />
            hari Minggu, 12 Oktober 2023.
          </p>
          <div classname="flex justify-end">
            <button classname="p-4">
              <img classname="h-10" src={Grup4} alt="" />
            </button>
            <button classname="p-4">
              <img classname="h-10" src={Grup5} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classname="h-52 mx-40 flex my-10">
        <img
          classname="h-60 rounded-tl-xl rounded-bl-xl"
          src={Copyofdispora}
          alt=""
        />

        <div classname="p-5 bg-[#D9D9D9] rounded-tr-xl rounded-br-xl">
          <h1 classname="font-semibold text-xl py-2">
            Pelaksanaan Kegiatan Gotong Royong Masyarakat Minahasa Selatan
          </h1>
          <p classname="text-[#595959] py-1">Sabtu, 11 Oktober 2023</p>
          <p>
            Kegiatan gotong royong membersihkan lingkungan seputaran Kecamatan
            Amurang pada <br />
            hari Minggu, 12 Oktober 2023.
          </p>
          <div classname="flex justify-end">
            <button classname="p-4">
              <img classname="h-10" src={Grup4} alt="" />
            </button>
            <button classname="p-4">
              <img classname="h-10" src={Grup5} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div classname="h-52 mx-40 flex">
        <img
          classname="h-60 rounded-tl-xl rounded-bl-xl"
          src={Copyofdispora}
          alt=""
        />

        <div classname="p-5 bg-[#D9D9D9] rounded-tr-xl rounded-br-xl">
          <h1 classname="font-semibold text-xl py-2">
            Pelaksanaan Kegiatan Gotong Royong Masyarakat Minahasa Selatan
          </h1>
          <p classname="text-[#595959] py-1">Sabtu, 11 Oktober 2023</p>
          <p>
            Kegiatan gotong royong membersihkan lingkungan seputaran Kecamatan
            Amurang pada <br />
            hari Minggu, 12 Oktober 2023.
          </p>
          <div classname="flex justify-end">
            <button classname="p-4">
              <img classname="h-10" src={Grup4} alt="" />
            </button>
            <button classname="p-4">
              <img classname="h-10" src={Grup5} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBerita;
