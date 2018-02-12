// v1.3
self.addEventListener('install', e => {
 
});


self.addEventListener('activate',  event => {
  console.log("aaa");
  
  self.registration.showNotification("title", {
    body: "test"
  });
  //var alarm = new sound('assets/media/alarm.mp3');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
