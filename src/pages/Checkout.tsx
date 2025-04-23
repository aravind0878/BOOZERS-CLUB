
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import UpiPaymentSection from "@/components/UPIPaymentSection";
import CustomerInfoForm, { CustomerInfo } from "@/components/CustomerInfoForm";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // New: Store customer info locally after submission
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {orderConfirmed ? (
        <div className="bg-success/10 border border-success rounded p-8 flex flex-col items-center">
          <p className="text-lg font-semibold text-success">Order Confirmed!</p>
          <p className="mb-4">Thank you for your purchase, your payment has been received.</p>
          <button className="btn mt-2 bg-brand-teal text-white px-4 py-2 rounded" onClick={clearCart}>
            Finish
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-2">Order Summary</h2>
            <ul className="divide-y">
              {items.map((item, i) => (
                <li key={i} className="py-2 flex justify-between">
                  <div>
                    <span className="font-medium">{item.product.name}</span> × {item.quantity}
                  </div>
                  <span>₹{(item.product.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* ---- Step 1: Customer Info ---- */}
          {!customerInfo ? (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Your Details</h3>
              <CustomerInfoForm onSubmit={setCustomerInfo} />
            </div>
          ) : (
            <>
              <div className="mb-4 bg-secondary/30 rounded p-4">
                <h4 className="font-semibold mb-1">Shipping Address</h4>
                <div className="text-sm">
                  <span className="font-medium">{customerInfo.firstName} {customerInfo.lastName}</span>
                  <br />
                  {customerInfo.address}, {customerInfo.city} – {customerInfo.pincode}
                  <br />
                  <span className="text-muted-foreground">Phone: {customerInfo.phone}</span>
                </div>
              </div>
              {/* ---- Step 2: Payment ---- */}
              <UpiPaymentSection
                onPaymentSuccess={() => setOrderConfirmed(true)}
                amount={totalPrice}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
