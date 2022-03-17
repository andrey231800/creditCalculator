import React, { FC } from 'react';
import './calcResults.scss'

export interface IInput {
    secondSelect: string;
    payPerMonth: number | string
    totalPaying: number | string
    totalOverpayment: number | string
    difTotalPaying: number | string
}

const CalcResults: FC<IInput> = ({ secondSelect ,payPerMonth, difTotalPaying, totalOverpayment, totalPaying}) => {
    // Number(input)
    

    return (
        <>
            <div className='results'>
                {secondSelect === '1' ? 
                    <div className='results__div'>
                        <label htmlFor="">Ежемесячный плаеж:</label>
                        <div>{payPerMonth ? payPerMonth : 0} ₽</div>
                    </div> : 
                    <>
                        <div className='results__div'>
                            <label htmlFor="">Максимальный платеж:</label>
                            <div>{difTotalPaying ? difTotalPaying : 0} ₽</div>
                        </div>
                        <div className='results__div'>
                            <label htmlFor="">Минимальный платеж:</label>
                            <div>{totalOverpayment ? totalOverpayment : 0} ₽</div>
                        </div>
                    </>
                    
                }
                
                <div className='results__div'>
                    <label htmlFor="">Сумма выплат по кредиту:</label>
                    <div>{totalPaying ? totalPaying : 0} ₽</div>
                </div>
                <div className='results__div'>
                    <label htmlFor="">Общая сумма переплат:</label>
                    <div>{totalOverpayment ? totalOverpayment : 0} ₽</div>
                </div>
                
            </div>
            
        </>
    );
};

export default CalcResults;