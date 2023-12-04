import {Platform} from 'react-native'
import Storage from '../Utils/AsyncStorage'

export const platform = Platform;

export async function getHeaders() {
    let token = await Storage.getToken();
    return {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };
}