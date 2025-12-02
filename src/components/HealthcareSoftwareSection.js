import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const HealthcareSoftwareSection = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ClubXero Also Provides Software for
            </h2>
            <p className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-2 leading-tight">
              Your Healthcare Hospital or Business
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              Streamline your healthcare operations with our comprehensive CRM solution. 
              Manage patient records, appointments, billing, and analytics all in one powerful platform.
            </p>
          </>
        }
      >
        <img
          src="/healthcare-crm.png"
          alt="Healthcare CRM Dashboard - Manage patient records, appointments, and analytics"
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default HealthcareSoftwareSection;
