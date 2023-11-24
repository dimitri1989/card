import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import items from './icons/macbook-air-space-gray-select-201810 1.png';
import like2 from './icons/like2.svg';
import likeicon2 from './icons/likeicon2.svg';
import yidva from './icons/buy-button.svg';
import Cart from '../cart/Cart';
import Menu from '../Menu';

const Item = ({
  title,
  description,
  price,
  discountPercentage,
  brand,
  category,
  onClick,
  setcartss,
  cartss,
  images,
  id
//ვიღებ ობიექტებს ასევე მდგომარეობის ფუნქცია setcarts და ონკლიქის ფუნქციას რომელიც home დან მომაქვს
}) => {
  console.log("darenderda item")
  const [likeColor, setLikecolor] = useState(like2);//ვამუშავებ დალაიქების ფუნქციას იქონის შეტანისათვის
  const [onClick2, setonClick] = useState(0);//
  var [menu,setMenu] = useState(1)
  function changeLike() {
    setLikecolor(likeicon2);//წითელი იქონი დაამატე 
    if(likeColor !== likeicon2){//თუ არ უდრის წითელ იქონს ჩამისვი ჰომე დან წამოღებული ფუნქცია მდგომარეობაში
      setonClick(onClick)
    }
    
  }
  var [ob,setrob] = useState([])//არ ვამუშავებ

  function changecart (){
  //ქარდში გადამაქვს ნივთები
    setcartss([...cartss, {title,price,description,images,brand,discountPercentage,category,id}])
    //setcard არის მშობელი items  კომპონენტიდან წამოღებული მდგომარეობა ცვლადის რომელსაც ვშლი ობიეტად 
    localStorage.setItem("carts", JSON.stringify(cartss));
    
    setMenu(menu + 1)
    //და ეს ობიექტი შემაქვს  ლოკალში ვინახავ სტრინგად რადგან არ მაწყობს ობიექტად შენახვა ლოკალში
    
  }
  
  return (
    <>
      <div className="item-container d-flex">
      
        <div className="item-container__img">
          <img src={images[0]} alt="cart" />
        </div>
        <div className="item-container-elements p-2 pt-3">
          <div className="item-container-elements__title mb-2">{title}</div>
          <div className="item-container-elements__text mb-3">
            {description}
          </div>
          <div className="text-brand d-flex ">
            <div className="item-container-elements__brendi me-1">{brand}</div>
            <div className="item-container-elements__procenti">
              {discountPercentage}% off
            </div>
          </div>
          <div className="text-buttons d-flex justify-content-between">
            <div className="item-container-elements__tanxa ">{price}$</div>
            <div className="buttons-shopping d-flex h-100">
            
              <button
                type="button"
                className="buttons-shoping__yidva me-2"
                onClick={changeLike}>
                <img src={likeColor} alt="" />
              </button>
              <button type="button" className="buttons-shoping__like" onClick={changecart}>
              
                <img src={yidva} alt="" />
              </button>
              
            </div>
          </div>
          <Link to={id.toString()}>დეტალურად...</Link>
        </div>
      </div>
    </>
  );
};

export default Item;
