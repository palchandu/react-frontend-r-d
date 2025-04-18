import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCW8w9TWswQCZF9PeKOtqHQyxfJJIpuqGo",
  authDomain: "rstorefront-376ac.firebaseapp.com",
  projectId: "rstorefront-376ac",
  storageBucket: "rstorefront-376ac.firebasestorage.app",
  messagingSenderId: "235694266254",
  appId: "1:235694266254:web:dbbd369e20aadec6ce76df",
  measurementId: "G-V3BV846LFK",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export const requestPermissionAndGetToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BJzQPXjWufXbenty6bXaLWMS1d76T--pKkOoN5b6GZqRi5skBu2pfHUwhy09GOqx-0zHc671RPgMfmuCTRObhfQ",
    });
    if (token) {
      console.log("token", token);
    } else {
      console.log("Failed to get registration token.");
    }
  } else {
    console.log("Notification permission denied.");
  }
};

export const onMessageListener = () => {
  console.log("gggghghg");
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Payload", payload);
      resolve(payload);
    });
  });
};
