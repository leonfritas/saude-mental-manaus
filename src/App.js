import React from "react";
import Header from './components/header'
import './App.css'
import { createGlobalStyle } from 'styled-components'
import AppRoutes from "./pages/routes";



function App() {
  return (
    <div >
     <GlobalStyle/>

      <AppRoutes/>

 
    </div>
      
    
  );
}



const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  list-style-type: none;
  text-decoration: none;
  font-family:  Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: black;
}

html{
  scroll-behavior: smooth;
}

`

export default App;