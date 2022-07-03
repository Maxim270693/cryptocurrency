import {Dispatch} from "redux";
import {getCryptocurrency, setError} from "../../actions/actionCreators";
import {cryptocurrencyAPI} from "../../dal/API";

export const getCryptocurrencyTC = () => (dispatch: Dispatch) => {
    try {
        dispatch(setError(true))
        cryptocurrencyAPI.getCryptocurrency()
            .then((res) => {
                dispatch(getCryptocurrency(res.data.data))
            })
    } catch (error) {
        console.log('e', error)
    } finally {
        dispatch(setError(false))
    }
};