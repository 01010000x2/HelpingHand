import './App.css'
import Input from './components/Input'
import Button from './components/Button'



function App() {
  

  return (
    <>

    <div className='form'>
      <h1>login</h1>
     
      <input className='input' type="email" placeholder = "email"/>
      <input className='input' type="password" placeholder = "password" />
      <button>login</button>
    </div>

    </>
  )
}

export default App
