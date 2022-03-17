import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import './inputProcents.scss'

interface IFetch {
    fetchingData:  number | string;
    handleFetchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputProcents: FC<IFetch> = ({fetchingData, handleFetchChange}) => {


    return (
        <>
            <div className={fetchingData ? 'input__calc' : 'input__calc red'}>
                    <span>Процентная ставка, % годовых</span>
                    <input 
                        type="text" 
                        onChange={handleFetchChange} 
                        value={fetchingData}
                    />
            </div>
            {fetchingData ? null : <div className='validation'>Введите проценты!</div>}
        </>
            
    );
};

export default InputProcents;