import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './cart/Cart'
import like  from './header/icons/like-red.png'
import cart  from './header/icons/cart.svg'
import home  from './header/icons/home.svg'
import styles from './header/Header.module.css'


const Menu = ({menu}) => {
  var d = localStorage.getItem("item");
  var produqti = JSON.parse(localStorage.getItem('carts'))
  
  //console.log("darenderda meniu ")


  
  return (
    <>
    <nav>
     
      
      <div className='row'> 
    <div className={styles.header}>
      <div className={styles.header_nav}>
      <Link to='..' relative='path'>
            
            <img className={styles.like_button_red} src={home} alt="cart" /></Link>
        <div className={styles.like_container}>
          <div className='like-button '>
            <div className={styles.like_button_count}>{d}</div>
            <img className={styles.like_button_red} src={like} alt="like" />
          </div>
        </div>
        <div className={styles.like_container}>
          <div className='like-button'>
          <Link to={"/cart"}><div className={styles.like_button_count_cart}>{produqti.length}</div>
            
            <img className={styles.like_button_red} src={cart} alt="cart" /></Link>
            
            
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
    </nav>
    </>
  )
}

export default Menu