import React, { useState } from 'react'
import "./App.css";

export const App = () => {
    const [result, setResult] = useState("");
    const handlerClick = (e) => {
        setResult(result.concat(e.target.name));
        console.log(e.target.name);
    }
    const clear = () => {
        setResult("");
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch(err) {
            setResult("Error");
        }
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" placeholder="0" value={result} />
                </form>
                <div className="keypad">
                    <button onClick={clear} className="clear">AC</button>
                    <button name="/" onClick={handlerClick}>&divide;</button>
                    <button name="*" onClick={handlerClick}>&times;</button>
                    <button name="-" onClick={handlerClick}>&ndash;</button>
                    <button name="7" onClick={handlerClick}>7</button>
                    <button name="8" onClick={handlerClick}>8</button>
                    <button name="9" onClick={handlerClick}>9</button>
                    <button name="+" onClick={handlerClick} className="suma">+</button>
                    <button name="4" onClick={handlerClick}>4</button>
                    <button name="5" onClick={handlerClick}>5</button>
                    <button name="6" onClick={handlerClick}>6</button>
                    <button name="1" onClick={handlerClick}>1</button>
                    <button name="2" onClick={handlerClick}>2</button>
                    <button name="3" onClick={handlerClick}>3</button>
                    <button name="0" onClick={handlerClick} className="cero">0</button>
                    <button onClick={calculate} className="igual">=</button>
                    <button name="." onClick={handlerClick}>.</button>
                </div>
            </div>
        </>
    );
};
