import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../constants/config";

const adminLogin = createAsyncThunk("admin/login", async (secretKey) => {
  try {
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${server}/admin/verify`,
      { secretKey },
      config
    );

    return data.message;
  } catch (error) {
    throw error.response.data.message;
  }
});

const getAdminDetails = createAsyncThunk(
  "admin/getAdminDetails",
  async (secretKey) => {
    try {
      const { data } = await axios.get(`${server}/admin`, {
        withCredentials: true,
      });

      return data.admin;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const adminLogout = createAsyncThunk(
  "admin/adminLogout",
  async (secretKey) => {
    try {
      const { data } = await axios.get(`${server}/admin/logout`, {
        withCredentials: true,
      });

      return data.message;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export { adminLogin, getAdminDetails,adminLogout };
