import { useState, useEffect } from "react";
import Products from "./Products";
import Cart from "./Cart";
import { useContext } from "react";
import { UserContext } from "../Components/UserContext";

function Home(){
    const { userEmail } = useContext(UserContext);
    const [products , setProducts] = useState([]);
    const [cart , setCrat] = useState([]);
    const [itemsIncCt , setItemsIncCt] = useState(0);
    const [showCart , setShowCart] = useState(false);
    const handleBackToProducts = ()=>{
        setShowCart(false); 
        setItemsIncCt(cart.length);
        setCrat([]);
        
    }



    const HandleCart = (product)=>{
        setCrat(prev => [...prev, product]);
        setItemsIncCt(prev => prev + 1);

    }
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const HandleGotoCart = ()=>{
        setShowCart(true);
    }
    
    return (
        <div className="home">
           <h2 className="hPg">Welcome to the Home Page {userEmail}</h2>

            <div className="cartPgLogo">
                
            </div>
            {showCart ? (
                <div className="cartPage">
                    
                    <Cart cartItems={cart} setGoBack={handleBackToProducts}/>
                </div>
            ) : (
                <Products products={products}  addToCart={HandleCart} ToatlItemsInCart= {itemsIncCt} HandleGotoCart={HandleGotoCart}/>

            )
            }
            

        </div>
    );
}

export default Home;
