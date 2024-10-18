import "./App.css";
import {Routes ,Route} from 'react-router-dom'
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Submit from "./components/Submit";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import FeaturedProducts from "./components/FeaturedProducts";
import SearchedProducts from "./components/SearchedProducts";
import React, { useState } from 'react'
import Admin from "./components/Admin";


function App() {
  // const [alert, setAlert] = useState(null)
  // const showAlert = (message,type) => {
  //   setAlert({
  //     msg: message,
  //     type : type
  //   })
  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1500);
  // }
  const [mode,setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#222831';
      document.body.style.color = 'white';
      // showAlert('Dark mode is enabled.','success')
      toggleColor();
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert('Light mode is enabled.','success')
      toggleColor();
    }
  }
  const [color,setColor] = useState('btn btn-dark mx-3');
  const toggleColor = () => {
    if(mode === 'light'){
      setColor('btn btn-light mx-3');
    }else{
      setColor('btn btn-dark mx-3')
    }
  }
  return (
    <>
      <Navbar title="DMProjects" aboutText="About" mode={mode} toggleMode={toggleMode} color={color}  />
      {/* <Alert alert={alert}/> */}
        <Routes>
          <Route path="/" element= {<div className="container my-3"><TextForm title="Enter your email:" email="Example@gmail.com" password="Password@123" mode={mode} /></div>}/>
          <Route path="about" element= {<About />}/>
          <Route path="submit" element= {<Submit />}/>
          <Route path="products" element= {<Products />}>
            <Route path="featured" element= {<FeaturedProducts/>}/>
            <Route path="new" element= {<SearchedProducts/>}/>
          </Route>
          <Route path="users" element= {<Users />}>
            <Route path=":userId" element= {<UserDetails />}/>
            <Route path="admin" element= {<Admin />}/>
          </Route>
          <Route path="*" element={<NoMatch />}/>      
        </Routes>
    </>
  );
}

export default App;
