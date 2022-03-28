import React from "react";
import "./Button.css";

export const CustomButton = (props) => {
  // console.log("props=", props);
  const { children, ...rest } = props;

  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};
