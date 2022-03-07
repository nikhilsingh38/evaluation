import { useState } from "react";

export function Inventory() {
    const [counter, setCounter] = useState(13);

    const [pen, setPens] = useState(10);

    const [notebook, setNotebooks] = useState(44);

    const [inkpens, setInkpens] = useState(78);

    const handleChange = (value) => {
        setCounter(counter + value)
    }
    const handleChange1 = (value) => {
        setPens(pen + value)
    }
    const handleChange2 = (value) => {
      setNotebooks(notebook + value);
    };
    const handleChange3 = (value) => {
      setInkpens(inkpens + value);
    };
    return (
      <div className="items">
        <span>Books:</span>
        <button className="addBook" onClick={() => handleChange(1)}>
          +
        </button>
        <button className="remBook" onClick={() => handleChange(-1)}>
          -
        </button>
        <span className="totalBooks">{counter}</span>
        <span>Pens:</span>
        <button className="addPen" onClick={() => handleChange1(1)}>
          +
        </button>
        <button className="remPen" onClick={() => handleChange1(-1)}>
          -
        </button>
        <span className="totalPens">{pen}</span>
        <span>Notebooks:</span>
        <button className="addNotebook" onClick={() => handleChange2(1)}>
          +
        </button>
        <button className="remNotebook" onClick={() => handleChange2(-1)}>
          -
        </button>
        <span className="totalNotebooks">{notebook}</span>
        <span>InkPens:</span>
        <button className="addInkpen" onClick={() => handleChange3(1)}>
          +
        </button>
        <button className="remInkpen" onClick={() => handleChange3(-1)}>
          -
        </button>
        <span className="totalInkpens">{inkpens}</span>
        <div className="total">{counter + pen + notebook + inkpens}</div>
      </div>
    );
}