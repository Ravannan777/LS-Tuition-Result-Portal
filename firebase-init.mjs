// ==============================================================================
// SHARED FIREBASE INITIALIZATION (modular SDK) — imported by
// result.html / notice.html / timetable.html so the config lives in one place.
// ==============================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_hjdAHD11DPLXGC-wC1sltAAlunrG1XE",
  authDomain: "ls-tuition.firebaseapp.com",
  projectId: "ls-tuition",
  storageBucket: "ls-tuition.firebasestorage.app",
  messagingSenderId: "436382812973",
  appId: "1:436382812973:web:1539769f23e03f22cca1a4",
  measurementId: "G-NVXR2KJ5F8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
