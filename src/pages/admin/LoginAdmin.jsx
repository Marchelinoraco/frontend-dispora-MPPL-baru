import React from "react";

import Grup2 from "../../assets/img/Group 2.png";

const LoginAdmin = () => {
  return (
    <div
      // style="background-image: url(./assets/img/Desktop\ -\ 10\ 1.png)"
      classname="flex w-[1440px] justify-center py-60"
    >
      {/* <!-- content --> */}
      <div classname="flex flex-col h-60 bg-[#4C4C4C] px-40 py-56 rounded-2xl justify-center items-center">
        <div classname="mt-[-200px]">
          <img src={Grup2} alt="" />
        </div>
        <br />
        <br />
        <br />
        <div>
          <label classname="text-white" for="">
            Username
          </label>
          <input classname="h-10 w-60 rounded-lg" type="text" name="" id="" />
        </div>

        <br />

        <div>
          <label classname="text-white" for="">
            Password
          </label>
          <input classname="h-10 w-60 rounded-lg" type="text" name="" id="" />
        </div>

        <div classname="mt-10">
          <button classname="bg-red-700 text-white flex h-10 w-52 rounded-xl justify-center items-center">
            Masuk <input type="button" value="" />
          </button>
        </div>
      </div>
      {/* <!-- content end --> */}
    </div>
  );
};

export default LoginAdmin;
