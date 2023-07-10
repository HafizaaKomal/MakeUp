import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants/index";

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async() => {
    const { data } = await axios.get(`${apiURL.PRODUCTS_ALL}`);
    return data;
});

export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.PRODUCT_SINGLE}/${id}`);
    return data;
});

