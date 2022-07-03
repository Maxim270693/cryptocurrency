import React, {useEffect} from 'react';
import './App.scss';
import Table from "../Table/Table";
import Header from "../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {CryptocurrencyProps, RootStateType} from "../../types/types";
import {getCryptocurrencyTC} from "../../bll/thunks/thuksCreators";

function App() {
    const dispatch = useDispatch();
    const cryptocurrency = useSelector<RootStateType, CryptocurrencyProps[]>(state => state.crypto.cryptocurrency)
    const isLoading = useSelector<RootStateType, boolean>(state => state.crypto.isLoading)

    useEffect(() => {
        // @ts-ignore
        dispatch(getCryptocurrencyTC())
    }, [])
    return (
        <div className="App">
            {
                cryptocurrency.length > 0
                    ? <>
                        <Header cryptocurrency={cryptocurrency}/>
                        <Table cryptocurrency={cryptocurrency}/>
                    </>
                    : <div style={{textAlign: 'center'}}>Loading...</div>
            }
        </div>
    );
};

export default App;
