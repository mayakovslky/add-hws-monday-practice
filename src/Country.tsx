import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilter: (filter: BanknotsType) => void
    filter: BanknotsType
}

export const Country = (props: CountryPropsType) => {

    const setAll = () => {
        props.setFilter('All')
    }
    const setDollars = () => {
        props.setFilter('Dollars')
    }
    const setRUBLS = () => {
        props.setFilter('RUBLS')
    }

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

