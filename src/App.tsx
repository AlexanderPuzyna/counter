import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import ButtonIncrement from "./ButtonIncrement";
import ButtonReset from "./ButtonReset";


function App() {

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)

    }

    const reset = () => {
        setCount(0)
    }


    return (
        <div className="app">
            <Counter count={count}/>
            <div className="buttons">
            <ButtonIncrement count={count} increment={increment}/>
            <ButtonReset count={count} reset={reset}/>
            </div>
        </div>
    );
}

export default App;
