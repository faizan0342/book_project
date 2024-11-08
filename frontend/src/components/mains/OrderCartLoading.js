import 'primeicons/primeicons.css';
function OrderCartLoading(){
    return(
        <div className="OrderCartLoading">
            <div style={{color: "#f7941d" ,fontWeight: 600}}>
                Order Card
            </div>
            <div>
            <i className="pi pi-chevron-right size"></i> Delivery Address
            </div>
            <div>
            <i className="pi pi-chevron-right size"></i>   Payment Options
            </div>
            <div>
            <i className="pi pi-chevron-right size"></i> Order Summary
            </div>
            <div>
            <i className="pi pi-chevron-right size"></i>  Order Confirmation
            </div>
        </div>
    )
}


export default OrderCartLoading