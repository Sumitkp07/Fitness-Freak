import React,{useState} from "react";
const ProductCard = (props) => {
    const [count, setCount] = useState(0)
  return (
    <>
                <div className="product-content">
                    <div className="product-image">
                        <img style={{backgroundSize:'cover',backgroundPosition:'center',mixBlendMode:'multiply'}} src={props.image} alt="" />
                    </div>
                    <h6 style={{color:"black",fontWeight:'600',margin:'6px auto'}}>{props.title}</h6>
                    <p  style={{color:'grey',fontWeight:'600',marginBottom:'0',fontSize:'0.9rem'}}>{props.para}</p>
                    <span style={{color:"black",fontWeight:'600'}}>{props.price}</span>
                    <div className="stars">
                    <span><i class="fa-solid fa-star" style={{color:'gold'}}></i></span>
                    <span><i class="fa-solid fa-star" style={{color:'gold'}}></i></span>
                    <span><i class="fa-solid fa-star" style={{color:'gold'}}></i></span>
                    <span><i class="fa-solid fa-star" style={{color:'gold'}}></i></span>
                    <span><i class="fa-regular fa-star" style={{color:'gold'}}></i></span>
                    </div>
                    <div className="products-btn">
                      <button onClick={()=>{
                        setCount(count+1)
                      }}
                       id="cart-btn"> <i class="fa-solid fa-cart-shopping" style={{color: '#fcfcfc'}}></i> Add cart</button>
                      <button onClick={()=>{
                        alert('this page is not avilable');
                      }} id="buy-btn"><i class="fa-solid fa-bag-shopping" style={{color: '#fcfcfc'}}></i> Buy</button>
                    </div>
                </div>
    </>
  );
};

export default ProductCard;
