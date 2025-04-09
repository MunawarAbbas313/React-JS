function Cart({cartItems, setGoBack}){

    return(
        <>
        <div className="Details">
        <h1 className="your">Your Cart</h1>
        <button className="goback" onClick={setGoBack}>Go Back</button>
        </div>
        {cartItems.length === 0 ?(
         <p>Cart is Empty</p>
        ):(
       
           <div className="CarItemdsdiv">
            <h2 className="cartItemHead">Items in Cart</h2>
            <div className="cartItemCount">
                <p>Total Items: {cartItems.length}</p>
                <p>Total Price: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
            </div>
             <div className="cartItmesDet">
                {cartItems.map((item, index) => (
                    <div className="cartItem" key={index}>
                        <img src={item.image} alt={item.title} width="100" height="100" />
                        <h2>{item.title.length > 15 ? item.title.slice(0, 10) + "..." : item.title}</h2>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
           </div>
        )}
        </>
    )
}
export default Cart;
