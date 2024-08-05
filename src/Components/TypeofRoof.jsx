import React from "react";
import { FaRegUser } from "react-icons/fa";

const TypeofRoof = ({ formData, handleRoofTypeChange, handleChange }) => {
  return (
    <div className="">
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-6">
        Type of Roof
      </h2>
      <div className="flex  flex-wrap gap-3 items-center justify-center w-full">
        <button
          className={`px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed  ${
            formData.typeofRoof.concrete ? "bg-yellow-700 text-white" : ""
          }`}
          onClick={() => handleRoofTypeChange("concrete")}
        >
          <FaRegUser className="mx-auto mb-2 text-[#D3900D] active:text-white" />
          Concrete
        </button>
        <button
          className={`px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed  ${
            formData.typeofRoof.tinshade ? "bg-yellow-700 text-white" : ""
          }`}
          onClick={() => handleRoofTypeChange("tinshade")}
        >
          <FaRegUser className="mx-auto mb-2 text-[#D3900D] active:text-white" />
          Tin Shade
        </button>
        <button
          className={`px-11 py-4 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed  ${
            formData.typeofRoof.others ? "bg-yellow-700 text-white" : ""
          }`}
          onClick={() => handleRoofTypeChange("others")}
        >
          <FaRegUser className="mx-auto mb-2 text-[#D3900D] active:text-white" />
          Others
        </button>
      </div>

      {/* Total Roof Area */}
      <h2 className="text-[#004A9C] font-[600] text-[16px] ad text-center pb-4 mt-6">
        Total Roof Area (in Sft)
      </h2>
      <div className="flex gap-3 w-full max-[1000px]:flex-col">
        <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="length"
            value={formData.length}
            onChange={handleChange}
            placeholder="Enter Length"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112] outline-none"
          />
        </div>
        <div className="flex items-center w-full border border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="breadth"
            value={formData.breadth}
            onChange={handleChange}
            placeholder="Enter Breadth"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112] outline-none"
          />
        </div>
        <div className="flex items-center w-full order border-[#CDC4B1] rounded-md bg-[#FFFDF9] quote ">
          <div className="border-r border-r-[#8A6112] p-2">
            <FaRegUser className="text-[#8A6112] ml-3" />
          </div>
          <input
            type="number"
            name="sft"
            value={formData.sft}
            onChange={handleChange}
            placeholder="Enter Area"
            className="w-full px-4 py-5  rounded-md shadow-lg placeholder-[#8A6112] outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TypeofRoof;
