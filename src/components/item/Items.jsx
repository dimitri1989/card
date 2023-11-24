import React from 'react'
import  axios  from 'axios'
import { useState, useEffect } from 'react'
import items  from './icons/macbook-air-space-gray-select-201810 1.png'
import like2  from './icons/like2.svg'
import yidva  from './icons/buy-button.svg'

import Item from './Item'

import  './items.css'
import Info from '../cart/Info'

const Items = ({onClick,setcartItem,cartItem}) => {//ვიღებ ფუნქციას მდგომარეობის დალაიქების

 
  
    const [carts, setcarts ] = useState([])//ვაცხადებ მდგომარეობას ნივთების  რომელიც მომაქ ჯეისონით
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(response => setcarts(response.data))//მივიღე ნივთები
     
  },[])

  var elemenets 
  elemenets = carts.products //მასივში გადავიტანე
  

 var [cartss,setcartss] = useState([])//გამოვაცხადე მეორე უკვე მასივისათვის მდგომარეობა
  return (
    <div className='row'>
      
      <div className='items'>
        { elemenets ?  elemenets.map((o,index)=>{//გადავცემ ობიექტებს ციკლში ითემს
         return  <Item onClick={onClick} key={index} {...o} setcartss={setcartss} cartss={cartss}  />
         //გადავცემ ფუნქციას onclick რომელიც home დან მომაქ და ობიექტებს ასევე მდგომარეობის ფუნქციას და თავად ცვლად carts 
         //რომ ვიცოდე მდგომარეობა carts ის  
        } )  : "" }
       
        
      </div>
    </div>
  )
}

export default Items