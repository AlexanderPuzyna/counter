import React, {useState} from 'react';
import s from "./Counter.module.css"

type CounterPropsType = {
    count: number
}


const Counter = (props:CounterPropsType) => {



    return (
        <div>
            <div className={props.count===5?s.red:s.display}>{props.count}</div>


        </div>
    );
};

export default Counter;