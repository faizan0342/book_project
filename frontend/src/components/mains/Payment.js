import React, { useState } from 'react';

function Payment(props) {
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
        console.log(event.target.value); // Log the selected payment method to the console
    };

    const paymentHandler = () => {
        props.history.push(`/shippingdetail`)
    }
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
    };

    const optionStyle = {
        margin: '10px 0',
        fontSize: '18px',
    };

    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    return (
        <div style={containerStyle}>
            <h2>Payment</h2>
            <div>
                <div style={optionStyle}>
                    <input
                        type="radio"
                        id="paypal"
                        name="payment"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="paypal"> Paypal</label>
                </div>
                <div style={optionStyle}>
                    <input
                        type="radio"
                        id="creditCard"
                        name="payment"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="creditCard"> Credit Card</label>
                </div>
                {/* Add more payment options here as needed */}
            </div>
            <button onClick={() => paymentHandler()}
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                Proceed to Checkout
            </button>
        </div>
    );
}

export default Payment;
