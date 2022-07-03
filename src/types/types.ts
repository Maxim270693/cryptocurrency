import {rootReducer} from "../bll/store/store";
import {initialState} from "../bll/reducers/cryptoReducer";
import {getCryptocurrency, setError} from "../actions/actionCreators";

// type Store
export type RootStateType = ReturnType<typeof rootReducer>;

// type Action
export type ActionsType = SetErrorActionType | GetCryptocurrencyActionType

export type SetErrorActionType = ReturnType<typeof setError>
export type GetCryptocurrencyActionType = ReturnType<typeof getCryptocurrency>

// type initialState
export type InitialStateType = typeof initialState

// type cryptocurrency
export type CryptocurrencyProps = {
    changePercent24Hr: string;
    explorer: string;
    id: string;
    marketCapUsd: string;
    maxSupply: string;
    name: string;
    priceUsd: string;
    rank: string;
    supply: string;
    symbol: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
}

export type CryptoProps = {
    data: CryptocurrencyProps[];
    timestamp: number;
}