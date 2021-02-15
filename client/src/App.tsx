import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
    const [test, setTest] = useState('')

    const callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        setTest(body.express)
        if (response.status !== 200) throw Error(body.message);
    };

  return (
    <div className="App">
        <p>{test}</p>
        <button onClick={() => callApi()}> click </button>
    </div>
  );
}
