import React, { FC } from 'react';
import './modalContent.scss'

interface IContent {
    select: number | string;
    input: number | string
    payPerMonth: number | string;
    inputProcents: string | number;
}

const ModalContent: FC<IContent> = ({select, input, payPerMonth, inputProcents}) => {

        

    const forFunc = (arg: number | string) => {
        let totalProcents = ((+input * +inputProcents/100 * 30)/365).toFixed(2);
        const creditBody = (+payPerMonth - +totalProcents).toFixed(2);
        const remaindSum = (+input - +creditBody).toFixed(2);

        

        const arr = [];
        for(let i=1; i<= arg; i++) {
            let dd: string | number = date.getDate();
            if(dd < 10) dd = '0' + dd;
        
            let mm: string | number = (date.getMonth() + i) + 1;
            let yy = date.getFullYear();
            
            if(mm < 10) mm = '0' + mm;

            if(mm > 12){
                yy = yy + 1;
                mm = i-10
                if(mm < 10) mm = '0' + mm;
                if(mm > 12) {
                    yy = yy + 1;
                    mm = i-10
                    if(mm < 10) mm = '0' + mm;
                }
            }
            

            
            const fullDate = dd + '.' + mm + '.' + yy;

            
            arr.push(
                <ul className='modal__contents-calc'>
                            <li>{fullDate}</li>
                            <li>{payPerMonth}</li>
                            <li>{totalProcents}</li>
                            <li>{creditBody}</li>
                            <li>{remaindSum}</li>
                     </ul>
            )  

        }
        return arr
    }

    const date = new Date()

   

    const formatDate = (d: Date) => {

        let dd: string | number = date.getDate();
        if(dd < 10) dd = '0' + dd;
        
        let mm: string | number = date.getMonth() + 1;
        let yy = date.getFullYear();
            
        if(mm < 10) mm = '0' + mm;
        return dd + '.' + mm + '.' + yy;
        
    }

    

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
                <li>{formatDate(date)}</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>{input}</li>
           </ul>
           {forFunc(select)}
        </div>
    );
};

export default ModalContent;