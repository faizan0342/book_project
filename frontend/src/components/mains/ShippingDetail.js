
import PaypalProvider from "./PaypalProvider"

function ShippingDetail() {
    return (
        <div className="shipping-cont">

            <div className="shipping-cont-first">
                <div style={{border : "1px solid black"  ,padding : "0.5rem"}}>
                    <div>Shipping :</div>
                    <br />
                    <div>Name : Check</div>
                    <div>Address : Check</div>
                </div>
                <br/>
                <div style={{border : "1px solid black" ,padding : "0.5rem"}}>
                    <div>Payment :</div>
                    <br />
                    <div>Method: Paypal</div>
                   
                </div>
                <br/>
                <div style={{border : "1px solid black" ,padding : "0.5rem"}}>
                    <div>Order Name : </div>
                    <br />
                    <div>Name : Check </div>
                    <div>Address : Check</div>
                </div>
            </div>
            <div className="shipping-cont-second">
                <div>
                <div>Order Summary</div>
                <div style = {{margin : "1rem"}}></div>
                <div>Name : Check </div>
                <div style = {{margin : "0.8rem"}}></div>
                <div>Shipping : Check</div>
                <div style = {{margin : "0.8rem"}}></div>
                <div>Tax : 25$</div>
                <div style = {{margin : "0.8rem"}}></div>
                <div>Order Total :  50$</div>
                </div>  
                <div style={{marginTop : '0.5rem'}}>
                   <PaypalProvider/>
                </div>
            </div>
        </div>
    )

}
export default ShippingDetail