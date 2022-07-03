import axios from "axios";
import {CryptoProps} from "../types/types";

export const cryptocurrencyAPI = {
    getCryptocurrency() {
        return axios.get<CryptoProps>('https://api.coincap.io/v2/assets')
    },
    getCryptocurrencyLimit() {
        return axios.get<CryptoProps>('https://api.coincap.io/v2/assets?limit=3')
    },
}