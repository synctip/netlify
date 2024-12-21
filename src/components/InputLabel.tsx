import React, { HTMLProps } from "react";

const InputLabel: React.FC<HTMLProps<HTMLLabelElement>> = (props) => {
  return (
    <label
      {...props}
      style={{
        display: "block",
        marginBottom: "8px",
      }}
      className="input-label"
    >
      {props.children}
    </label>
  );
};

export default InputLabel;
