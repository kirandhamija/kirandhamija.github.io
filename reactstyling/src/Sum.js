import './App.css';
import { useEffect, useState } from 'react';

function Sum() {

    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [result, setResult] = useState(0)

    const addNumber = () => {
        let newResult = numOne + numTwo;
        console.log("new result", newResult)
        setResult(numOne + numTwo);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        addNumber();
    };

    useEffect(() => { }, []);


    return (
        <div className="App">
            <h1>{numOne} + {numTwo} = {result === 0 ? "" : result}</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="enter the value 1" onChange={(event) => {
                    console.log(+event.target.value);
                    // check if the value should not be equal to empty.
                    if (event.target.value === "") {
                        setNumOne(0);
                        return;
                    }
                    setNumOne(+event.target.value);

                }} />

                <input type="number" placeholder="enter the value 2" onChange={(event) => {
                    console.log(event.target.value);
                    if (event.target.value === "") {
                        setNumTwo(0);
                        return;
                    }
                    setNumTwo(+event.target.value);

                }} />

                <button type="submit" >+</button>
            </form>
        </div>
    );
}

export default Sum;
