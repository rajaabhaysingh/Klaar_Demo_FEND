import { bankConstants } from "../actions/constants";

const initialState = {
  getBankBranchesData: [],
  getBankBranchesLoading: false,
  getBankBranchesSuccess: false,
  getBankBranchesError: null,
};

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
        getBankBranchesData: action.payload.data,
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

    default:
      break;
  }

  return state;
};
