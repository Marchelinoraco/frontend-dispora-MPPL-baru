import React from "react";
import Footer from "../../components/Footer";
import Dispora from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";

const DetailPendaftar = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div classname="flex">
          <img classname="w-72 h-20" src={Dispora} alt="" />
        </div>

        <div classname="flex items-center mr-6">
          <img classname="h-20" src={Grup2} alt="" />
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div classname="flex justify-center items-center">
        <h1 classname="text-4xl text-center">
          Form Pendaftar Program Beasiswa
        </h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />

      <br />
      <br />
      <br />

      {/* <!-- Form --> */}
      <div classname="grid grid-cols-2 mx-56 py-5">
        <div classname="p-10">
          <h1 classname="text-xl">
            Nama <span classname="text-red-600">*</span>
          </h1>
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Umur <span classname="text-red-600">*</span>
          </h1>
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            KTP <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Foto Kopi Kartu Hasil Studi <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Surat Permohonan ke Bupati Minsel{" "}
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Biodata Pemohon <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Pas Foto Warna (3x4) 2 Lembar{" "}
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Surat Pernyataan Belum Pernah Menerima Beasiswa
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Surat Pernyataan Mutlak Penggunaan Data BPP “Minsel Maju”
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Surat Keterangan dari Pimpinan Fakultas/Prodi/Jurusan
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Foto kopi kartu Mahasiswa <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Foto kopi Kartu Keluarga <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
        <div classname="p-10">
          <h1 classname="text-xl">
            Foto kopi proposal penelitian/tugas akhir/skripsi/tesis disertai
            tanda tangan dosen pembimbing{" "}
            <span classname="text-red-600">*</span>
          </h1>
          <label for="">:</label>
          <input classname="py-3" type="file" name="" id="" />
        </div>
      </div>

      <div classname="flex justify-center items-center">
        <button classname="flex items-center bg-red-600 h-12 w-56 border-2 border-red-900 rounded-xl justify-center">
          <p classname="text-white">SIMPAN</p>
          <label for=""></label>
          <input type="submit" value="" />
        </button>
      </div>

      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default DetailPendaftar;
