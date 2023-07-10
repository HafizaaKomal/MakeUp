import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";

export const fetchAsyncSearchedProducts = createAsyncThunk('products/search/fetch', async(searchTerm) => {
    const { data } = await axios.get(`${apiURL.PRODUCTS_ALL}?brand=${searchTerm}`);
    console.log(data);
    return data;
});