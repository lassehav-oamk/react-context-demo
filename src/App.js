
import './App.css';
import A from './A'
import React from 'react'
import { DemoContext } from './Contexts'

function App() {

  const sharedInfo = "Hello world";

  return (
    <DemoContext.Provider value={ { foo: "bar" } }>
      <div>
        <h1>React context demo</h1>
        <A sharedInfo={sharedInfo} />
      </div>
    </DemoContext.Provider>
  );
}

export default App;
