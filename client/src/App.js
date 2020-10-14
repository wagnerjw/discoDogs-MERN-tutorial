import React from 'react';
import './App.css';
import {Router, Link} from "@reach/router";
import NewDog from "./Components/NewDog";
import AllDogs from "./Components/AllDogs";
import EditDog from "./Components/EditDog";

function App() {

  return (
    <div className="App">
      <div className="container"></div>

        <h1>Disco Dogs</h1>
        
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to="/new"><button>New Dog</button></Link>
        </nav>

        <Router>
          <AllDogs path="/" />
          <NewDog path="/new" />
          <EditDog path="/edit/:_id" />
        </Router>
    </div>
  );
}

export default App;
