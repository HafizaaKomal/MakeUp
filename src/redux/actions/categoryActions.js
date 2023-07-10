import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

export const fetchAsyncCategoryProducts = createAsyncThunk('category-products/fetch', async(category_name) => {
    const { data } = await axios.get(`${apiURL.PRODUCTS_ALL}?product_category=${category_name}`);
    return data;
});
