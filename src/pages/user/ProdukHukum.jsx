import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ProdukHukum = () => {
  return (
    <div class="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <Navbar />
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
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default ProdukHukum;
