import React, { FC } from 'react';
import './modal.scss'

export interface IActive {
    active: boolean;
    setActive: (arg: boolean) => void;
}



const Modal: FC<IActive> = ({active, setActive, children}) => {
    return (
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)} >
                <div 
                    className={active ? "modal__content active" : "modal__content"}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.stopPropagation()
                    }}
                >
                    <button 
                        className='modal__content-btn' 
                        style={{height: '20px'}}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>{
                            e.preventDefault();
                            setActive(false);
                        } }
                    >
                        &times;
                    </button>
                    {children}
                </div>
            </div>
    );
};

export default Modal;