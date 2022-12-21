import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
            <Banknote color={props.money.banknotes === 'Dollars' ? 'green' : 'brown' }>
                <Name>{props.money.banknotes}</Name>
               <Nominal>{props.money.value}</Nominal>
            </Banknote>

    );
};

const Name = styled.div`
  margin-top: 50px;
`

const Nominal = styled.div`
  margin-top: 25px;
  font-size: 30px;
  font-weight: 600;
`

const Banknote = styled.div`
  background-color: ${props => {
      if(props.color === 'green') {
          return 'green'
      } else {
          return 'brown'
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`