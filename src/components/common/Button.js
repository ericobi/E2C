import React from "react";
import cx from "classnames";

export default ({
  color,
  bgColor = "transparent",
  showBorder = true,
  onClick,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        "rounded-md px-4 py-2 mx-1",
        showBorder ? "border" : "",
        "bg-" + bgColor,
        "text-" + color,
        "border-" + color
      )}
    >
      {children}
    </button>
  );
};
