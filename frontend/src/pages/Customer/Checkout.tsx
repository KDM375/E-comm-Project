import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Product } from '../../types/types';

const Checkout: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product as Product;
  const [paymentMethod, setPaymentMethod] = useState<'onsite' | 'mobile'>('onsite');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed successfully!\nPayment method: ${paymentMethod}\nDelivery: ${deliveryAddress}`);
  };

  if (!product) {
    return <div className="checkout-container"><p>⚠️ No product selected for checkout.</p></div>;
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="product-summary">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="payment">Payment Method:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="payment"
                value="onsite"
                checked={paymentMethod === 'onsite'}
                onChange={() => setPaymentMethod('onsite')}
              />
              On-site Payment
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="mobile"
                checked={paymentMethod === 'mobile'}
                onChange={() => setPaymentMethod('mobile')}
              />
              Mobile Money
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Delivery Address:</label>
          <textarea
            id="address"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
            className="address-box"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
