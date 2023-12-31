
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Join from "./component/Join/Join"
import Chat from './component/Chat/Chat';

const ENDPOINT  = 'http://localhost:4500/'
// const socket =socketIO(ENDPOINT, {transports:["websocket"]})


function App() {

  // socket.on("connect",()=>{})


  return (
    <div className="App">
      
      <Router>
        
           <Routes>

            <Route exact path='/' Component={Join}/>
            <Route path='/chat' Component={Chat}/>
           </Routes>
           
        
      </Router>
    </div>
  );
}

export default App;
