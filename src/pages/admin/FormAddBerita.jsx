import React from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";
import Grup3 from "../../assets/img/Group 3.png";

const FormAddBerita = () => {
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
      {/* <!-- navbar end --> */}
      <div>
        <img classname="h-14" src={Grup3} alt="" />
      </div>

      <div classname="mx-40">
        <h1 classname="text-4xl py-10">Berita dan Pengumuman</h1>
      </div>

      <div classname="flex flex-col mx-40">
        <label classname="p-2 text-2xl" for="">
          Gambar Utama Berita
        </label>
        <input classname="mt-4" type="file" name="" id="" />
      </div>
      <div classname="flex flex-col mx-40">
        <label classname="mt-4 text-2xl" for="">
          Judul
        </label>
        <input
          classname="border-2 border-black h-24 rounded-xl my-4"
          type="text"
        />
        <label classname="text-2xl" for="">
          Isi Berita
        </label>
        <input
          classname="border-2 border-black h-40 rounded-xl my-4"
          type="text"
        />
        <button classname="flex justify-center bg-green-500 py-3 mx-96 rounded-xl my-10">
          SIMPAN
          <input type="submit" value="" />
        </button>
      </div>
    </div>
  );
};

export default FormAddBerita;
