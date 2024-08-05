import React from "react";
import { HiHashtag } from "react-icons/hi";

const CustomerDetails = () => {
  const attachments = [
    "GST Certificate",
    "PAN",
    "TAN",
    "Empanelment Certificate",
    "Reference Site Pictures",
  ];
  return (
    <div className="border border-[#7A7A7A] mt-11 mx-[3%] rounded-lg">
      <div className="p-6">
        <div className="flex gap-8  mb-6">
          <h4 className="text-[22px] font-[600] text-[#000]">
            Customer Details
          </h4>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Status</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">Pending</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2  justify-between">
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Quotation Id
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">258369</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Date</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                28-07-2024
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Name</h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                abhishek sharma
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Email Id
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                abhishek@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/*---2nd row----*/}
        <div className="flex gap-2 mt-11 py-6 justify-between border-b border-b-gray-300">
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Phone Number
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                88888909877
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">Address</h4>
              <div className="flex ">
                <p className="text-[12px] font-[600] text-[#48494D]">
                  D.No:24-10-12/A,Patella street,punjab junction,punjab-530044.
                </p>
                <button className="px-6  border border-gray-500 rounded-full text-[12px] bg-red-400">
                  Show Navigation Button
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Organization Type
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                School/Factory
              </p>
            </div>
          </div>
        </div>
        {/*----3rd row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8  mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6  border border-gray-500 rounded-full text-[12px] bg-red-400">
              Residential On Grid
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Establishment
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Residential/Commercial
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Connection Type
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  OnGrid/OffGrid
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Total Roof Area
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  XXXX sqft
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Capacity
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">XXXX KW</p>
              </div>
            </div>
          </div>
          <div className="flex  justify-between gap-3 pt-11">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Last Month Consumption
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  XXXX Units
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Need Subsidy
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Yes/No</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Floor No
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">2</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Roof Rights?
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">Yes/No</p>
              </div>
            </div>
          </div>
        </div>
        {/*----3rd row completed-----*/}
        {/*----4th row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8  mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6  border border-gray-500 rounded-full text-[12px] bg-red-400">
              Residential and Off Grid
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Establishment
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Residential/Commercial
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Connection Type
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  OnGrid/OffGrid
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Total Roof Area
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  XXXX sqft
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Capcity
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">XXXX Kw</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
              <HiHashtag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-[#666666] font-[400] text-[13px]">
                Power Outage In Hours
              </h4>
              <p className="text-[12px] font-[600] text-[#48494D]">
                XXXX Hours
              </p>
            </div>
          </div>
        </div>
        {/*----4th row completed-----*/}
        {/****5th----***/}
        {/*----3rd row----*/}
        <div className="border-b border-b-gray-300 py-5">
          <div className="flex gap-8  mb-6 py-4">
            <h4 className="text-[22px] font-[600] text-[#000]">Requirement</h4>
            <button className="px-6  border border-gray-500 rounded-full text-[12px] bg-red-400">
              Commercial
            </button>
          </div>
          <div className="flex  justify-between gap-3">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Establishment
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Residential/Commercial
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Connection Type
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  OnGrid/OffGrid
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Total Roof Area
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  XXXX sqft
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Capacity
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">XXXX KW</p>
              </div>
            </div>
          </div>
          <div className="flex  justify-between gap-3 pt-11">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Current Sanction Load
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">XXXX Kw</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Last Month Consumption
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  XXX units
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-gray-300 p-1 rounded-full">
                <HiHashtag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[#666666] font-[400] text-[13px]">
                  Type Of Roof
                </h4>
                <p className="text-[12px] font-[600] text-[#48494D]">
                  Concrete/TinShade/Others
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*----5th row completed-----*/}
      </div>
      {/*----border close---*/}
    </div>
  );
};

export default CustomerDetails;
