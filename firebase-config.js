// Firebase v8 compat build (works with normal <script src="firebase-config.js"></script>)

(function () {
  // Load Firebase libraries if they are not already loaded
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function initFirebase() {
    if (!window.firebase) {
      await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
      await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js");
    }

    const firebaseConfig = {
      apiKey: "AIzaSyDfGFz0AsArdWCVYnMFEwggAK-PQBjuor0",
      authDomain: "cbttest-d46ea.firebaseapp.com",
      projectId: "cbttest-d46ea",
      storageBucket: "cbttest-d46ea.firebasestorage.app",
      messagingSenderId: "881028247098",
      appId: "1:881028247098:web:06e5dd2c3f884eb7c80f03",
      measurementId: "G-BXJST6GRDT"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // This is what your app.js expects
    window.db = firebase.firestore();

    console.log("Firebase initialized successfully.");
  }

  initFirebase().catch(err => {
    console.error("Firebase initialization failed:", err);
  });
})();
