import { useState } from 'react'
import './App.css'


// 1. Базові типи
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: string | undefined = undefined;
let callback = (a: number) => { return 100 + a };

// 2. Any
let anything: any = -20;
anything = 'Text';
anything = {};

// 3. Unknown
let some: unknown;
some = 'Text';
let str: string;
if (typeof some == 'string') {
  str = some;
}

// 4. Кортеж
let person: [string, number];
person = ['Max', 21];

// 5. Літеральні типи замість Enum
type Role = 'LOADING' | 'READY';
const personia: { role: Role } = {
  role: 'LOADING'
};

// 7. Union тип
let union: string | number;
union = "Mark";
union = 4;

// 8. Функція з чіткими параметрами
function vubir(action: 'enable' | 'disable') {
  if (action === 'enable') {
    console.log('ви обрали enable');
  } else {
    console.log('ви обрали натиснули disable');
  }
}

// 9. Типи для функцій
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// function customError(): never {
//   throw new Error('Error');
// }


function App() {
  const [count, setCount] = useState(0)

  
  const runTsExamples = () => {
    console.log(age, name, toggle, empty, notInitialize, callback(10));
    console.log(anything, some, str, person, personia, union);
    vubir('enable');
    showMessage("Привіт з TS!");
    console.log("Результат обчислення:", calc(5, 5));
    
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>InvestIQ: Шпаргалка TS</h1>
      
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1);
          runTsExamples(); 
        }}>
          Клікнули {count} разів (Дивись консоль)
        </button>
      </div>
    </div>
  )
}

export default App