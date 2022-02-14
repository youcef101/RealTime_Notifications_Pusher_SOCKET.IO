import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
//import { io } from "socket.io-client";


function App() {
  const [user, setUser] = useState('')

  /* useEffect(() => {
    const socket = io("http://localhost:8001");
    socket.on('firstSend', Msg => {
      console.log(Msg)
    })
  }, []) */

  return (
    <div className="App">
      {!user ?
        <Login setUser={setUser} />
        :
        <Home user={user} />
      }
    </div>
  );
}

export default App;
