import "./styles.css";
import { useState } from "react";
import Select from "./components/Select";
import Input from "./components/Input";
export default function App() {
  const [amount, setAmount] = useState("");
  const [select, setSelect] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [totalTip, setTotalTip] = useState(0);

  const handleCalculate = () => {
    const total = Math.ceil((amount * select) / numPeople);
    setTotalTip(total);
    setAmount("");
    setNumPeople("");
  };
  // setAmount("");
  //   setNumPeople("");
  //   setTotalTip("");
  console.log(totalTip);
  return (
    <div className="App">
      <h1>Tip calculator</h1>
      <p>How much was your bill?</p>
      <Input
        placeholder="total amount"
        value={amount}
        handleChange={(e) => setAmount(e)}
      />
      <Select value={select} handleSelect={(e) => setSelect(e)} />
      <Input
        placeholder="number of people"
        value={numPeople}
        handleChange={(e) => setNumPeople(e)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <p>Total Tip</p>
        <p>{totalTip}</p>
      </div>
    </div>
  );
}
