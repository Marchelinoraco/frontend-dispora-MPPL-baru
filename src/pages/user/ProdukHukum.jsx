import React from "react";

const ProdukHukum = () => {
  return (
    <div class="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div class="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div class="flex">
          <img class="w-72 h-20" src="./assets/img/Dispora 1.png" alt="" />
        </div>
        <div class="flex max-w-7xl items-center font-semibold">
          <button>
            <a class="text-xl p-4 mr-1" href="">
              HOME
            </a>
          </button>
          <button>
            <a class="text-xl p-4 mr-1" href="">
              PROFIL DINAS
            </a>
          </button>
          <button>
            <a class="text-xl p-4 mr-1" href="">
              BERITA & PENGUMUMAN
            </a>
          </button>
          <button>
            <a class="text-xl p-4 mr-1" href="">
              PROGRAM
            </a>
          </button>
          <button>
            <a class="text-xl p-4 mr-1" href="">
              GALERI
            </a>
          </button>
          <button>
            <a class="text-xl p-4 mr-1" href="">
              FORUM
            </a>
          </button>
        </div>
        <div class="flex items-center">
          <input
            class="flex w-28 h-8 shadow-sm rounded-xl border-2 border-red-800 mr-2"
            type="text"
          />
          <p class="text-xl font-bold mr-5">Cari</p>
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- content --> */}
      <div class="flex justify-center items-center">
        <h1 class="text-4xl text-center">Produk Hukum</h1>
      </div>
      <br />
      <br />
      <hr class="mx-20" />

      {/* <!-- content  --> */}
      <br />
      <br />
      <div class="mx-56">
        <h1 class="text-2xl text-justify font-semibold">Produk Hukum :</h1>
        <br />
        <br />
        <p class="text-2xl text-justify">
          1. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          2. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          3. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          4. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          5. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          6. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          7. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          8. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          9. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          10. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          11. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          12. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          13. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          14. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          15. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
          16. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. <br />
        </p>
      </div>
      {/* <!-- content end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <div class="h-56 bg-[#D9D9D9]">
        <div class="flex justify-between mx-10 items-center mt-4">
          <div class="h-36">
            <img src="./assets/img/dispora bgD9.png" alt="" />
          </div>
          <div class="flex flex-col items-start">
            <h1 class="text-2xl py-1 pt-5">Tentang Kami</h1>
            <button class="text-xl py-1">
              <a href="">Visi Misi</a>
            </button>
            <button class="text-xl py-1">
              <a href="">Tupoksi</a>
            </button>
            <button class="text-xl py-1">
              <a href="">Struktur Dinas</a>
            </button>
          </div>
          <div class="flex flex-col items-start">
            <h1 class="text-2xl py-1 pt-5">Kontak</h1>
            <button class="text-xl py-1">
              <a href="">(012) 12345678</a>
            </button>
            <button class="text-xl py-1">
              <a href="">Jln. Trans Sulawesi, Amurang</a>
            </button>
            <button class="text-xl py-1">
              <a href="">disporaminsel@gmail.com</a>
            </button>
          </div>
          <div class="flex">
            <button>
              <a href="">
                <img
                  class="h-10 px-2"
                  src="./assets/img/🦆 icon _instagram_.png"
                  alt=""
                />
              </a>
            </button>
            <button>
              <a href="">
                <img
                  class="h-10 px-2"
                  src="./assets/img/🦆 icon _facebook_.png"
                  alt=""
                />
              </a>
            </button>
            <a href="">
              <img
                class="h-10 px-2"
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

export default ProdukHukum;
