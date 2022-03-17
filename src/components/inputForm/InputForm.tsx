import React, { FC } from 'react';
import './inputForm.scss';
import InputSum from './inputSum/InputSum';
import InputSelect from './inputSelect/InputSelect';
import InputProcents from './inputProcents/InputProcents';
// import { FetchArray } from '../../App';


interface IUser {
    input: number | string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFetchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectState: string;
    handleChangeSelect: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    secondSelectState: string;
    selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    rate: number | string;
}

const InputForm: FC<IUser> = ({input, handleChange, handleFetchChange, selectState,handleChangeSelect, secondSelectState, selectHandler, rate}) => {

    return (
        <div className='inputsWrapper'>
            <div className='inputsWrapper_div'>
                <InputSum input={input} handleChange={handleChange} />
                <InputSelect selectState={selectState} handleChangeSelect={handleChangeSelect}>
                            <option value="1">1 месяц</option>
                            <option value="3">3 месяца</option>
                            <option value="6" >6 месяцев</option>
                            <option value="12">1 год</option>
                            <option value="24">2 года</option>
                            <option value="60">5 лет</option>
                </InputSelect>
            </div>
            <div className='inputsWrapper_div'>
                <InputSelect selectState={secondSelectState} handleChangeSelect={selectHandler}>
                            <option value="1">Аннуитетный</option>
                            <option value="2">Дифференцированный</option>
                </InputSelect>
                <InputProcents fetchingData={rate} handleFetchChange={handleFetchChange}/>
            </div>
        </div>
    )
};

export default InputForm;