
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const UPI_ADDRESS = "your-upi@bank"; // You can provide your real UPI later

const UpiPaymentSection = ({
  onPaymentSuccess,
}: {
  onPaymentSuccess: () => void;
}) => {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className="space-y-4 border rounded-lg p-4 bg-secondary/50">
      <h3 className="text-lg font-semibold mb-2">Pay via UPI</h3>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-medium">UPI ID:</span>{" "}
          <span className="select-all font-mono">{UPI_ADDRESS}</span>
        </div>
        <div>
          <span className="font-medium">Accepted Apps:</span>{" "}
          <span className="inline-flex gap-2 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Google_Pay_Logo.svg" alt="Google Pay" className="w-6 h-6 inline" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/PhonePe-Logo.png" alt="PhonePe" className="w-6 h-6 inline bg-white rounded" />
            <span className="bg-[#1c5cba] text-white px-1 rounded text-xs">Other UPI</span>
          </span>
        </div>
        <div className="bg-muted p-2 rounded text-xs">
          Send payment to this UPI ID through your app. Enter your Transaction ID after payment to confirm your order.
        </div>
        {!paymentCompleted ? (
          <form
            className="flex flex-col gap-2"
            onSubmit={e => {
              e.preventDefault();
              setPaymentCompleted(true);
              onPaymentSuccess();
            }}
          >
            <input
              type="text"
              placeholder="Enter UPI Transaction ID"
              required
              className="input border rounded p-2"
            />
            <button
              className="btn bg-brand-teal text-white font-bold py-2 rounded hover:bg-brand-teal/80 transition"
              type="submit"
            >
              Confirm Payment
            </button>
          </form>
        ) : (
          <div className="flex items-center gap-2 text-success font-medium">
            <CheckCircle className="w-5 h-5" />
            Payment successful! Order confirmed.
          </div>
        )}
      </div>
    </div>
  );
};

export default UpiPaymentSection;
