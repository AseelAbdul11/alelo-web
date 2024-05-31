import { Switch } from "antd";
import React, { FC } from "react";
import "./card.css";
import editIcon from "../../Assets/editicon.svg";
import vegetables from "../../../Assets/vegetables.webp";
import { useDispatch } from "react-redux";
import { switchToggle } from "../../Slices/CategorySlice";
interface myComponentProps {
  data: any;
  isSelectable: any;
  productsID: any;
  edit : any
}
export const Card: FC<myComponentProps> = ({
  data,
  isSelectable,
  productsID,
  edit 
}) => {
  const dispatch = useDispatch();
  const handleChange = (category: any, checked: boolean) => {
    let finaldata: any = { name: category, show: checked };
    dispatch(switchToggle(finaldata));
  };
  return (
    <>
      <div className="card-container">
        {isSelectable && (
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={true}
          />
        )}

        <div className="card-edit">
          <img src={editIcon} alt="editIcon" onClick={()=>edit(data)} />
        </div>
        <div className="card-image-section">

        <img src={data.photo} width="100%" className="card-image" />
        </div>
        <div className="card-name-section mt-1">
          <div className="card-name">{data.name}</div>
          <div>
            <Switch
              style={{
                backgroundColor: data.show ? "rgb(1, 174, 154)" : "#FF0000",
              }}
              checked={data.show}
              onChange={(e) => {
                handleChange(data.category, e);
              }}
              size="small"
            />
            <span
              style={{
                marginLeft: "4px",
                fontSize: "12px",
                transition: "all 0.2s ease",
                color: "#9A9B9B",
              }}
              className="card-state"
            >
              {data.show ? "Deactivate" : "Activate"}
            </span>
          </div>
        </div>
        {productsID && <div className="products_Id">#AP0001</div>}
      </div>
    </>
  );
};
