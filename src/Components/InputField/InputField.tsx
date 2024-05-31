import React from "react";
import "../../Styles/InputField.css";
import input_image from "../../Assets/Input_image.svg";
import { useSelector } from "react-redux";

interface Props {
  type: string;
  label: string;
  placeholder: string;
  inputChange: any
  forwardedRef?: any
}
const InputField: React.FC<Props> = ({ type, label, placeholder, inputChange, forwardedRef }) => {
  const name = useSelector((state: any) => state?.popup?.name)
  const image = useSelector((state: any) => state?.popup?.image)
  return (
    <div className="main">
      {type === "search_input" && (
        <div className="form-group">
          <span className="bx bx-search form-control-icon"></span>
          <input type="text" className="input_field" placeholder={placeholder} />
        </div>
      )}

      {type === "text_input" && (
        <div className="form-group" style={{ marginBottom: 0 }}>
          <input
            type="text"
            value={name}
            className="input_field_text"
            placeholder={placeholder}
            onChange={(e) => inputChange(e)}
          />
        </div>
      )}

      {type === "image_input" && (
        <div
          className="form-group"
          style={{ flexDirection: "column", marginBottom: 0, alignItems: "flex-start" }}
        >
          <span className="input_image_text">{label}</span>
          <input
            ref={forwardedRef}
            type="file"
            className="input_field_image"
            placeholder={placeholder}
            onChange={(e) => inputChange(e)}
            title=" "
            style={{ color: "#fff", border: "none", outline: "none" }}
          ></input>
        </div>
      )}
    </div>
  );
};

export default InputField;
