import React from "react";

const HomeAdmin = () => {
  return (
    <>
      <div classname="flex-col w-[1440px] max-h-full">
        {/* <!-- content --> */}
        <div classname="flex justify-center py-48">
          <button classname="px-20">
            <img src="./assets/img/Copy of Dispora 1.png" alt="" />
            <p classname="text-xl font-semibold">Berita dan Pengumuman</p>
          </button>
          <button classname="px-20">
            <img src="./assets/img/Copy of Dispora (1) 1.png" alt="" />
            <p classname="text-xl font-semibold">Program Dinas</p>
          </button>
        </div>
        {/* <!--content end --> */}
      </div>
    </>
  );
};

export default HomeAdmin;
