import React from "react";

const HomePage = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div classname="flex">
          <img classname="w-72 h-20" src="./assets/img/Dispora 1.png" alt="" />
        </div>
        <div classname="flex max-w-7xl items-center font-semibold">
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              HOME
            </a>
          </button>
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              PROFIL DINAS
            </a>
          </button>
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              BERITA & PENGUMUMAN
            </a>
          </button>
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              PROGRAM
            </a>
          </button>
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              GALERI
            </a>
          </button>
          <button>
            <a classname="text-xl p-4 mr-1" href="">
              FORUM
            </a>
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

      {/* <!-- content --> */}
      <div classname="p-11 font-semibold">
        <p>Rabu, 18 Oktober 2023</p>
      </div>

      <div classname="flex justify-between mx-14">
        <div classname="flex items-center">
          <button classname="w-16 h-16 bg-red-800 rounded-full">
            <img classname="px-5" src="./assets/img/<.png" alt="" />
          </button>
        </div>
        <div classname="flex">
          <div
            style="background-image: url(./assets/img/bg\ dispora\ 1.jpg)"
            classname="flex-col w-[1024px] h-[550px] rounded-xl"
          >
            <h1 classname="text-white text-4xl pt-32 pl-10 ml-12">
              Pelaksanaan Kegiatan Gotong Royong <br />
              Masyarakat Minahasa Selatan
            </h1>
            <p classname="text-white p-10 ml-12">
              Sabtu (11/10/2023) - Kegiatan gotong royong membersihkan <br />
              lingkungan seputaran Kecamatan Amurang pada hari Minggu, <br />
              12 Oktober 2023.
            </p>
          </div>
        </div>
        <div classname="flex items-center">
          <button classname="w-16 h-16 bg-red-800 rounded-full">
            <img classname="px-6" src="./assets/img/›.png" alt="" />
          </button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* <!-- Berita & Pengumuman --> */}
      <div classname="ml-28">
        <p classname="font-semibold text-2xl">Berita & Pengumuman</p>
      </div>
      <br />
      <hr classname="mx-28 shadow-xl" />

      <div classname="grid grid-cols-2 mx-auto">
        <div classname="flex mt-7 mx-auto gap-4">
          <img
            classname="w-72 h-40 rounded-md"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <div>
            <h1 classname="font-semibold text-2xl">
              Pelaksanaan Kegiatan <br />
              Gotong Royong <br />
              Masyarakat Minahasa <br />
              Selatan
            </h1>
            <p classname="text-[#838383] text-sm">Sabtu, 11 Oktober 2023</p>
            <h2>
              Kegiatan gotong royong <br />
              membersihkan lingkungan <br />
              seputaran Kecamatan Amurang <br />
              pada hari Minggu, 12 Oktober <br />
              2023.
            </h2>
          </div>
        </div>
        <div classname="flex mt-7 gap-4">
          <img
            classname="w-72 h-40 rounded-md"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <div>
            <h1 classname="font-semibold text-2xl">
              Pelaksanaan Kegiatan <br />
              Gotong Royong <br />
              Masyarakat Minahasa <br />
              Selatan
            </h1>
            <p classname="text-[#838383] text-sm">Sabtu, 11 Oktober 2023</p>
            <h2>
              Kegiatan gotong royong <br />
              membersihkan lingkungan <br />
              seputaran Kecamatan Amurang <br />
              pada hari Minggu, 12 Oktober <br />
              2023.
            </h2>
          </div>
        </div>
        <div classname="flex mt-7 mx-auto gap-4">
          <img
            classname="w-72 h-40 rounded-md"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <div>
            <h1 classname="font-semibold text-2xl">
              Pelaksanaan Kegiatan <br />
              Gotong Royong <br />
              Masyarakat Minahasa <br />
              Selatan
            </h1>
            <p classname="text-[#838383] text-sm">Sabtu, 11 Oktober 2023</p>
            <h2>
              Kegiatan gotong royong <br />
              membersihkan lingkungan <br />
              seputaran Kecamatan Amurang <br />
              pada hari Minggu, 12 Oktober <br />
              2023.
            </h2>
          </div>
        </div>
        <div classname="flex mt-7 gap-4">
          <img
            classname="w-72 h-40 rounded-md"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <div>
            <h1 classname="font-semibold text-2xl">
              Pelaksanaan Kegiatan <br />
              Gotong Royong <br />
              Masyarakat Minahasa <br />
              Selatan
            </h1>
            <p classname="text-[#838383] text-sm">Sabtu, 11 Oktober 2023</p>
            <h2>
              Kegiatan gotong royong <br />
              membersihkan lingkungan <br />
              seputaran Kecamatan Amurang <br />
              pada hari Minggu, 12 Oktober <br />
              2023.
            </h2>
          </div>
        </div>
      </div>
      {/* <!-- Berita & Pengumuman end --> */}
      <br />
      <br />
      <br />
      <br />
      {/* <!-- Program --> */}
      <div>
        <h1 classname="text-2xl ml-28 font-semibold">Program</h1>
      </div>

      <div classname="h-[550px] mt-4 mx-20 bg-[#C7C7C7] rounded-lg grid grid-cols-3 place-items-center">
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Beasiswa</h1>
        </div>
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Pembinaan Paskibraka</h1>
        </div>
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Pengaduan Masyarakat</h1>
        </div>
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Pembinaan Paskibraka</h1>
        </div>
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Beasiswa</h1>
        </div>
        <div classname="grid content-center place-items-center">
          <img
            classname="h-36 w-36 rounded-full bg-[#4C4C4C]"
            src="./assets/img/gotongroyong.jpeg"
            alt=""
          />
          <h1 classname="mt-2 text-xl">Program Beasiswa</h1>
        </div>
      </div>
      {/* <!-- Program end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Galeri start --> */}
      <div>
        <h1 classname="mt-5 text-2xl ml-28 font-semibold">Galeri</h1>
      </div>
      <br />
      <br />
      <div classname="grid grid-cols-3 ml-28">
        <div>
          <img
            classname="h-60 w-80 rounded-xl"
            src="./assets/img/toar-limimuut.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            classname="h-60 w-80 rounded-xl"
            src="./assets/img/toar-limimuut.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            classname="h-60 w-80 rounded-xl"
            src="./assets/img/toar-limimuut.jpeg"
            alt=""
          />
        </div>
      </div>
      {/* <!-- Geleri End --> */}
      <br />
      <br />
      <br />
      {/* <!-- Forum --> */}
      <div>
        <h1 classname="mt-5 text-2xl ml-28 font-semibold">Forum</h1>
      </div>

      <div classname="h-[550px] mt-4 mx-20 bg-[#C7C7C7] rounded-2xl">
        <div classname="flex justify-center pt-20">
          <input classname="w-[1000px] h-56" type="text" name="" id="" />
        </div>
        <div classname="ml-20 mt-6">
          <div classname="py-2">
            <h1 classname="text-2xl">Pemuda 1</h1>
            <p classname="text-lg text-[#848484]">
              Tambahkan program beasiswa min
            </p>
            <div classname="flex">
              <button classname="mr-5 w-7 h-7">
                <img src="./assets/img/🦆 icon _like 1_.png" alt="" />
              </button>
              <button classname="w-7 h-7">
                <img src="./assets/img/🦆 icon _dislike_.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div classname="ml-20 mt-6">
          <h1 classname="text-2xl">Pemuda 2</h1>
          <p classname="text-lg text-[#848484]">Ini website dinas?</p>
          <div classname="flex">
            <button classname="mr-5 w-7 h-7">
              <img src="./assets/img/🦆 icon _like 1_.png" alt="" />
            </button>
            <button classname="w-7 h-7">
              <img src="./assets/img/🦆 icon _dislike_.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Forum END --> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <div classname="h-56 bg-[#D9D9D9]">
        <div classname="flex justify-between mx-10 items-center mt-4">
          <div classname="h-36">
            <img src="./assets/img/dispora bgD9.png" alt="" />
          </div>
          <div classname="flex flex-col items-start">
            <h1 classname="text-2xl py-1 pt-5">Tentang Kami</h1>
            <button classname="text-xl py-1">
              <a href="">Visi Misi</a>
            </button>
            <button classname="text-xl py-1">
              <a href="">Tupoksi</a>
            </button>
            <button classname="text-xl py-1">
              <a href="">Struktur Dinas</a>
            </button>
          </div>
          <div classname="flex flex-col items-start">
            <h1 classname="text-2xl py-1 pt-5">Kontak</h1>
            <button classname="text-xl py-1">
              <a href="">(012) 12345678</a>
            </button>
            <button classname="text-xl py-1">
              <a href="">Jln. Trans Sulawesi, Amurang</a>
            </button>
            <button classname="text-xl py-1">
              <a href="">disporaminsel@gmail.com</a>
            </button>
          </div>
          <div classname="flex">
            <button>
              <a href="">
                <img
                  classname="h-10 px-2"
                  src="./assets/img/🦆 icon _instagram_.png"
                  alt=""
                />
              </a>
            </button>
            <button>
              <a href="">
                <img
                  classname="h-10 px-2"
                  src="./assets/img/🦆 icon _facebook_.png"
                  alt=""
                />
              </a>
            </button>
            <a href="">
              <img
                classname="h-10 px-2"
                src="./assets/img/🦆 icon _whatsapp_.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </div>
  );
};

export default HomePage;
