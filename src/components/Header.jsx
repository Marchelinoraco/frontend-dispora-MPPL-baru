import React from "react";
import Dispora1 from "../../assets/img/Dispora 1.png";
import Grup2 from "../../assets/img/Group 2.png";

const Header = () => {
  return (
    <>
      <header>
        <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
          <div classname="flex">
            <img classname="w-72 h-20" src={Dispora1} alt="" />
          </div>

          <div classname="flex items-center mr-6">
            <img classname="h-20" src={Grup2} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
