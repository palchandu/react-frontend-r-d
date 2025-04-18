import React from "react";
import axios from "axios";
const RazorpayButton = ({ orderId, amount }) => {
  const API_URL = "http://127.0.0.1:3050";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2UxM2IxZDBmODQyN2U5NzZlMzE4ODYiLCJ1c2VybmFtZSI6IkNoYW5kcmEiLCJpYXQiOjE3NDM0OTQ2NjAsImV4cCI6MTc0MzU4MTA2MH0.oIq11Dd9d1cR2LigUEaVW2yYpWFPAg_RI1UXHVR9FjM";
  const initiateOrder = async () => {
    const apiRes = await axios.post(
      API_URL + "/api/order/create",
      {
        outletId: "67cd2778256348190497b2b1",
        initialOrderId: orderId,
        deliveryAddress: {
          street: "Gurugram",
          city: "Gurugram",
          state: "Haryana",
          postalCode: "12345",
          country: "India",
          coordinates: { lat: 27.987, lng: 87.123 },
        },
        couponCode: "PIND5",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    //const apiInfo = await apiRes.json();
    if (apiRes.status === 200) {
      const dataRes = apiRes.data;
      if (dataRes.data.status) {
        loadRazorpay();
      }
    }
    console.log(apiRes);
  };

  const verifyPayment = async (payload) => {
    const verifyRes = await axios.post(
      API_URL + "/api/razorpay/verify-payment",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    //const apiInfo = await apiRes.json();
    console.log("verifyRes", verifyRes);
    if (verifyRes.status === 200) {
      const dataRes = verifyRes.data;
      return dataRes.data;
    }
  };

  const failedPayment = async (payload) => {
    const verifyRes = await axios.post(
      API_URL + "/api/razorpay/handle-failed-payment",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    //const apiInfo = await apiRes.json();
    console.log("verifyRes", verifyRes);
    if (verifyRes.status === 200) {
      const dataRes = verifyRes.data;
      return dataRes.data;
    }
  };

  const loadRazorpay = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = async () => {
      const options = {
        key: "rzp_test_EqBljSj4PjUi93", // Replace with your Razorpay Test Key
        amount: amount, // Amount in paise (50000 paise = ₹500)
        currency: "INR",
        name: "Razor pay test",
        description: "Test Transaction",
        order_id: orderId,
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
          console.log("response", response);
          if (response.razorpay_payment_id != "") {
            const verifyPayload = {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            };
            verifyPayment(verifyPayload);
            alert(
              "Payment Successful! Payment ID: " + response.razorpay_payment_id
            );
          } else {
            alert("Payment Failed");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
        modal: {
          ondismiss: function () {
            alert("Payment was closed by the user.");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", async function (response) {
        console.log("Payment Failed", response);
        if (response.error.metadata.payment_id !== "") {
          const payload = {
            razorpayOrderId: response.error.metadata.order_id,
            razorpayPaymentId: response.error.metadata.payment_id,
            failureReason:
              response.error.reason + " : " + response.error.description,
          };
          console.log("ppp", payload);
          await failedPayment(payload);
        }
        alert(
          `Payment Failed: ${response.error.description}. Please try again.`
        );
      });
      paymentObject.open();
    };
  };

  return (
    <button
      onClick={initiateOrder}
      style={{
        padding: "10px 20px",
        backgroundColor: "#6200ea",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        borderRadius: "5px",
      }}
    >
      Pay ₹ {amount}
    </button>
  );
};

export default RazorpayButton;
