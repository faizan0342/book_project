
import Header from "./HeaderComponent";
import Navbars from "./Navbars";
import HeaderSearchBars from "./HeaderSearchBars";
import OrderCartLoading from "./OrderCartLoading"
import { useState, useEffect } from "react";
import { productCardDetails } from "../../redux/action/action.js"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function OrderCard(props) {
  const history = useHistory()
  console.log("===>", props)
  var productId = props.match.params.id

  var dispatch = useDispatch()


  const [orderCount, setOrderCount] = useState(0)


  const Add = () => {
    setOrderCount(orderCount => orderCount + 1);
  }

  const Subtract = () => {
    setOrderCount(orderCount => (orderCount > 0 ? orderCount - 1 : 0));
  }

  useEffect(() => {
    dispatch(productCardDetails(productId))
  }, [])

  var Product = useSelector((state) => state.productCardDetail)

  var { loading, product, error } = Product

  console.log("product_Order_Cart ==========>", product)

  const handleBtnCheck = () => {
    // alert("this function proper workig")
    // history.push("/login")
    history.push("/userdetail")
  }

  return (
    // <Router>
    //   <Switch>
    //   <Route exact path="/"  component={App}/>
    //     <Route path="/productId/:id" component={ProductDeatil} />
    //   </Switch>
    <div className="App">
      <div className="mainContainer">
        <header className="header"><Header /></header>
        <div className="headerSearchBar"><HeaderSearchBars /></div>
        <div className="navBar"><Navbars /></div>
        <OrderCartLoading />
        <main className="main">
          <div className="orderCartItem">
            <div className="orderCartItemOne">Part 1 of 1 (In Stock - ready for dispatch)</div>
            <div className="orderCartItemTwo">Qty</div>
            <div className="orderCartItemThree">Amount</div>
          </div>
          {loading ? <div>Loading ....</div> :
            <div className="orderCartItem orderCartItemBox">
              <div className="orderCartItemBoxOne">
                <div className="productDetailImag">
                  <div><img src={product.image} alt={product.image}></img></div>
                  <div>
                    <div className="productDetailItem">
                      <h4 className="p-mb-1" style={{ color: "#3E5FB0", fontSize: "1rem" }}>{product.name}</h4>
                      <div>
                        <div className="p-mb-1" style={{ color: "#999999" }}> {product.brand}</div>
                        <div className="p-mb-1 SlideOneStock" style={{ color: "#999999" }}>{product.stock}</div>
                        <div className="p-mb-1" style={{ color: "#999999" }}>List Price : {product.listprice}</div>
                        <div className="p-mb-1" style={{ color: "#999999" }}>Our Price : <s>{product.ourPrice}</s> <span style={{ color: "#f7941d", fontWeight: "bold" }}>Rs : OurPrice</span></div>
                        <div className="p-mb-1" style={{ color: "#999999" }}>Strandard Discount :<span style={{ color: "#3E5FB0" }}>{product.discount}</span></div>
                        <div className="p-mb-1" style={{ color: "#999999" }}>You Save : {product.listprice} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orderCartItemBoxTwo">
                <div className="sumBtn"><button onClick={() => Add()} className="sum">+</button></div>
                <div className="count">{orderCount}</div>
                <div className="sumBtn"><button onClick={() => Subtract()} className="sum">-</button></div>
              </div>
              <div className="orderCartItemBoxThree">

                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>Amount : {product.ourPrice * orderCount}

              </div>
            </div>
          }
          <div className="subTotal">
            <div></div>
            <div></div>
            <div><b>subTotal : 0</b></div>
          </div>
          <div className="orderDefaultData">
            <div className="orderDefaultDataOne">
              <div style={{ color: "#f7941d", fontSize: "1rem", marginTop: "0.7rem", marginBottom: "0.7rem" }}><b>Gift Wrap</b></div>
              <div><input type="checkbox" /> [A charge of Rs.100 will apply.]</div>
              <div><input type="checkbox" /> Is this a gift for someone? If so, we will not send the invoice with the shipment.</div>
              <div style={{ color: "#f7941d", fontSize: "1rem", marginTop: "0.7rem", marginBottom: "0.7rem" }}><b>Special Instructions</b></div>
              <div>
                <textarea style={{ border: "1px solid black", width: "75%" }}></textarea>
              </div>
            </div>
            <div className="orderDefaultDataTwo">
              <div className="orderDefaultDataTwoChildOne">
                <div className="one">
                  <div style={{ border: "1px solid silver", paddingLeft: "1.7rem", paddingTop: "0.rem", paddingRight: "1.7rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Item</div>
                  <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>0</div>
                </div>
                &nbsp;&nbsp;
                <div className="one">
                  <div style={{ border: "1px solid silver", paddingLeft: "1rem", paddingTop: "0.5rem", paddingRight: "1rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Total Qty</div>
                  <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <input type="text" placeholder="Promo Code" style={{ paddingLeft: "2rem", paddingTop: "0.5rem", paddingRight: "2rem", paddingBottom: "0.5rem", marginTop: "0.5rem", border: "1px solid silver", marginLeft: "0.5rem" }}></input>
                  <div><button style={{ border: "1px solid silver", paddingLeft: "1rem", paddingTop: "0.5rem", paddingRight: "1rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Apply</button></div>
                </div>
                <div style={{ display: "flex" }}>
                  <input type="text" placeholder="Gift Card Code" style={{ paddingLeft: "2rem", paddingTop: "0.5rem", paddingRight: "2rem", paddingBottom: "0.5rem", marginTop: "0.5rem", border: "1px solid silver", marginLeft: "0.5rem" }}></input>
                  <div><button style={{ border: "1px solid silver", paddingLeft: "1rem", paddingTop: "0.5rem", paddingRight: "1rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Apply</button></div>
                </div>
              </div>
            </div>
            <div className="orderDefaultDataThree">
              <div className="one">
                <div style={{ border: "1px solid silver", width: "70%" , paddingLeft: "1.5rem" , paddingTop: "0.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Subtotal (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
              <div className="one">
                <div style={{ border: "1px solid silver", width: "70%" , paddingLeft: "0.9rem", paddingTop: "0.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Promo Code (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
              <div className="one">
                <div style={{ border: "1px solid silver",width: "70%" , paddingBottom: "0.5rem", marginTop: "0.5rem" , paddingTop: "0.5rem" , paddingLeft:"1.5rem" }}>Gift Wrap (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
              <div className="one">
                <div style={{ border: "1px solid silver", width: "70%" , paddingLeft: "1.6rem", paddingTop : "0.5rem" ,  paddingBottom: "0.5rem", marginTop: "0.5rem" }}>Shipping (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
              <div className="one">
                <div style={{ border: "1px solid silver", width : "70%" ,  alignItems:"center" , paddingTop: "0.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" , paddingLeft : "2rem"}}>Gift Card (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
              <div className="one">
                <div style={{ border: "1px solid silver", paddingLeft: "3rem",  width : "70%" , paddingTop: "0.5rem", paddingRight: "0.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>
                Total (Rs.)</div>
                <div style={{ border: "1px solid silver", paddingLeft: "1.5rem", paddingTop: "0.5rem", paddingRight: "1.5rem", paddingBottom: "0.5rem", marginTop: "0.5rem" }}>1</div>
              </div>
            </div>
          </div>
          <div className="ckeckBtn">
            <div>1</div>
            <div>2</div>
            <div><button onClick={() => handleBtnCheck()} style={{marginRight : "1rem" , border : "1px solid silver" , padding : "0.4rem 1.5rem 0.4rem 1.5rem", backgroundColor : "orange"}}>Check</button></div>
          </div>
        </main>
        <footer className="footer">footer</footer>
      </div>
    </div>
    // </Router>
  );
}


export default OrderCard