import "./App.css";
import RazorpayButton from "./components/RazorpayButton";
import { useEffect, useState } from "react";
//import axios from "axios";
import Landing from "./components/Landing";
import { requestPermissionAndGetToken, onMessageListener } from "./firbase";
import toast, { Toaster } from "react-hot-toast";
function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js";
  //   script.src =
  //     "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // const [orderId, setOrderId] = useState("");
  // const [startPay, setStartPay] = useState(false);
  // const [amount, setAmount] = useState(0);

  // const API_URL = "http://127.0.0.1:3050";
  // const TOKEN =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2UxM2IxZDBmODQyN2U5NzZlMzE4ODYiLCJ1c2VybmFtZSI6IkNoYW5kcmEiLCJpYXQiOjE3NDM0OTQ2NjAsImV4cCI6MTc0MzU4MTA2MH0.oIq11Dd9d1cR2LigUEaVW2yYpWFPAg_RI1UXHVR9FjM";
  // const getOrderId = async () => {
  //   const apiRes = await axios.post(
  //     API_URL + "/api/razorpay/generate-order-id",
  //     {
  //       outlet: "67cd2778256348190497b2b1",
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${TOKEN}`,
  //       },
  //     }
  //   );
  //   //const apiInfo = await apiRes.json();
  //   if (apiRes.status === 201) {
  //     const dataRes = apiRes.data;
  //     if (dataRes.data != null) {
  //       console.log(dataRes.data.orderId);
  //       setOrderId(dataRes.data.orderId);
  //       setAmount(dataRes.data.amount);
  //     }
  //   }
  //   console.log(apiRes);
  // };
  // useEffect(() => {
  //   getOrderId();
  // }, []);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const notify = () => toast(<ToastDisplay />);
  function ToastDisplay() {
    return (
      <div>
        <p>
          <b>{notification?.title}</b>
        </p>
        <p>{notification?.body}</p>
      </div>
    );
  }
  useEffect(() => {
    if (notification.title) {
      notify();
    }
  }, [notification]);
  requestPermissionAndGetToken();
  onMessageListener()
    .then((payload) => {
      console.log("pppp", payload);
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   {startPay ? (
    //     <>
    //       <h2>React Razorpay Integration</h2>
    //       <RazorpayButton orderId={orderId} amount={amount} />
    //       <button onClick={() => setStartPay(false)}>Cancel</button>
    //     </>
    //   ) : (
    //     <div>
    //       <button
    //         style={{
    //           background: "#2ecc71",
    //           color: "#fff",
    //         }}
    //         onClick={() => setStartPay(true)}
    //       >
    //         Proceed for payment
    //       </button>
    //     </div>
    //   )}
    // </div>
    <>
      <Toaster />
      <Landing />
    </>
  );
}

export default App;
