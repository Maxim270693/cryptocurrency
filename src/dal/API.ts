import axios from "axios";
import {CryptocurrencyProps, CryptoProps} from "../types/types";

export const cryptocurrencyAPI = {
    getCryptocurrency() {
        return axios.get<CryptoProps>('https://api.coincap.io/v2/assets?limit=3')
    }
}