import React, { useState } from 'react';
import { useId } from 'react';
import {BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Menu from '../Menu';
import './Cart.css';
const Cart = () => {
  //const id = useId()
  var produqti = JSON.parse(localStorage.getItem('carts'));//მომაქვს ლოკალიდან შენახული ნივთები ვაკონვერტირებ ობიექტში
  //
  var [produqti2, setproduqti2] = useState(produqti)//ვქმნი მდგომარებოს ცვლადს რომელსაც დეფაულთად ვანიჭებ წამოღებულ ნივთებს
 ;

 
  function checkId (event){
    var name = event.target.getAttribute('id');//ვიღებ აიდს და name ს ვანიჭებ
    
    setproduqti2(produqti2 =>//ფუნქცია ფილტრით ვაბრუნებ მხოლოდ იმას რომელი დაკლიკებული ნივთის id არ უდრის name _ს
      produqti2.filter(employee => {
       
        return employee.id != name; //დამიბრუნე ის რომელიც არ ემთხვევა აიდი names  
      }),
    )//მაგრამ მაქვს ჩეპე გასასწორებელი წაშლის შედეგად რომ დავარეფლეშებ ლოკალიდან მოაქ ისევ ნივთები 
    //ამიტომ წაშლის შედეგად უნდა წავშალო ლოკალიდანაც ნივთები 
    
    return name
  }
  function daangarisheba (produqti2){
    
    var tanxa = produqti2.reduce(function (acc,value,key){ //თანხის დაანგარიშება
          return acc + value.price
      },0)
      return tanxa
  }
  console.log("darenderda card")
  return (
    <div className="cart-container">
      <h1 className='tanxa'>ჯამი {daangarisheba(produqti2)}$</h1>
      <h1 className='tanxa mt-5'>პროდუქტები {produqti2.length}ცალი</h1>
     
      {produqti2.map((produqti, index) => {
        //console.log(produqti.images[2]);
        
        return (
          <div
            className="cart-container__width item-container d-flex mt-5 " 
            key={index}>
              
            <div className="item-container__img">
              <img src={produqti.images[2] ? produqti.images[2] || produqti.images[1] : produqti.images } alt="cart" />
            </div>
            <div className="item-container-elements p-2 pt-3">
              <div className="item-container-elements__title mb-2">
                <span>დასახელება</span> {produqti.title}
                
              </div>
              <div className="item-container-elements__text mb-3"></div>
              <div className="text-brand">
                <div className="item-container-elements__brendi mb-2 me-1 ">
                  {produqti.brand}
                </div>
                <div className="item-container-elements__procenti border border-success">
                  <div className="text-secondary text-center mb-1">აღწერა</div>
                  {produqti.description}
                </div>
                <div className="item-container-elements__procenti mt-3">
                  <span>ფასდაკლება</span> {produqti.discountPercentage}% off
                </div>
              </div>
              <div className="text-buttons d-flex justify-content-between mt-2">
                <div className="item-container-elements__tanxa ">
                  <span>ფასი</span> {produqti.price}$
                </div>

                <div className="buttons-shopping d-flex h-100"></div>
              </div>
              <div className="item-container-elements__title mt-2">
                <span>კატეგორია</span> {produqti.category}
              </div>
            </div>
            <div className='delete-btn' id={produqti.id} onClick={(event)=>checkId(event)}>X</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
