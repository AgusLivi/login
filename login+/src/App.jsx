import Home from './Views/Home/Home'
import Form from './Components/Form/Form'
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  console.log(user);
  return (
      <div className='App'>
        {
          !user.length > 0 
          ? <Form setUser={setUser}/> 
          : <Home user={user} setUser={setUser}/>
        }

      </div>

  )
}

export default App
