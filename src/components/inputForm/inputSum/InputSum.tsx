import React, { FC} from 'react';
import './inputSum.scss'

interface Input {
    input: string | number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSum: FC<Input> = ({input, handleChange}) => {

    return (
            <>
                <div className={input ? 'input__calc' : 'input__calc red'}>
                    <span>Сумма кредита, руб</span>
                    <input type="text" value={input}  onChange={handleChange}/>
                </div>
                {input ? null : <div className='validation'>Введите сумму!</div>}
            </>
            
    );
};

export default InputSum;