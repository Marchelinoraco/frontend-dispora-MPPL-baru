import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Renstra = () => {
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
        <h1 classname="text-4xl text-center">Rencana Strategi</h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />

      <br />
      <br />
      {/* <!-- content -->
  <!-- link renstra --> */}
      <button classname="mx-40">
        <Link classname="text-2xl text-[#00147B]" to={"/"}></Link>
        Renstra Dispora 2021 - 2026
      </button>
      {/* <!-- content end --> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Renstra;
