import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import css from './tipCalculator.module.css';


interface calculatorProps extends InputHTMLAttributes<HTMLInputElement>{

}

export const MainCalculator = (props: calculatorProps) => {
    return (
        <div className={`${css.baseCalculator}`}>
            <LeftCalculatorStructure {...props} />
            <RightCalculatorStructure {...props} />
        </div>
    )
}

const LeftCalculatorStructure = (props: calculatorProps) => {
    return (
        <div className={`${css.leftContainer}`}>
            <p>Bill</p>
            <input type="text" name="" id="" />
            <p>Select Tip %</p>
            <div className='flex flex-row justify-between flex-wrap'>
                <button className={`${css.buttons}`}>5%</button>
                <button className={`${css.buttons}`}>10%</button>
                <button className={`${css.buttons}`}>15%</button>
                <button className={`${css.buttons}`}>25%</button>
                <button className={`${css.buttons}`}>50%</button>
                <input type="text" name="" id="" className={`${css.buttons}`}/>
            </div>
            <p>Number of People</p>
            <input type="text" name="" id="" />
        </div>
    )
}

const RightCalculatorStructure = (props: calculatorProps) => {
    return (
        <div className={`p-2 ${css.rightContainer}`}>
            <div>
                <p className='inline-block w-1/3'>Tip Amount</p><span>/ person</span>
                <p className='inline-block w-1/2'><span>$</span>0.00</p>
            </div>
            <div>
                <p className='inline-block w-1/3'>Total</p><span>/ person</span>
                <p className='inline-block w-1/2'><span>$</span>0.00</p>
            </div>
        </div>
    )
}