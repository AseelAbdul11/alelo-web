import React, { Dispatch, useState } from "react";
import "../../Styles/Button.css";

interface Props {
  type: string;
  label: string;
  onClick: () => void;
}
const Button: React.FC<Props> = ({ type, label, onClick }) => {
  const handleType = () => {
    if (type === "Contain_Primary") {
      return {
        color: "#fff",
        backgroundColor: "#366E68",
        borderRadius: "50px",
        border: "none",
      };
    }
    if (type === "Outline") {
      return {
        color: "#01AE9A",
        backgroundColor: "#fff",
        borderRadius: "50px",
        border: "1px solid #01AE9A",
      };
    }
    if (type === "Contain_Dark") {
      return {
        color: "#fff",
        backgroundColor: "#01AE9A",
        borderRadius: "50px",
        border: "1px solid #01AE9A",
      };
    }
  };
  return (
    <>
      {type === "Contain_Primary_Browse" ? (
        <div
          className="file_btn_div"
          style={{
            backgroundColor:
              type === "Contain_Primary_Browse"
                ? "#366E68"
                : type === "Outline"
                ? "#FBF9F9"
                : type === "Contain_Dark"
                ? "#01AE9A"
                : "",
          }}
          onClick={onClick}
        >
          {label}
        </div>
      ) : (
        <div
          className="file_btn_div"
          style={{
            backgroundColor: handleType()?.backgroundColor,
            color: handleType()?.color,
            borderRadius: handleType()?.borderRadius,
            border: handleType()?.border,
          }}
          onClick={onClick}
        >
          {label}
        </div>
      )}
    </>
  );
};

export default Button;
