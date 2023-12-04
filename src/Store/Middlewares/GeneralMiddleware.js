import Axios from 'axios';
import { ShowLoading, HideLoading, showAlert, Pages, Get_businessFinancing, Reset_businessFinancing, Reset_businessCreditCards, Get_businessCreditCards, Get_entityFormations, Reset_entityFormations, Reset_moviesData, Get_moviesData } from '../../Store/Actions/GeneralActions';
import Apis from '../../config/Apis';
import { getHeaders } from '../../Utils';
import { Alert } from 'react-native';


export const GeneralMiddleware = {

    // getMovies: () => {
    //     return dispatch => {
    //         dispatch(ShowLoading());
    //         return new Promise(async (resolve, reject) => {
    //             try {
    //                 const { data } = await Axios.get(Apis.moviesList, await getHeaders())
    //                 if (data?.success) {
    //                     // dispatch(Pages(data?.data))
    //                     resolve(data?.result)
    //                     dispatch(HideLoading())
    //                 } else {
    //                     reject(data)
    //                     dispatch(HideLoading())
    //                 }
    //             } catch (error) {
    //                 reject(error)
    //                 dispatch(HideLoading())
    //             }
    //         })
    //     }
    // },

    getMovies: (userdata) => {
        return dispatch => {
            dispatch(ShowLoading());
            return new Promise(async (resolve, reject) => {
                try {
                    // let formdata = new FormData();
                    // formdata.append('type_id', userdata?.type_id);
                    const { data } = await Axios.get(
                        Apis.moviesList,
                        await getHeaders());
                    if (data) {
                        dispatch(Get_moviesData(data?.results))
                        resolve(data);
                        dispatch(HideLoading())

                    }
                    else {
                        // let response = {
                        //     data: [],
                        //     links: {},
                        //     meta: {}
                        // }
                        dispatch(Get_moviesData([]))
                        resolve(true)
                        dispatch(HideLoading())

                    }

                } catch (error) {
                    reject(error)
                    dispatch(HideLoading())

                }
            });
        }
    },



}