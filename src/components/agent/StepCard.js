import React from "react";

export default ({ number, title, subtitle }) => {
  return (
    <div className="w-full px-4 my-2 flex flex-row items-center my-8">
      <div className="step-card rounded-lg bg-white flex items-center justify-center mr-4">
        <p className="font-h1 text-brand-01">{number}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-h3">{title}</h3>
        <p className="text-white font-body1">{subtitle}</p>
      </div>
    </div>
  );
};
