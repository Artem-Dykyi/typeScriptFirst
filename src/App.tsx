import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//1
let age:number = 50;
let name:string = 'Max';
let toggle:boolean = true;
let empty:null = null;
let notInitialize:string | undefined = undefined;
let callback = (a:number) => { return 100 + a };

//2

let anything:any = -20;
anything = 'Text';
anything = {};

//3
let some:unknown;
some = 'Text';

let str: string;

if(typeof some  == 'string'){
  str = some;
}

//4
// кортеж строгий масив з певною кількість елементів чітко визначені 
let person:[string, number]
person =['Max', 21];

//5

// enum Role {LOADING, READY};

// const personia = {
// 	 role: Role.LOADING,
// 	}

// 	if (personia.role === Role.READY) {
// 	 console.log('Role: ', Role.LOADING);
// 	}

  /// enum типу починається 0 1 2 можна записати рядок якщо потрібно 
  type Role = 'LOADING' | 'READY';

const personia: { role: Role } = {
  role: 'LOADING'
};

//7
//приймає або рядок або число 

let union: string | number;
union = "Mark";
union = 4;

//8
// приймає саме зазначені числа 

let litera: 'enable' | 'disable';

function vubir (action: 'enable' | 'disable') {
	 if (action === 'enable') {
	   console.log('ви обрали enable');
	 } else {
	   console.log('ви обрали натиснули disable');
	 }
	}

//9
//типи для функцій 

function showMessage(message:string) {
 console.log(message);
}

function calc(num1:number, num2:number) {
 return num1 + num2;
}

function customError():void {
 throw new Error('Error');
}

function customError2():never {
 throw new Error('Error');
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
