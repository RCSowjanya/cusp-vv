import React from "react";
import { Link } from "react-router-dom";
const JoinUs = () => {
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
        <div className="px-[5%] bg-white shadow-lg  max-w-3xl h-full mx-auto py-[2%]">
          <h2 className="ad text-[24px] font-[600] text-[#004A9C] text-center">
            Partner With CUSP
          </h2>
          <p className="text-[#121416] font-[400] text-[16px] text-center py-4">
            CUSP has a large user base, providing you a wider audience.
          </p>
          <form className="space-y-6">
            {/* Company Name */}
            <div>
              <label
                htmlFor="ad company-name"
                className="block font-[600] text-[18px] text-[#004A9C] mb-5"
              >
                Company Name <span className="text-[#004A9C]">*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Company Name"
                className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* Flex items for Entity Type and Total Entities */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="entity-type"
                  className="block text-[18px] ad text-[#004A9C] font-[600]"
                >
                  Entity Type <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="entity-type"
                  type="text"
                  placeholder="Type of Entity"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="total-entities"
                  className="block text-[18px] ad text-[#004A9C] font-[600]"
                >
                  Total Entities in Solar System{" "}
                  <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="total-entities"
                  type="number"
                  placeholder="Total Entities"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Flex items for GST No, PAN No, TAN No */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="gst-no"
                  className="block text-[#004A9C] text-[18px] ad font-[600]"
                >
                  GST No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="gst-no"
                  type="text"
                  placeholder="Enter GST No"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="pan-no"
                  className="block text-[#004A9C] text-[18px] ad font-[600]"
                >
                  PAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="pan-no"
                  type="text"
                  placeholder="Enter PAN No"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="tan-no"
                  className="block text-[#004A9C] text-[18px] ad font-[600]"
                >
                  TAN No <span className="text-[#004A9C]">*</span>
                </label>
                <input
                  id="tan-no"
                  type="text"
                  placeholder="Enter TAN No"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Register Office Address */}
            <div>
              <label
                htmlFor="register-office-address"
                className="block text-[#004A9C] text-[18px] ad font-[600]"
              >
                Register Office Address
              </label>
              <input
                id="register-office-address"
                type="text"
                placeholder="Enter Building Name"
                className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
              />
            </div>

            {/* Flex items for Street, City, Pincode, State */}
            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="street"
                  className="block text-[#004A9C] font-[600] ad text-[18px]"
                >
                  Street
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="Enter Street"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="city"
                  className="block text-[#004A9C] font-[600] ad text-[18px]"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter City"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4 max-[600px]:flex-col">
              <div className="flex-1">
                <label
                  htmlFor="pincode"
                  className="block text-[#004A9C] font-[600] text-[18px] ad"
                >
                  Pincode
                </label>
                <input
                  id="pincode"
                  type="text"
                  placeholder="Enter Pincode"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="state"
                  className="block text-[#004A9C] font-[600] ad text-[18px]"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter State"
                  className="ad mt-1 px-[19px] py-[24px] block w-full  mb-6 border-[#CECECE] border rounded-md shadow-sm outline-none"
                />
              </div>
            </div>

            {/* Next Button */}
            <div>
              <Link to="/joinusform">
                <button className="px-4 py-3 bg-indigo-600 text-white w-full rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
