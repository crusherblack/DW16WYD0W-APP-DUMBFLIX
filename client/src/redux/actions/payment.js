import { API } from "../../config/api";

import { PAYMENT_ERROR, PAYMENT_SUCCESS } from "./types";

//Get All Films
export const uploadBukti = (file, idUser, clearForm) => async (dispatch) => {
  try {
    const formData = new FormData();

    formData.append("startDate", "06-30-2020");
    formData.append("dueDate", "06-30-2020");
    formData.append("userId", idUser);
    formData.append("attache", file);
    formData.append("status", "Pending");

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const res = await API.post("/transaction", formData, config);

    dispatch({
      type: PAYMENT_SUCCESS,
    });
    clearForm();
  } catch (e) {
    console.log(e.response.data);
    dispatch({
      type: PAYMENT_ERROR,
    });
  }
};
