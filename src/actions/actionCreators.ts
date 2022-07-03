import {GET_CRYPTOCURRENCY, SET_ERROR} from "../constants/constants";
import {CryptocurrencyProps} from "../types/types";

export const setError = (payload: boolean) => ({type: SET_ERROR, payload} as const);
export const getCryptocurrency = (payload: CryptocurrencyProps[]) => ({type: GET_CRYPTOCURRENCY, payload} as const);