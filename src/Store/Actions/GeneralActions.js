import ActionTypes from './ActionTypes';

const showAlert = payload => {
  return {
    type: ActionTypes.showAlert,
    payload,
  };
};

const hideAlert = () => {
  return {
    type: ActionTypes.hideAlert,
  };
};

const ShowLoading = () => {
  return {
    type: ActionTypes.showLoading,
  };
};

const HideLoading = () => {
  return {
    type: ActionTypes.hideLoading,
  };
};
const Get_moviesData = (payload) => {
  return {
    type: ActionTypes.get_moviesData,
    payload
  };
};
const Reset_moviesData = () => {
  return {
    type: ActionTypes.reset_moviesData
  };
};

export {
  ShowLoading, HideLoading, showAlert, hideAlert, 
  Get_moviesData,Reset_moviesData,
};
