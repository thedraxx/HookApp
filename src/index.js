import React from 'react';
import ReactDOM from 'react-dom';
// import { CallBackHook } from './components/06-memos/CallBackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import {Padre} from './components/07-tarea-memo/Padre';
// import './components/08-useReducer/intro-reducer';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './components/09-useContext/AppRouter';
import { NavBar } from './components/09-useContext/NavBar';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

