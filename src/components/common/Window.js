import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import useWindowSize from "../../hooks/useWindowSize";

export default ({ title, description, className, children }) => {
  const size = useWindowSize();

  const body = () => {
    return (
      <div
        className={
          "px-4 w-full mt-8 md:max-w-xs lg:max-w-xs xl:max-w-xs " + className
        }
      >
        <div
          className="rounded-lg p-6 text-center bg-white"
          style={{ boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.1)" }}
        >
          <h6 className="font-h6">{title}</h6>
          <p className="font-caption mb-2">{description}</p>
          {children}
        </div>
      </div>
    );
  };
  return size.width < 1024 ? (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
      {body()}
    </ScrollAnimation>
  ) : (
    body()
  );
};
