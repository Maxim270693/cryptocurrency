import {ActionsType, CryptocurrencyProps, InitialStateType} from "../../types/types";
import {GET_CRYPTOCURRENCY, SET_ERROR} from "../../constants/constants";

export const initialState = {
    cryptocurrency: [] as Array<CryptocurrencyProps>,
    page: 1,
    isLoading: false,
}

export const cryptoReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_CRYPTOCURRENCY:
            return {
                ...state,
                cryptocurrency: action.payload
            }
        case SET_ERROR:
            return {...state, ...action.payload}
        default:
            return state
    }
};