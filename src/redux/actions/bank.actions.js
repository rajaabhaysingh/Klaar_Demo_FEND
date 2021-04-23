import axiosIntance from "../../helpers/axios";
import { bankConstants } from "./constants";

// getBankBranches
export const getBankBranches = (branchName) => {
  return async (dispatch) => {
    dispatch({
      type: bankConstants.GET_BANK_BRANCHES_REQUEST,
    });

    await axiosIntance
      .get(`/banks?city=${branchName}`)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res;
          dispatch({
            type: bankConstants.GET_BANK_BRANCHES_SUCCESS,
            payload: {
              data,
            },
          });
        } else {
          if (res.status === 400) {
            dispatch({
              type: bankConstants.GET_BANK_BRANCHES_FAILURE,
              payload: {
                error: "Unexpected error occured.",
              },
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: bankConstants.GET_BANK_BRANCHES_FAILURE,
          payload: {
            error:
              typeof err.response?.data?.error !== "object"
                ? err.response?.data?.error
                : err.response?.data?.error?.message ||
                  err.message ||
                  "Some unexpected error ocuured. Try refreshing the page or contact developer if problem persists.",
          },
        });
      });
  };
};
