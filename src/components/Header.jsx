import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
          <div classname="flex">
            <img
              classname="w-72 h-20"
              src="./assets/img/Dispora 1.png"
              alt=""
            />
          </div>

          <div classname="flex items-center mr-6">
            <img classname="h-20" src="./assets/img/Group 2.png" alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
