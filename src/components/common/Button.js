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
        "hover:bg-" + bgColor + "-hover",
        "hover:border-" + bgColor + "-hover",
        "text-" + color,
        "hover:text-" + color + "-hover",
        "border-" + color,
        "hover:border-" + color + "-hover"
      )}
    >
      {children}
    </button>
  );
};
