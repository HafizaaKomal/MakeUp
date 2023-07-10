import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

export const fetchAsyncTypeProducts = createAsyncThunk('type/products/fetch', async(product_type) => {
    const { data } = await axios.get(`${apiURL.PRODUCTS_ALL}?product_type=${product_type}`);
    return data;
});