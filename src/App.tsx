import './App.css'
import { QBHS } from './components/QBHS'
import { amounts, names } from './components/consts'

function App() {
  return (
    <>
      <QBHS/>
      <datalist id="names">
        {names.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </datalist>
      <datalist id="amounts">
        {amounts.map((amount) => (
          <option key={amount}>{amount}</option>
        ))}
      </datalist>
    </>
  )
}

export default App
