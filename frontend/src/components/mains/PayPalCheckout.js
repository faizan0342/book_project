import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalCheckout = () => {
    return (
        <PayPalScriptProvider options={{ "client-id": "Adz5_c6ArRIF4E4QWivukA5QfUbHmqzjS96LoqErxHBmZ_N-ghsds7nebi3g16kP7bXqI4Owp681RgLy" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: '10.00', // Replace with the actual amount
                            },
                        }],
                    });
                }}
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order:', order);
                    // Handle successful payment here (e.g., update your database)
                }}
                onError={(err) => {
                    console.error('PayPal Checkout onError', err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalCheckout;
