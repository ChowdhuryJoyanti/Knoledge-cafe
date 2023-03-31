import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from'./fakeData.json';



import './App.css'
import Header from './Component/Header/Header';


function App() {
  const [count, setCount] = useState(0)
console.log(fakeData);
  return (
    <div className="App">
   
    <Header></Header>
    </div>
  )
}

export default App
