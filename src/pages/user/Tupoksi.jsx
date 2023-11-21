import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Tupoksi = () => {
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
        <h1 classname="text-4xl text-center">Tugas Pokok dan Fungsi Dinas</h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />
      <br />
      <br />
      <br />
      {/* <!-- Visi misi --> */}
      <div classname="mx-20">
        <div>
          <h1 classname="text-2xl text-justify font-semibold">Tugas Pokok</h1>
          <p classname="text-2xl text-justify">
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
          </p>
        </div>
        <br />
        <br />
        <div>
          <h1 classname="text-2xl text-justify font-semibold">Fungsi</h1>
          <br />
          <p classname="text-2xl text-justify">
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
          </p>
        </div>
      </div>
      {/* <!-- visi misi end --> */}
      <br />
      <br />
      <br />
      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Tupoksi;
