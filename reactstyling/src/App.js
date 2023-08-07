import './App.css';
import { useEffect, useState } from 'react';
import style from "./app.module.css";
import styled from 'styled-components';

const List = styled.li`
color:green;
background:red;
`
const Ulist = styled.ul`
color:blue;
background:grey;
`



function App() {

  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [result, setResult] = useState(0)

  const addNumber = () => {

    setResult(numOne + numTwo);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNumber();
  };

  useEffect(() => {
    if (numOne === 0 || numTwo === 0) {
      setResult("");
    }
  }, [numOne, numTwo]);


  return (
    <div className="App">
      <form className={style.form} onSubmit={handleSubmit}>
        <input className={style.input} type="number" placeholder="enter the value 1" onChange={(event) => {
          console.log(+event.target.value);
          // check if the value should not be equal to empty.
          if (event.target.value === "") {
            setNumOne(0);
            return;
          }
          setNumOne(+event.target.value);

        }} />

        <input className={style.input} type="number" placeholder="enter the value 2" onChange={(event) => {
          console.log(event.target.value);
          if (event.target.value === "") {
            setNumTwo(0);
            return;
          }
          setNumTwo(+event.target.value);

        }} />

        <button type="submit" >+</button>
        <input className={style.inputtwo} type='number' placeholder={result === 0 ? "" : result} />
      </form>

      <div>
        <Ulist>
          <List>Apple</List>
          <List>Grapes</List>
        </Ulist>
      </div>
    </div>
  );
}

export default App;
