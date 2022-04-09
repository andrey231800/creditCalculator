import React, { FC, useState } from 'react';
import { IDetails } from '../../types/modal';
import CalcResults from '../calcResults/CalcResults';
import './calcDetails.scss'
import Modal from './modal/Modal';
import ModalContent from './modal/modalContent/ModalContent';


const CalcDetails: FC<IDetails> = ({input, select, secondSelect,payPerMonth, totalPaying ,totalOverpayment, difTotalPaying, inputProcents}) => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setModalActive(true);
    }


    return (
       <div className='details_list'>
            <div className="details_list-btn">
                    <button onClick={clickHandler}>
                        <span>
                            Детали расчета
                        </span>
                    </button>
            </div>
            <div className="details_list-block">
                    <Modal active={modalActive} setActive={setModalActive}>
                            <div className='results_wrapper'>
                                <h2>Результаты расчета</h2>
                                <CalcResults 
                                    payPerMonth={payPerMonth}
                                    totalPaying={totalPaying}
                                    totalOverpayment={totalOverpayment}
                                    difTotalPaying={difTotalPaying}
                                    secondSelect={secondSelect}
                                />
                                <ModalContent 
                                   select={select}  
                                   input={input} 
                                   payPerMonth={payPerMonth}
                                   inputProcents={inputProcents}
                                />
                            </div>
                    </Modal>
            </div>
       </div>
    );
};

export default CalcDetails;