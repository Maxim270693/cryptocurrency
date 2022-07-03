import {Dispatch} from "redux";
import {getCryptocurrency, setError} from "../../actions/actionCreators";
import {cryptocurrencyAPI} from "../../dal/API";

export const getCryptocurrencyTC = () => (dispatch: Dispatch) => {
    dispatch(setError(true))
    try {
        cryptocurrencyAPI.getCryptocurrency()
            .then((res) => {
                dispatch(getCryptocurrency(res.data.data))
            })
    } catch (error) {
        console.log('e', error)
    } finally {
        setError(false)
    }
};