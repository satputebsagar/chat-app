import React from 'react'
import Chat from "./components/Chat/Chat.js";
import Join from "./components/Join/Join.js"

import {BrowserRouter as Router,Route} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join}/>
      <Route path="/chat" component={Chat}/>
    </Router>
  )
}

export default App