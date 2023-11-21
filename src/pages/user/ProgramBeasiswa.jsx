import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProgramBeasiswa = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div classname="flex justify-center items-center">
        <h1 classname="text-4xl text-center">Program Beasiswa</h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />
      <br />
      <br />
      <br />
      {/* <!-- poster --> */}
      <div classname="h-[1000px] bg-[#D9D9D9] mx-56">
        <img src="" alt="" />
      </div>
      <br />
      <br />
      <div classname="mx-56">
        <h1>Persyaratan :</h1>
        <p>
          1. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in.
        </p>
        <p>
          2. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in.
        </p>
        <p>
          3. Dui ut ornare lectus sit amet est. Quis lectus nulla at volutpat
          diam ut venenatis tellus in.
        </p>
      </div>

      <br />
      <br />
      <div classname="flex mx-56">
        <div classname="px-4">
          <button classname="bg-[#D9D9D9] p-3 rounded-lg">
            Daftar Sekarang
          </button>
        </div>
        <div classname="px-4">
          <button classname="bg-[#D9D9D9] p-3 rounded-lg">Kontak Kami</button>
        </div>
      </div>
      {/* <!-- content end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default ProgramBeasiswa;
