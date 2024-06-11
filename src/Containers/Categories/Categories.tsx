import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import addsvg from "../../Assets/add.svg";
import { motion } from "framer-motion";
import {
  clearSearch,
  addCategory,
  searchCategory,
  setCategory,
  insertCategory,
  setCategoriesList,
} from "../../Slices/CategorySlice";
import Popup from "../../Components/Popup/Popup";
import "../../Styles/Categories.css";
import {
  clearImage,
  clearName,
  clearValidation,
  editToggle,
  setImage,
  setName,
  setValidation,
} from "../../Slices/PopupSlice";
import { AddCategory, addCategoryImage, getAllCategories } from "../../API/CategoriesAPI";
import { useMutation } from "react-query";

const Categories = () => {
  const getCategorisList = useSelector(
    (state: any) => state.category.categories
  );
  const search = useSelector((state: any) => state.category.search);
  const [displayData, setDisplayData]: any = useState([]);
  const dispatch = useDispatch();
  const [searchText, setSearchText]: any = useState(null);
  const name = useSelector((state: any) => state?.popup?.name);
  const image = useSelector((state: any) => state?.popup?.image);
  const finalImage = useSelector((state: any) => state?.popup?.finalImage);
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [count, setCount] = useState(0);
  const [openEditCategoryDialog, setOpenEditCategoryDialog] = useState(false);
  const edit = useSelector((state: any) => state.popup.edit)
  const category = useSelector((state: any) => state.category.category)
  useEffect(() => {
    setDisplayData(getCategorisList)

  }, [getCategorisList])
  useEffect(() => {
    if(getCategorisList.length == 0){
      console.log('hit')
      getCategories.mutate()
    }
  }, [])
  // useEffect(() => {
  //   if (search) {
  //     const filterData = getCategorisList.filter((data: any) => {
  //       let category = data.category.toLowerCase();
  //       if (category.includes(search)) {
  //         return data;
  //       }
  //     });
  //     setDisplayData(filterData);
  //   } else {
  //     setDisplayData(getCategorisList);
  //   }
  //   setCount(1);
  // }, [search]);

  // useEffect(() => {
  //   if (count >= 1) {
  //     if (searchText) {
  //       const filterData = getCategorisList.filter((data: any) => {
  //         let category = data.category.toLowerCase();
  //         if (category.includes(searchText)) {
  //           return data;
  //         }
  //       });
  //       setDisplayData(filterData);
  //     } else {
  //       setDisplayData(getCategorisList);
  //     }
  //   }
  // }, [searchText]);
  const editCategory = (data: any) => {
    console.log(data)
    let toggle: any = true
    dispatch(clearValidation());
    setOpenEditCategoryDialog(true);
    dispatch(setCategory(data))
    dispatch(setName(data.name))
    dispatch(setImage(data.photo))
    dispatch(editToggle(toggle))
  }

  const editClose = () => {
    let toggle: any = false
    setOpenEditCategoryDialog(false);
    dispatch(editToggle(toggle))
  }

  const getCategories = useMutation({
    mutationFn: () => getAllCategories(),
    onSuccess: (res) => {
      dispatch(setCategoriesList(res.data))
      setDisplayData(getCategorisList);
      dispatch(clearSearch());
    }, onError: (err) => {
      console.log(err)
    }
  })

  const addCategoryAPi = useMutation({
    mutationFn: (val) => AddCategory(val),
    onSuccess: (res) => {
      const imageReqBody = {
        category: res.data.id,
        photo: image,
      };
      console.log(res)
      // addCategoryImageApi.mutate(imageReqBody)
      // dispatch(addCategory(res.data))
    }
  })

  const addCategoryImageApi = useMutation({
    mutationFn: (val: any) => addCategoryImage(val),
    onSuccess: (res) => {
      if (res.data) {
        getCategories.mutate()
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });


  const handleAddCategory = () => {
    // if (name && finalImage) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      let value: any = false;
      const data: any ={
        id: null,
        name: name,
        language_name: [
          {
            lang: 'EN',
            name: name
          }
        ]
      }
      addCategoryAPi.mutate(data)
      // dispatch(addCategory(data));
      dispatch(setValidation(value));
    // }
  }

  const handleUpdateCategory = () => {
    let value: any = false;
    let finalCategory = JSON.parse(JSON.stringify(category))
    finalCategory.name = name
    finalCategory.photo = finalImage || image
    console.log(finalCategory)
    dispatch(insertCategory(finalCategory))
    dispatch(setValidation(value));
  }
  return (
    <>
      <div className="categories-container">
        <img
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: "50px",
            right: "50px",
            cursor: "pointer",
          }}
          src={addsvg}
          onClick={() => {
            dispatch(clearImage());
            dispatch(clearName());
            dispatch(clearValidation());
            setOpenCategoryDialog(true);
          }}
        />
        {displayData.map((category: any) => {
          return (
            <Card productsID={false} isSelectable={false} data={category} edit={editCategory} />
          );
        })}
      </div>

      <Popup
        onClose={() => setOpenCategoryDialog(false)}
        isOpen={openCategoryDialog}
        onClick={handleAddCategory}
        popUpTitle={"Add Category"}
      />
      <Popup
        onClose={() => editClose()}
        isOpen={openEditCategoryDialog}
        onClick={() => {
          "api";
        }}
        popUpTitle={"Edit Category"}
      />
    </>
  );
};

export default Categories;
