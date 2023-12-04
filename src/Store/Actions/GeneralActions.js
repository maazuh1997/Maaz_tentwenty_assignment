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
const Pages = (payload) => {
  return {
    type: ActionTypes.pages,
    payload,
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
const Get_businessFinancing = (payload) => {
  return {
    type: ActionTypes.get_businessFinancing,
    payload
  };
};
const Reset_businessFinancing = () => {
  return {
    type: ActionTypes.reset_businessFinancing
  };
};
const Get_businessCreditCards = (payload) => {
  return {
    type: ActionTypes.get_businessCreditCards,
    payload
  };
};
const Reset_businessCreditCards = () => {
  return {
    type: ActionTypes.reset_businessCreditCards
  };
};

const Get_entityFormations = (payload) => {
  return {
    type: ActionTypes.get_entityFormations,
    payload
  };
};
const Reset_entityFormations = () => {
  return {
    type: ActionTypes.reset_entityFormations
  };
};
export {
  ShowLoading, HideLoading, showAlert, hideAlert, Pages,
  Get_businessFinancing, Reset_businessFinancing,
  Get_businessCreditCards, Reset_businessCreditCards,
  Get_entityFormations, Reset_entityFormations,
  Get_moviesData,Reset_moviesData,
};
