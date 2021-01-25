export default function notificationDev() {
  const publicVapidKey =
    "BJkvTGYZjYldy8CuwjmjweAWqHZYxVWw0tS00tZ7RKe_5PZK9URSWZm9ZituL5yNLxWT-SGd0hq0ceJru44_3bg";

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  // Register Service Worker

  navigator.serviceWorker
    .register("/worker.js", {
      scope: "/",
    })
    .then((res) => {
      // console.log("here in notification");
      return res.pushManager.getSubscription().then(function (subscription) {
        return res.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
        });
      });
    });

  //   await fetch("/subscribe", {
  //     method: "POST",
  //     body: JSON.stringify(subscription),
  //     headers: {
  //       "content-type": "application/json"
  //     }
  //   });
  //   console.log("Push Sent...");
}
