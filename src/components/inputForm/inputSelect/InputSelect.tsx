import React, { FC } from 'react';
import './inputSelec.scss'

interface ISelect {
    selectState: string;
    handleChangeSelect: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

const InputSelect: FC<ISelect> = ({selectState, handleChangeSelect, children}) => {
    return (
        <div className='input__calc'>
                <span>Срок кредита:</span>
                <select name="select" id="" value={selectState} onChange={handleChangeSelect}>
                    {children}
                </select>
        </div>
    );
};

export default InputSelect;