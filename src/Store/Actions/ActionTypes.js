const ActionTypes = {
  isLogin: 'IS_LOGIN',
  showAlert: 'SHOW_ALERT',
  hideAlert: 'HIDE_ALERT',
  showLoading: 'SHOW_LOADING',
  hideLoading: 'HIDE_LOADING',

  //user 
  USER_DATA: 'USER_DATA',
  LOGOUT: 'LOGOUT',
  GET_USER: 'GET_USER',

  //Cart
  ADD_TO_CART: 'ADD_TO_CART',

  //Payment 
  subscriptions: 'SUBSCRIPTIONS',
  Cards: 'CARDS',
  updateCards: 'UPDATE_CARDS',
  deleteCard: 'DELETE_CARD',

  //Pages
  pages: 'PAGES',

  //Notification
  get_notification: 'get_notification',
  reset_notification: 'reset_notification',
  notificationSwitch: 'notificationSwitch',



  // Chat
  GET_CHAT: "GET_CHAT",
  RESET_CHAT: "RESET_CHAT",
  UPDATE_CHAT: "UPDATE_CHAT",
  CHAT_HEAD: "CHAT_HEAD",
  DELETE_HEAD: "DELETE_HEAD",

  // General
  get_moviesData: 'get_moviesData',
  reset_moviesData: 'reset_moviesData',
  
  get_businessFinancing: 'get_businessFinancing',
  reset_businessFinancing: 'reset_businessFinancing',

  get_businessCreditCards: 'get_businessCreditCards',
  reset_businessCreditCards: 'reset_businessCreditCards',

  get_entityFormations: 'get_entityFormations',
  reset_entityFormations: 'reset_entityFormations',
};

export default ActionTypes;
