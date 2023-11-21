import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const StrukturDinas = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <Navbar />
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- content --> */}
      <div classname="flex justify-center items-center">
        <h1 classname="text-4xl text-center">Struktur Organisasi</h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />

      <br />
      <br />
      <br />
      <div classname="h-[900px] bg-[#D9D9D9] mx-56">
        <img src="" alt="" />
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

export default StrukturDinas;
