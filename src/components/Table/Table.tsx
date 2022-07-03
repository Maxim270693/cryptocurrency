import React from 'react';
import {CryptocurrencyProps} from "../../types/types";
import './style.scss';

const Table: React.FC<{ cryptocurrency: CryptocurrencyProps[] }> = ({cryptocurrency}) => {

    return (
        <table className='wrapper'>
            <thead>
            <tr>
                <th>name</th>
                <th>price</th>
                <th>description</th>
            </tr>
            </thead>
            <tbody>
            {
                cryptocurrency.map(item => {
                    const priceUsd = Number(item.priceUsd).toFixed(2)

                    return (
                        <tr key={item.id}>
                            <td className='title'
                                onClick={() => console.log('click', item.id)}
                            >
                                {item.name}
                            </td>
                            <td className='price'>{priceUsd}</td>
                            <a href={item.explorer}>
                                <td className='description'
                                >
                                    {item.explorer}
                                </td>
                            </a>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default Table;