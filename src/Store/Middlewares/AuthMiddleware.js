import Axios from 'axios';
import { Alert } from 'react-native';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import AuthAction, { getUser, Logout, userData } from '../Actions/AuthAction';
import Apis from '../../config/Apis';
import { login } from '../../Store/Actions/AuthAction';
import { ShowLoading, HideLoading } from '../../Store/Actions/GeneralActions';

class AuthMiddleware {

  static login = (userdata) => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('email', userdata?.Username);
          formdata.append('password', userdata?.Password);
          formdata.append('device_id', userdata?.DevicesToken);
          const { data } = await Axios.post(Apis.login, formdata);

          if (data?.success) {

            await Storage.setToken(data?.data?.token);
            await Storage.set('@user', JSON.stringify(data?.data));
            dispatch(userData(data?.data));
            dispatch(login(true));
            dispatch(HideLoading());

          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };

  //   static socialLogin = (userData) => {
  //     return dispatch => {
  //       dispatch(ShowLoading());
  //       return new Promise(async (resolve, reject) => {
  //         try {
  //           let formdata = new FormData();
  //           formdata.append('email', userData?.email);
  //           formdata.append('first_name', userData?.first_name);
  //           formdata.append('last_name', userData?.last_name);
  //           formdata.append('device_id', userData?.token);
  //           const { data } = await Axios.post(Apis.socialSignup, formdata);
  //           console.log(data)
  //           if (data?.success) {
  //             await Storage.setToken(data?.data?.token);
  //             await Storage.set('@user', JSON.stringify(data?.data));
  //             dispatch(AuthAction.getUser(data?.data));
  //             dispatch(AuthAction.isLogin(true));
  //             dispatch(HideLoading());
  //           } else {
  //             dispatch(HideLoading());
  //             Alert.alert('Note', data?.message);
  //           }
  //         } catch (error) {
  //           reject(error);
  //           alert('Network Error');
  //           console.log(error);
  //           dispatch(HideLoading());
  //         }
  //       });
  //     };
  //   };

  static getUserData = () => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(
            Apis.getUserData,
            await getHeaders(),
          );
          if (data?.success) {
            resolve(data?.data)
            await Storage.set('@user', JSON.stringify(data?.data));
            dispatch(userData(data?.data));
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          if (error?.message == 'Request failed with status code 401') {
            await Storage.clearStorage()
            dispatch(Logout())
            Alert.alert('Note', error.response.data.message);
          } else {
            reject(error);
            Alert.alert('Note', error.response.data.message);
          }
          dispatch(HideLoading());
        }
      });
    };
  };


  static ForgotPassword = userData => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('email', userData?.Email);
          const { data } = await Axios.post(Apis.forgot_password, formdata);
          if (data?.success) {
            resolve(data);
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };

  static ConfirmPassword = userData => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('email', userData?.Email);
          formdata.append('password', userData?.Password);
          formdata.append('confirm_password', userData?.ConfirmPassword);

          const { data } = await Axios.post(Apis.change_password, formdata);
          if (data?.success) {
            resolve(data);
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };


  static SignUp = userData => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('first_name', userData?.first_name);
          formdata.append('last_name', userData?.last_name);
          formdata.append('contact_no', userData?.contact_no);
          formdata.append('email', userData?.email);
          formdata.append('password', userData?.password);
          formdata.append('confirm_password', userData?.confirm_password);
          formdata.append('business_name', userData?.business_name);
          formdata.append('business_zipcode', userData?.business_zipcode);
          formdata.append('business_website', userData?.business_website);
          formdata.append('business_start_date', userData?.business_start_date);
          formdata.append('organizational_structure', userData?.organizational_structure);
          formdata.append('duns_no', userData?.duns_no);
          formdata.append('business_address', userData?.business_address);
          formdata.append('dob', userData?.dob);
          formdata.append('gender', userData?.gender);

          const { data } = await Axios.post(Apis.signIn, formdata);
          if (data?.success) {
            resolve(data);
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };



  //   static updatePassword = userData => {
  //     return dispatch => {
  //       dispatch(ShowLoading());
  //       return new Promise(async (resolve, reject) => {
  //         try {
  //           let formdata = new FormData();
  //           formdata.append('old_password', userData?.old_password);
  //           formdata.append('password', userData?.password);
  //           formdata.append('confirm_password', userData?.confirm_password);
  //           const { data } = await Axios.post(
  //             Apis.updatePassword,
  //             formdata,
  //             await getHeaders(),
  //           );
  //           if (data?.success) {
  //             resolve(data);
  //             dispatch(HideLoading());
  //           } else {
  //             dispatch(HideLoading());
  //             Alert.alert('Note', data?.message);
  //           }
  //         } catch (error) {
  //           reject(error);
  //           alert('Network Error');
  //           console.log(error);
  //           dispatch(HideLoading());
  //         }
  //       });
  //     };
  //   };

  static CheckValidDun = (dun) => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('duns', dun);
          const { data } = await Axios.post(Apis.checkValidDun, formdata, await getHeaders());
          if (data?.success) {
            resolve(data?.data)
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };

  

  // user_id
  static Logout = (userid) => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          let formdata = new FormData();
          formdata.append('user_id', userid);
          const { data } = await Axios.post(Apis.logout, formdata, await getHeaders());
          if (data?.success) {
            await Storage.clearStorage()
            dispatch(Logout())
            dispatch(HideLoading());
          } else {
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error.response.data.message);
          dispatch(HideLoading());
        }
      });
    };
  };

  // Delete User 
  static DeleteAccount = () => {
    return dispatch => {
      dispatch(ShowLoading());
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(Apis.deleteUser, await getHeaders());
          if (data?.success) {
            await Storage.clearStorage()
            dispatch(Logout())
            dispatch(HideLoading());
            Alert.alert('Note', data?.message);
          }
        } catch (error) {
          reject(error);
          Alert.alert('Note', error?.response?.data?.message)
          dispatch(HideLoading());
        }
      });
    };
  };
}

export default AuthMiddleware;