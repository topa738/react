import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PropTypes from 'prop-types';

function imprimir(prop){
  console.log(prop.value)
}

ContadorApp.propTypes = {
  prop: PropTypes.number
};

function ContadorApp (prop) {
  const num=prop.value
  return (
    <div className="App">
          <h1>CounterApp</h1>
          <h2>{prop.value}</h2>
          <button onClick={() => imprimir(prop)}>
            button
        </button>
    </div>
    
     
  )
}

export default ContadorApp 
