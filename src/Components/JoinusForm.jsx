import React from "react";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
const JoinusForm = () => {
  return (
    <div>
      {/*---bg-image----*/}
      <div className="w-full h-full ">
        <div className="aboutbg flex items-center">
          <h2 className="text-4xl text-white font-bold rounded-md bg-[rgba(13,13,13,0.5)] p-4 w-auto">
            Join Us
          </h2>
        </div>
      </div>
      {/*---bg-image close---*/}
      {/*---form---*/}
      <div className="bg-[#e3d5d5] flex justify-center py-[4%] items-center max-[1000px]:px-[2%]">
        <div className="px-[3%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <button className="py-2 px-4 flex gap-2 text-[#0BB68D] text-[16px] font-[500]">
            <FiArrowLeftCircle className="mt-1" />
            Back
          </button>
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[18px] text-[#004A9C] mb-5"
              >
                Empanelled With <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none placeholder-[#757575]"
              />
            </div>
            {/* Dropdown Fields in Flex */}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              {/* Empanelled with State */}
              <div className="w-1/2 max-[600px]:w-full">
                <select
                  id="empanelled-state"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Empanelled Boards */}
              <div className="w-1/2 max-[600px]:w-full">
                <select
                  id="empanelled-boards"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">Select Board</option>
                  <option value="board1">Board 1</option>
                  <option value="board2">Board 2</option>
                  <option value="board3">Board 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            {/*----capacity----*/}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <input
                  id="capacity"
                  type="number"
                  placeholder="Enter Combined Capacity"
                  className="ad px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="w-1/2 max-[600px]:w-full">
                <input
                  id="capacity"
                  type="number"
                  placeholder="Enter Installation Capacity"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/*----Brands and design----*/}
            <div className="flex gap-3 max-[600px]:flex-col">
              <div className="flex-1">
                <select
                  id="empanelled-boards"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">Select Product Brands</option>
                  <option value="board1">Board 1</option>
                  <option value="board2">Board 2</option>
                  <option value="board3">Board 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="flex-1">
                <input
                  id="capacity"
                  type="number"
                  placeholder="Enter Geographical Region"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575]  border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/*---total employees and total installation----*/}
            <div className="flex gap-2 max-[600px]:space-y-2 max-[600px]:flex-col">
              <div className="w-1/2 max-[600px]:w-full">
                <select
                  id="employees"
                  className="ad px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">select Total employees</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Empanelled Boards */}
              <div className="w-1/2 max-[600px]:w-full">
                <select
                  id="installations"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                  style={{ color: "#757575" }}
                >
                  <option value="">select Total installations</option>
                  <option value="board1">Board 1</option>
                  <option value="board2">Board 2</option>
                  <option value="board3">Board 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            {/*---reference detailes----*/}
            <div>
              <input
                id="details"
                type="text"
                placeholder="Reference Site Details"
                className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>
            {/*----files upload----*/}
            <div className="flex gap-3 max-[600px]:flex-col">
              <div>
                <input
                  id="video"
                  type="file"
                  placeholder="Video upload"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div>
                <input
                  id="audio"
                  type="file"
                  placeholder="audio upload"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div>
                <input
                  id="elecricity bill"
                  type="file"
                  placeholder="electricity Bill"
                  className="ad  px-[19px] py-[24px] block w-full  placeholder-[#757575] border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>
            {/* submit Button */}
            <div>
              <Link to="/">
                <button className="px-4 py-3 bg-indigo-600 text-white w-full rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                  Submit
                </button>
              </Link>
            </div>
          </form>
          {/*---form---*/}
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
