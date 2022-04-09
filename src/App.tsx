import React from 'react';
import { FC } from 'react';

import './App.scss';

import { useState, useEffect } from 'react';

import CalcDetails from './components/calcDetails/CalcDetails';
import CalcResults from './components/calcResults/CalcResults';
import InputForm from './components/inputForm/InputForm';
import Descr from './components/description/Descr';
import { InputEvent, NumStr, SelectEvent } from './types/customTypes';

export interface FetchArray{
  Data: string ;
  Value: number ;
}

const App:FC = () => { 

  const date = new Date()
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const dateParse = `${year}-${month}-${day}`

  const URL = `https://www.nbrb.by/api/refinancingrate?onDate=${dateParse}`;

  useEffect(() => {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            setFetchData(data[0].Value + 5)
        })
        .catch(err => console.log(err.message))
  }, [])


  const [inputText, setInputText] = useState<NumStr>('1000');

  const [fetchData, setFetchData] = useState<NumStr>(14);

  const [selectState, setSelectState] = useState<string>('12');

  const [selectSecondState, setSelectSecondState] = useState<string>('1');

  const selectHandler = (e: SelectEvent) => {
    setSelectSecondState(e.target.value)
  }

  const handleChangeSelect = (e: SelectEvent) => {
    setSelectState(e.target.value)
  }

  const regEx: RegExp = /[№, \^, A-Z, a-z, !, `,?, §, +, -, А-Я, а-я, ±, #,@, ", ',  \/, \\, :, ;, ~, >, <, \[, \]]/g;

  const handleChange = (e: InputEvent) => {
    setInputText(e.target.value.replace(regEx, ''))
  }

  const handleFetchChange = (e: InputEvent) => {
    setFetchData(e.target.value.replace(regEx, ''));
  }

  //CalcResults

  const credit = +inputText;
  const procent = +fetchData/12/100;

  const months = +selectState;
  const koefficient = +((procent*(Math.pow(procent + 1 ,months)))/((Math.pow(procent + 1,months)) - 1))
  const payPerMonth = +(credit * koefficient).toFixed(2);
  const totalPaying = +(payPerMonth * months).toFixed(2);
  const totalOverpayment = +(totalPaying - credit).toFixed(2);
    //Диффер подсчет

  const mainDebt = credit/month;
  const procentSum = credit* +fetchData/100 * 30/365;
  const difTotalPaying = (mainDebt + procentSum).toFixed(2)



  return (
    <>
      <Descr />
      <div className='wrapper'>
        <form className='form' action="">
         <InputForm 
            input={inputText} 
            handleChange={handleChange}
            handleFetchChange={handleFetchChange}
            selectState={selectState}
            handleChangeSelect={handleChangeSelect}
            secondSelectState={selectSecondState}
            selectHandler={selectHandler}
            rate={fetchData}
          />
          <div className='resdet_block'>
            <CalcResults
              secondSelect={selectSecondState}
              payPerMonth={payPerMonth}
              totalPaying={totalPaying}
              totalOverpayment={totalOverpayment}
              difTotalPaying={difTotalPaying}
            />
            <CalcDetails 
              input={inputText} 
              select={selectState}
              secondSelect={selectSecondState}
              inputProcents={fetchData}
              payPerMonth={payPerMonth}
              totalPaying={totalPaying}
              totalOverpayment={totalOverpayment}
              difTotalPaying={difTotalPaying}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default App;
