import React from 'react';
import s from "./Counter.module.css";

type ButtonIncrementPropsType = {
    count: number
    increment: () => void
}

const ButtonIncrement = (props:ButtonIncrementPropsType) => {
    return (
        <div>
            <button  className={s.increment}
                     onClick={props.increment}
                     disabled={props.count===5?true:false}
            >
                Increment
            </button>
        </div>
    );
};

export default ButtonIncrement;