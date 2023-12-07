import Axios from 'axios';
import { Alert } from 'react-native';
import { getHeaders } from '../../Utils';
import Storage from '../../Utils/AsyncStorage';
import AuthAction, { getUser, Logout, userData } from '../Actions/AuthAction';
import Apis from '../../config/Apis';
import { login } from '../../Store/Actions/AuthAction';
import { ShowLoading, HideLoading } from '../../Store/Actions/GeneralActions';

class AuthMiddleware {


}

export default AuthMiddleware;