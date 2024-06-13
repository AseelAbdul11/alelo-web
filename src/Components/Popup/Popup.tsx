import React, { useCallback, useEffect, useRef, useState } from "react";
import "../../Styles/PopUp.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFinalImage, setImage, setName } from "../../Slices/PopupSlice";
import ReactCrop, { Crop, centerCrop, makeAspectCrop } from "react-image-crop";
import { getCroppedImg } from "../../Utils/Popup/PopupUtils";
import "react-image-crop/dist/ReactCrop.css";

interface Props {
  popUpTitle: string;
  isOpen: boolean;
  onClick: any;
  onClose: () => void;
}
const Popup: React.FC<Props> = ({ isOpen, popUpTitle, onClick, onClose }) => {
  const dispatch = useDispatch();
  const [nameValid, setNameValid] = useState(false);
  const [imageValid, setImageValid] = useState(false);
  const [formatError, setFormatError] = useState(false);
  const [completedCrop, setCompletedCrop] = useState({
    x: 15.611111111111143,
    y: 0,
    width: 266.66666666666663,
    height: 150,
    unit: "px",
  });
  const imgRef: any = useRef(null);
  const myComponentRef: any = useRef(null);
  const name: any = useSelector((state: any) => {
    return state?.popup?.name;
  });
  const image: any = useSelector((state: any) => state?.popup?.image);

  const validation = useSelector((state: any) => state?.popup?.validation);
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  useEffect(() => {
    if (name) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  }, [name]);
  useEffect(() => {
    if (image) {
      setImageValid(true);
    } else {
      setImageValid(false);
    }
  }, [image]);

  const onLoads: any = useCallback((e: any) => {
    if (e.target && e.target.src) {
      imgRef.current = e.target;
    }
    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        16 / 9,
        70,
        50
      ),
      10,
      10
    );
    setCrop(crop);
  }, []);

  function handleChange(e: any) {
    let file = e.target.files[0]
    const fileType = file?.type;
    if (fileType === 'image/png' || fileType === 'image/jpeg') {
      setFormatError(false)
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const imageUrl: any = reader.result?.toString() || ''
        dispatch(setImage(imageUrl)) 
      })
      reader.readAsDataURL(file)
    } else {
      setFormatError(true)
    }
  }

  const makeClientCrop = async (crop: any) => {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImageUrl: any = await getCroppedImg(
        imgRef.current,
        crop,
        "croppedImage.jpeg"
      );

      dispatch(setFinalImage(croppedImageUrl));
    }
  };

  const handleAddProduct = () => {
    if (imageValid && nameValid) {
      if (crop.width && crop.height && imgRef.current) {
        makeClientCrop(completedCrop);
      }
      onClick();
    }
  };
  const handleCropImage = (croppedImage: any) => {
    setCrop(croppedImage);
    makeClientCrop(croppedImage);
  }



  return (
    <Modal show={isOpen} dialogClassName="custom-modal-size" backdrop="static" keyboard={false} centered>
      <Modal.Header className="custom-modal-header">
        <div className="Popup_header_container">
          <p className="Popup_header_Text">{popUpTitle}</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="popup_body">
          <div className="popup-field">
            <InputField
              inputChange={function handleChange(e: any) {
                dispatch(setName(e.target.value));
              }}
              type="text_input"
              label="Category"
              placeholder="Name"
            />
            {!nameValid && validation && (
              <div className="error-text">Please enter the name</div>
            )}
          </div>
          <div style={{ position: "relative" }} className="popup-field">
            {image ? (
              <ReactCrop
                crop={crop}
                onComplete={(c: any) => setCompletedCrop(c)}
                onChange={(newCrop: any) =>
                  handleCropImage(newCrop)
                  // { setCrop(newCrop) }
                }
                aspect={16 / 9}
              >
                <img
                  className="crop-image"
                  src={image}
                  onLoad={onLoads}
                  ref={imgRef}
                />
              </ReactCrop>
            ) : null}
            <div style={{ display: image ? 'none' : 'block' }}>
              <InputField
                forwardedRef={myComponentRef}
                type="image_input"
                inputChange={handleChange}
                label="Image"
                placeholder="image"
              />
            </div>
            {formatError && (
              <div className="error-text">
                Please upload in valid format JPEG or PNG
              </div>
            )}
            {!imageValid && validation && (
              <div className="error-text">Please upload the image</div>
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button
              type="Contain_Primary_Browse"
              label={"Browse"}
              onClick={() => {
                myComponentRef?.current.click();
              }}
            />
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="d-flex Pop_Button_Container"
          >
            <Button
              onClick={() => {
                onClose();
              }}
              type="Outline"
              label={"Cancel"}
            />
            <Button
              type="Contain_Dark"
              label={"Save"}
              onClick={() => {
                handleAddProduct();
              }}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Popup;
