
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SetForm from './components/SetForm'
import { useCounter } from './hooks/useCounter'
function App() {
  const {count, increment, decrement, set} = useCounter();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {count}</h1>
      <div className="card">
        <button onClick={() => increment()}>
          increment
        </button>
        <button onClick={() => set(0)}>
          reset
        </button>
        <button onClick={() => decrement()}>
          decrement
        </button>
        <SetForm/>
      </div>
    </>
  )
}

export default App
