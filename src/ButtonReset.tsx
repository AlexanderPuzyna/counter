import React from 'react';
import s from "./Counter.module.css";

type ButtonResetPropsType = {
    count: number
    reset: () => void
}

const ButtonReset = (props:ButtonResetPropsType) => {
    return (
        <div>
            <button className={props.count===5?s.resetRed:s.reset}
                    onClick={props.reset}
                    disabled={props.count!==5?true:false}
            >
                Reset
            </button>
        </div>
    );
};

export default ButtonReset;