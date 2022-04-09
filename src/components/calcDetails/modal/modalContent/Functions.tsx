import { NumStr } from "../../../../types/customTypes";
import { v4 as uuidv4 } from 'uuid';

const date = new Date()

let dd: NumStr
let mm: NumStr
let yy



export const forFunc = (arg: NumStr, inputProcents: NumStr, payPerMonth: NumStr, input: NumStr) => {

    let totalProcents = ((+input * +inputProcents/100 * 30)/365).toFixed(2);
    const creditBody = +(+payPerMonth - +totalProcents).toFixed(2);
    let remaindSum = +(+input - +creditBody).toFixed(2);

    
    
    let newArr = []

    for(let i=1; i<= arg; i++) {
        dd = date.getDate();
        mm = (date.getMonth() + i) + 1;
        yy = date.getFullYear();

        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;

        remaindSum = +(remaindSum - creditBody).toFixed(2)

        if(mm > 12){
            yy += 1;
            mm = i-8
            if(mm < 10) mm = '0' + mm;
            if(mm > 12) {
                yy += 1;
                mm = i-8
                if(mm < 10) mm = '0' + mm;
            }
        }
        const fullDate = `${dd}.${mm}.${yy}`;
        const arrOfLi = [fullDate, payPerMonth, totalProcents, creditBody, remaindSum]
        
        newArr.push(  
            <ul className='modal__contents-calc'>
                        {arrOfLi.map(li => 
                            <li key={uuidv4()}>{li}</li>
                        )}
            </ul>
        ) 
    }
    return newArr
}





export const formatDate = () => {

    let dd: NumStr = date.getDate();
    if(dd < 10) dd = '0' + dd;
    
    let mm: NumStr = date.getMonth() + 1;
    let yy = date.getFullYear();
        
    if(mm < 10) mm = '0' + mm;
    return dd + '.' + mm + '.' + yy;
    
}