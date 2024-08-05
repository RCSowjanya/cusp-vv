import React from "react";
import { LuSchool } from "react-icons/lu";
import { MdOutlineFactory } from "react-icons/md";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { FaRegHospital } from "react-icons/fa";
const TypeofOrganization = ({ formData, handleOrganizationTypeChange }) => {
  return (
    <div>
      <h2 className="text-[#004A9C] font-[600] text-[16px] text-center pb-4">
        Type of Organization
      </h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112]  rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed  ${
              formData.typeofOrganization === "Schools"
                ? "bg-yellow-700 text-white"
                : ""
            }`}
            onClick={() => handleOrganizationTypeChange("Schools")}
          >
            <LuSchool className="mx-auto mb-2 text-[#D3900D] active:text-white" />
            Schools
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed ${
              formData.typeofOrganization === "Factories"
                ? "bg-yellow-700 text-white"
                : ""
            }`}
            onClick={() => handleOrganizationTypeChange("Factories")}
          >
            <LuSchool className="mx-auto mb-2 text-[#D3900D] active:text-white" />
            Factories
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed ${
              formData.typeofOrganization === "Petrol Pumps"
                ? "bg-yellow-700 text-white"
                : ""
            }`}
            onClick={() => handleOrganizationTypeChange("Petrol Pumps")}
          >
            <LuSchool className="mx-auto mb-2 text-[#D3900D] active:text-white" />
            Petrol Pumps
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed ${
              formData.typeofOrganization === "Hospitals"
                ? "bg-yellow-700 text-white"
                : ""
            }`}
            onClick={() => handleOrganizationTypeChange("Hospitals")}
          >
            <LuSchool className="mx-auto mb-2 text-[#D3900D] active:text-white" />
            Hospitals
          </button>
        </div>
        <div>
          <button
            className={`px-8 py-6 border border-[#8A6112] rounded-xl flex flex-col cursor-pointer  text-[#D3900D]  shadow-md border-dashed ${
              formData.typeofOrganization === "Others"
                ? "bg-yellow-700 text-white"
                : ""
            }`}
            onClick={() => handleOrganizationTypeChange("Others")}
          >
            <LuSchool className="mx-auto mb-2 text-[#D3900D] active:text-white" />
            Others
          </button>
        </div>
      </div>
    </div>
  );
};

export default TypeofOrganization;
