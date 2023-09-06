var staticCacheName = "pwa_dice";

const filesToCache = [
	'./index.html',
	'./css/main.css',
	'./dice.html',
	'./css/roller.css',
	'./images/lhama_closed.png',
	'./images/lhama_opened.png',
	'./images/bat.png',
	'./images/rabbit.png',
	'./images/tejo.png',
	'./images/mountain.jpg',
	'./images/mountainnight.jpg'
];
 
self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			// return cache.addAll(["/"]);
			console.log('ios');
			return cache.addAll(filesToCache);
		})
	);
});
 
self.addEventListener("fetch", function (event) {
	console.log(event.request.url);
 
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
