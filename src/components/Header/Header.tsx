import React from 'react';
import {CryptocurrencyProps} from "../../types/types";
import './style.scss';
import {THREE_POPULAR_CRYPTOCURRENCIES} from "../../constants/constants";
import {NavLink} from "react-router-dom";

const Header: React.FC<{ cryptocurrency: CryptocurrencyProps[] }> = ({cryptocurrency}) => {

    const cryptocurrencyFiltered = cryptocurrency.filter(item => Number(item.rank) < THREE_POPULAR_CRYPTOCURRENCIES);

    return (
        <div className='header'>
            {cryptocurrencyFiltered.map(cryptocurrency => {
                const priceUsd = Number(cryptocurrency.priceUsd).toFixed(2)

                return (
                    <div className='header_wrapper'>
                        {cryptocurrency.name}:
                        <span className='price'>{priceUsd} USD</span>
                    </div>
                )
            })}
            <NavLink to='/briefcase'
                     className='link'
            >
                briefcase
            </NavLink>
        </div>
    );
};

export default Header;