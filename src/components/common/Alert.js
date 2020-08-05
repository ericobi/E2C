import React from "react";
import cx from "classnames";

export default ({ color, bgColor, showBorder, left, right, children }) => {
  return (
    <div
      className={cx(
        "container mx-auto hidden md:w-full rounded-md px-2 py-3 my-2 flex flex-row justify-between items-center",
        showBorder ? "border" : "",
        "bg-" + bgColor,
        "text-" + color
      )}
    >
      <div className="w-4 mx-2">{left}</div>
      <div className="w-full">{children}</div>
      <div className="w-4 mx-2">{right}</div>
    </div>
  );
};
