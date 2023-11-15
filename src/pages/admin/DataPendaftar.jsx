import React from "react";

const DataPendaftar = () => {
  return (
    <div classname="flex-col w-[1440px] max-h-full">
      {/* <!-- navbar --> */}
      <div classname="flex w-[1440px] h-24 justify-between border-b-2 border-b-red-800">
        <div classname="flex">
          <img classname="w-72 h-20" src="./assets/img/Dispora 1.png" alt="" />
        </div>

        <div classname="flex items-center mr-6">
          <img classname="h-20" src="./assets/img/Group 2.png" alt="" />
        </div>
      </div>
      {/* <!-- navbar end --> */}
      <br />
      <br />
      <br />
      {/* <!-- Content --> */}
      <div classname="flex justify-center items-center">
        <h1 classname="text-4xl text-center">
          Data Pendaftar Program Beasiswa
        </h1>
      </div>
      <br />
      <br />
      <hr classname="mx-20" />

      <br />
      <br />
      <br />
      <br />
      <br />

      <div classname="flex w-full justify-center items-start">
        <table classname="w-full mx-60 border-collapse border border-black">
          <thead>
            <tr>
              <td classname="p-4">No</td>
              <td classname="p-4">Nama Pendaftar</td>
              <td classname="p-4"></td>
            </tr>
          </thead>
          <tbody classname="items-center">
            <tr>
              <td classname="p-4">1</td>
              <td classname="p-4">marchelinojhwbegjherbgjhwrbgjhwbvgrjhv</td>
              <td classname="p-4">
                <button classname="px-2 bg-slate-500 rounded-xl">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataPendaftar;
