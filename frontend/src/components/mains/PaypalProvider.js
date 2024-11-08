// import React from 'react';
// import PayPalCheckout from './PayPalCheckout';

// const App = () => {
//   return (
//     <div>
//       <h6 style={{marginTop : "1rem"}}>PayPal Integration Example</h6>
//       <PayPalCheckout />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import PayPalButton from './PayPalCheckout';

const PaypalProvider = () => {
    return (
        <div>
            <h6 style={{marginTop : "0.5rem"}}>PayPal Integration Example</h6>
            <PayPalButton />
        </div>
    );
};

export default PaypalProvider;