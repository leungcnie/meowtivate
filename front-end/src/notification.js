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

function determineAppServerKey() {
  const publicVapidKey =
    "BJkvTGYZjYldy8CuwjmjweAWqHZYxVWw0tS00tZ7RKe_5PZK9URSWZm9ZituL5yNLxWT-SGd0hq0ceJru44_3bg";
  return urlBase64ToUint8Array(publicVapidKey);
}
