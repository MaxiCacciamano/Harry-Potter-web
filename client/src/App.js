import './App.css';
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"
import {Route, Routes} from "react-router-dom";
import {getAll} from "../src/redux/actions/index"
import {Landing} from "../src/components/Landing/Landing.jsx"
import {Home} from "../src/components/Home/Home.jsx"
import {CountryId} from "../src/components/CountryById/CountryById.jsx"

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAll())
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route exacth path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route  path="/characters/:id" component={<CountryId/>} />
      </Routes>
    </div>
  );
}

export default App;
