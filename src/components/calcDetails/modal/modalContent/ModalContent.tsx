import React, { FC } from 'react';
import { NumStr } from '../../../../types/customTypes';
import { IContent } from '../../../../types/modal';
import { forFunc, formatDate } from './Functions';
import './modalContent.scss'



const ModalContent: FC<IContent> = ({select, input, payPerMonth, inputProcents}) => {
    

    return (
        <div className="modal__contents">
           <ul className='modal__contents-ul'>
               <li>Дата</li>
               <li>Платеж</li>
               <li>Проценты</li>
               <li>Тело кредита</li>
               <li>Остаток</li>
           </ul>
           <ul className='modal__contents-calc'>
                <li>{formatDate()}</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>{input}</li>
           </ul>
           {forFunc(select, inputProcents, payPerMonth, input)}
        </div>
    );
};

export default ModalContent;