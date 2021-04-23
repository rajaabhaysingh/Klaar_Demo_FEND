import { bankConstants } from "../actions/constants";

const initialState = {
  getBankBranchesData: [],
  getBankBranchesLoading: false,
  getBankBranchesSuccess: false,
  getBankBranchesError: null,
};

// addFavOptionToInitialData
const addFavOptionToInitialData = (bankBranchList, city) => {
  let tempBankBranchList = [];

  // access previously cached data
  let prevCache = JSON.parse(localStorage.getItem("bankData"));

  if (prevCache && prevCache[city]) {
    tempBankBranchList = prevCache[city];
  } else {
    for (const bankBranch of bankBranchList) {
      tempBankBranchList.push({
        fav: false,
        bank_name: bankBranch.bank_name,
        branch: bankBranch.branch,
        ifsc: bankBranch.ifsc,
        bank_id: bankBranch.bank_id,
        address: bankBranch.address,
        district: bankBranch.district,
        city: bankBranch.city,
        state: bankBranch.state,
      });
    }
  }

  if (prevCache) {
    // add new data to temp cache variable
    prevCache[city] = tempBankBranchList;
  } else {
    prevCache = {};
    prevCache[city] = tempBankBranchList;
  }

  // remove previously cached data
  localStorage.removeItem("bankData");

  // re-write new cache
  localStorage.setItem("bankData", JSON.stringify(prevCache));

  return tempBankBranchList;
};

// updateDataWithFavList
const updateDataWithFavList = (oldBankList, ifsc, type, city) => {
  let tempBankList = oldBankList;

  let foundIndex = null;

  for (let i = 0; i < tempBankList.length; i++) {
    if (tempBankList[i].ifsc === ifsc) {
      foundIndex = i;
    }
  }

  // if index found
  if (foundIndex) {
    if (type === "add") {
      tempBankList[foundIndex].fav = true;
    } else {
      tempBankList[foundIndex].fav = false;
    }
  } else {
    if (foundIndex === 0) {
      if (type === "add") {
        tempBankList[foundIndex].fav = true;
      } else {
        tempBankList[foundIndex].fav = false;
      }
    }
  }

  // access previously cached data
  let prevCache = JSON.parse(localStorage.getItem("bankData"));

  if (prevCache) {
    // add new data to temp cache variable
    prevCache[city] = tempBankList;
  } else {
    prevCache = {};
    prevCache[city] = tempBankList;
  }

  // remove previously cached data
  localStorage.removeItem("bankData");

  // re-write new cache
  localStorage.setItem("bankData", JSON.stringify(prevCache));

  return tempBankList;
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case bankConstants.GET_BANK_BRANCHES_REQUEST:
      state = {
        ...state,
        getBankBranchesLoading: true,
        getBankBranchesError: null,
      };
      break;

    case bankConstants.GET_BANK_BRANCHES_SUCCESS:
      state = {
        ...state,
        getBankBranchesData: addFavOptionToInitialData(
          action.payload.data,
          action.payload.city
        ),
        getBankBranchesLoading: false,
        getBankBranchesSuccess: true,
        getBankBranchesError: null,
      };
      break;

    case bankConstants.GET_BANK_BRANCHES_FAILURE:
      state = {
        ...state,
        getBankBranchesData: [],
        getBankBranchesLoading: false,
        getBankBranchesSuccess: false,
        getBankBranchesError: action.payload.error,
      };
      break;

    case bankConstants.ADD_TO_FAV_LIST_SUCCESS:
      state = {
        ...state,
        getBankBranchesData: updateDataWithFavList(
          state.getBankBranchesData,
          action.payload.ifsc,
          action.payload.type,
          action.payload.city
        ),
      };
      break;

    default:
      break;
  }

  return state;
};
