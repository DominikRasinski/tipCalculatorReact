import React from 'react';
import css from './tipCalculator.module.css';


interface calculatorProps extends HTMLInputElement{

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
        <div>
            <p>Bill</p>
            <input type="number" name="" id="" />
            <p>Select Tip %</p>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <input type="number" name="" id="" />
            <p>Number of People</p>
            <input type="number" name="" id="" />
        </div>
    )
}

const RightCalculatorStructure = (props: calculatorProps) => {
    return (
        <div>
            <div>
                <p>Tip Amount</p><span>/ person</span>
                <p><span>$</span>0.00</p>
            </div>
            <div>
                <p>Total</p><span>/ person</span>
                <p><span>$</span>0.00</p>
            </div>
        </div>
    )
}