import Axios from '../Axios/Axios'
import * as Endpoints from '../Entities/Endpoints'

const API = Axios.getInstance
const APIFORMDATA = Axios.getFormDataInstance


export const getAllCategories = () => {
    const url = Endpoints.GET_ALL_PRODUCT_CATEGORIES

    return API(Endpoints.API_ENDPOINT).get(url).then((res) => res).catch(err => err)
}


export const getCategoryById = (category_id: any) => {
    const url = Endpoints.GET_PRODUCTS_BY_ID + `/${category_id}` + Endpoints.PRODUCTS
    return API(Endpoints.API_ENDPOINT).get(url).then((res) => res).catch(err => err)
}


export const AddCategory = (category: any) => {
    const url = Endpoints.ADD_PRODUCT
    return API(Endpoints.API_ENDPOINT).post(url, category).then((res)=> res).catch(err => err)
}

export const addCategoryImage = (data : any ) =>{
    const { product_Id, photo } = data;
    const url = Endpoints.ADD_PRODUCT_IMAGE + `/${product_Id}` + Endpoints.PHOTO;
    return API(Endpoints.API_ENDPOINT).post(url , photo ).then((res)=> res).catch(err => err) 
}

