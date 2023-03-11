import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PropTypes from 'prop-types';

function imprimir(prop){
  console.log(prop)
}

ContadorApp.propTypes = {
  prop: PropTypes.number
};
function mostraralerta(count){
  alert(`El valor es igual ${count} devolverremos el contador a 0`)
  
}

function ContadorApp (prop) {
  const [count, setCount] = useState(prop.value)
  imprimir(count)//imprime el primer valor que se pasa como parametro 
  return (
    <div className="App">
          <h1>CounterApp</h1>
          <h2>{count}</h2>
          <button onClick={() => imprimir(count)
          }>
            button
        </button>
        <button onClick={() => { if(count+1==4){
          mostraralerta(count)
          setCount((count) => count = 0)
        }else{
          setCount((count) => count + 1)
        }
      }}>
          count is {count}
        </button>
    </div>
    
     
  )
}

export default ContadorApp 
