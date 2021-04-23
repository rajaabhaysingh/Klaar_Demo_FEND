import axiosIntance from "../../helpers/axios";
import { bankConstants } from "./constants";

// getBankBranches
export const getBankBranches = (city, addToast) => {
  return async (dispatch) => {
    dispatch({
      type: bankConstants.GET_BANK_BRANCHES_REQUEST,
    });

    // check for cached data first
    let cachedData = JSON.parse(localStorage.getItem("bankData"));

    // if cached data for given city is available
    if (cachedData && city in cachedData) {
      addToast(`Using cached data for ${city}...`, {
        appearance: "info",
        autoDismiss: true,
      });
      dispatch({
        type: bankConstants.GET_BANK_BRANCHES_SUCCESS,
        payload: {
          data: cachedData[city],
          city: city,
        },
      });
    } else {
      // if cached data for city not available
      addToast(`No cached data present for ${city}. Loading...`, {
        appearance: "info",
        autoDismiss: true,
      });
      await axiosIntance
        .get(`/banks?city=${city}`)
        .then((res) => {
          if (res.status === 200) {
            const { data } = res;
            dispatch({
              type: bankConstants.GET_BANK_BRANCHES_SUCCESS,
              payload: {
                data,
                city: city,
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
    }
  };
};

// addToFavList
export const addToFavList = (ifsc, type, city) => {
  return async (dispatch) => {
    dispatch({
      type: bankConstants.ADD_TO_FAV_LIST_SUCCESS,
      payload: {
        ifsc: ifsc,
        type: type,
        city: city,
      },
    });
  };
};
