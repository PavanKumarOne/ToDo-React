import React from "react";

export const CustomButton = (props) => {
  // console.log("props=", props);
  const { children, ...rest } = props;

  return (
    <button style={{ backgroundColor: "#ab6afb" }} {...rest}>
      {children}
    </button>
  );
};
