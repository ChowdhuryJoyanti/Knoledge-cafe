import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
// import fakeData from'./fakeData.json';
import fakeData from '../public/fakeData.json';




import './App.css'
import Header from './Component/Header/Header';
import Blog from './Component/Blog/Blog';
import Questioins from './Component/Questions/Questioins';


function App() {
  const [count, setCount] = useState(0)
// console.log(fakeData);
  return (
    <div className="App">
   
    <Header></Header>
    <Blog></Blog>
    <Questioins></Questioins>
    </div>
  )
}

export default App
