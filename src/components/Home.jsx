import React from 'react'
import { useState } from 'react'
import App from '../App'
import {BrowserRouter,Routes,Route, Link,useNavigate, Outlet } from 'react-router-dom'
import Menu from './Menu'
import Items from './item/Items'


const Home = () => {
  function ChangeCount(){
    const [likeCounter, setlikeCounter] = useState(0)//დალაიქების მდგომარეობა
    setlikeCounter(likeCounter + 1 )
    localStorage.setItem("item", likeCounter + 1);//ვინახავ ლოკალში დალაიქებას 
  }
  return (
    <>
    <Items  onClick={ChangeCount} /> 
    </>
  )
}

export default Home