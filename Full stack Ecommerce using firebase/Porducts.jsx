import "../pages/ButtonsStyle.css";
import Cart from "./Cart";
function Products({ products , addToCart, ToatlItemsInCart, HandleGotoCart}) {

    return (
        <>
           <div className="ShowItems">
           <span className="ShowItems">{ToatlItemsInCart.length !== 0 ? ` Items : ${ToatlItemsInCart}` : "Items: 0"}</span>
           <button className="addCartBtn" onClick={HandleGotoCart}>GotoCart</button>
           </div>
            <h1 className="headp">Products</h1>
           <div className="proCrad">
           {products.map((product) => (
                <div className="proCard" key={product.id}>
                    
                    <img className="prodImg" src={product.image} alt={product.title} width="200" height="200" />
                    
              
                <div className="bottm">
                    <p className="price">${product.price}</p>
                    
                    <h2>{product.title.length > 15 ? product.title.slice(0, 10) + "..." : product.title}</h2>
                    <button className="addCartBtn" onClick={()=>addToCart(product)} >Add to Cart</button>
                </div>
                </div>
            ))}
         
           </div>
        </>
    );
}
export default Products;
