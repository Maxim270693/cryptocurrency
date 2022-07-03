import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch} from "react-redux";
import {getCryptocurrencyTC} from "./bll/thunks/thuksCreators";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getCryptocurrencyTC())
    },[])

    return (
        <div className="App">

        </div>
    );
}

export default App;
