import React, { useEffect, useState } from "react";
import Tab from "../../Components/Tab/Tab";
import Popup from "../../Components/Popup/Popup";
import addsvg from "../../Assets/add.svg";
import { Card } from "../../Components/Card/Card";
import { initialState } from "../../Slices/CategorySlice";
import "../../Styles/Categories.css";
import { useMutation } from "react-query";
import { getProductsById } from "../../API/ProductsAPI";
import { CircularProgress } from "@mui/material";
import { clearValidation, editToggle, setImage, setName } from "../../Slices/PopupSlice";
import { useDispatch } from "react-redux";

interface ProductProps {
  product_Id: any;
}
const Products: React.FC<ProductProps> = ({ product_Id }) => {
  const dispatch = useDispatch()
  const [openProductsDialog, setOpenProductsDialog] = useState(false);
  const [openEditProductsDialog, setOpenEditProductsDialog] = useState(false);
  const [products, setProducts] = useState([]);

  const getProductsByIdApi = useMutation({
    mutationFn: (val) => getProductsById(val),
    onSuccess: (res: any) => {
      if (res.data) {
        setProducts(res.data);
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    getProductsByIdApi.mutate(product_Id);
  }, [product_Id]);

  const isLoading = getProductsByIdApi.isLoading;
  const editProduct = (data: any) => {
    let toggle: any = true
    dispatch(clearValidation());
    setOpenEditProductsDialog(true);
    dispatch(setName(data.name))
    dispatch(setImage(data.photo))
    dispatch(editToggle(toggle))
  }

  const editClose = () => {
    let toggle: any = false
    setOpenEditProductsDialog(false);
    dispatch(editToggle(toggle))
  }
  return (
    <>
      <div>
        <div className="categories-container mt-3">
          <img
            style={{
              position: "absolute",
              zIndex: 2,
              bottom: "50px",
              right: "50px",
              cursor: "pointer",
            }}
            src={addsvg}
            onClick={() => setOpenProductsDialog(true)}
          />

          {isLoading ? (
            <div   style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}>
              <CircularProgress color="success" />
            </div>
          ) : products.length > 0 ? (
            products.map((product: any) => {
              return (
                <Card productsID={true} isSelectable={true} data={product} edit={editProduct}/>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              No data found
            </div>
          )}
        </div>
      </div>

      <Popup
        onClose={() => setOpenProductsDialog(false)}
        isOpen={openProductsDialog}
        onClick={() => {
          "api";
        }}
        popUpTitle={"Add Product"}
      />
      <Popup
        onClose={() => setOpenEditProductsDialog(false)}
        isOpen={openEditProductsDialog}
        onClick={() => {
          "api";
        }}
        popUpTitle={"Edit Product"}
      />
    </>
  );
};

export default Products;
