import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const Sub = () => {
    setCounter(counter - 1);
  };
  const Add = () => {
    setCounter(counter + 1);
  };
  const Reset = () => {
    setCounter(0);
  };

  // function isPrime(num) {
  //   for(let i = 2; i < num; i++)
  //     if(num % i === 0) return false;
  //   return num > 1;
  // }
  function isPrime(num){
    for(let i=2; i<num; i++)
      if(num%i===0) 
      return false
        return num>1
    
  }
  const isEven = counter % 2 === 0;
   const isPrimeNumber = isPrime(counter);

  return (
    <div>
      <div>
        <button
          disabled={counter === 0}
          onClick={Sub}
          data-testid="minusonebtn"
        >
          -1
        </button>
        <button onClick={Add} data-testid="plusonebtn">
          +1
        </button>
        <div>
          <button onClick={Reset} data-testid="resetbtn">
            Reset Count
          </button>
        </div>
      </div>
      <span data-testid="counter">Count:{counter}</span>
      <div>
        <span data-testid="odd-or-even">This Number is :{isEven ? "Even" : "Odd"}</span>
        <span data-testid="is-prime">Prime Number :{isPrimeNumber ? "true" : "false"}</span>
      </div>
    </div>
  );
}

export default App;
