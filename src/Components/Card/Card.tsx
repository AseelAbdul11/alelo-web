import { Dropdown, Switch } from "antd";
import React, { FC } from "react";
import "./card.css";
import hamburger from '../../Assets/humburger.svg'
import editIcon from "../../Assets/editicon.svg";
import vegetables from "../../../Assets/vegetables.webp";
import { useDispatch } from "react-redux";
import { switchToggle } from "../../Slices/CategorySlice";
import VideoPopup from "../VideoPopup/VideoPopup";
import receiveCash from '../../Assets/ReceiveCash.svg'
interface myComponentProps {
  data: any;
  isSelectable: any;
  productsID: any;
  edit: any;
  videocard?: boolean;
}
export const Card: FC<myComponentProps> = ({
  data,
  isSelectable,
  productsID,
  edit,
  videocard,
}) => {


  const dispatch = useDispatch();


  const items: any= [
    {
      key: '1',
      label: (
        <div>
          edit
        </div>
      ),
    },
    {
      key: '2',
      label: (
       <div>
        delete
       </div>
      ),
    }
  ];
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
          {!videocard ? <img src={editIcon} alt="editIcon" onClick={() => edit(data)} /> :
            <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
              <img src={hamburger} alt="editIcon" onClick={() => edit(data)} />
            </Dropdown>
          }
        </div>
        <div className="card-image-section">
          {!videocard ? <img src={data.photo} width="100%" className="card-image" /> : <VideoPopup video={data.video} />}
        </div>
        <div className="card-name-section mt-1">
          <div className="card-name">{data.name}</div>
          {!videocard ?
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
            </div> :
            <img src={receiveCash} alt="" />
          }
        </div>
        {productsID && <div className="products_Id">#AP0001</div>}
        {videocard && <div className="views">Tamil | 1k views</div>}
      </div>
    </>
  );
};
