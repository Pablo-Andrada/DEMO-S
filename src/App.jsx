import './App.css'

import Login from './components/Login';
import Register from './components/Register';
function App() {
  const isRegistered = true;

  return (
    <div>
      {isRegistered ? <Login/>:<Register/>}
   </div>
  )
}

export default App
