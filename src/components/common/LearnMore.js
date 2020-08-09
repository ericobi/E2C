import React from "react";

import E2CToolButton from "./ToolButton";

export default ({ onClick, text }) => {
  return (
    <div className="flex flex-row items-center my-2">
      <E2CToolButton
        bgColor="primary"
        icon={<i className="fa fa-search" aria-hidden="true"></i>}
      />
      <div className="flex flex-col mx-2">
        <p className="text-text-01 font-body2-semi-bold">Learn More</p>
        <button
          className="text-left underline text-brand-02 font-link"
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    </div>
  );
};
