import ActionTypes from '../Actions/ActionTypes';

let initialState = {
  showAlert: false,
  alertOptions: null,
  loading: false,
  pages: null,
  getMoviesData: [],
  moviesDataPagination: null,
  getBusinessFinancing: [],
  businessFinancingPagination: null,
  getBusinessCreditCards: [],
  businessCreditCardsPagination: null,
  getEntityFormations: [],
  entityFormationsPagination: null,
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.showAlert:
      state = { ...state, showAlert: true, alertOptions: action.payload };
      break;

    case ActionTypes.pages:
      state = { ...state, pages: action.payload };
      break;

    case ActionTypes.hideAlert:
      state = { ...state, showAlert: false, alertOptions: null };
      break;

    case ActionTypes.showLoading:
      state = { ...state, loading: true };
      break;

    case ActionTypes.hideLoading:
      state = { ...state, loading: false };
      break;

    case ActionTypes.get_moviesData:
      console.log('action.payload',action.payload)
      state = { ...state, getMoviesData: action.payload };
      break;

    // case ActionTypes.get_moviesData:
    //   let getMoviesDatalist_copy = [];
    //   getMoviesDatalist_copy = [
    //     ...state.getMoviesData,
    //     ...action.payload.data,
    //   ];
    //   state = {
    //     ...state,
    //     moviesDataPagination: action.payload,
    //     getMoviesData: getMoviesDatalist_copy,
    //   };
    //   break;

    case ActionTypes.reset_moviesData:
      state = {
        ...state,
        moviesDataPagination: null,
        getMoviesData: [],
      };
      break;



    default:
      break;
  }
  return state;
};

export default GeneralReducer;
