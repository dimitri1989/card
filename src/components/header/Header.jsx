import {React,Fragment} from 'react'
import Home from '../Home'
import Cart from '../cart/Cart'
import Menu from '../Menu'
import like  from './icons/like-red.png'
import cart  from './icons/cart.svg'
import styles from './Header.module.css'
import {BrowserRouter,Routes,Route, Link,useNavigate  } from 'react-router-dom'
import MainLayouts from '../../layouts/MainLayouts'




const Header = ({likeCounter}) => {

    var d = localStorage.getItem("item");
    
  return (
    <>
   
    </>
  )
}

export default Header