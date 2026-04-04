// 서비스워커 비활성화 - 캐시 없이 항상 네트워크에서 직접 로드
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k))))
    .then(() => self.clients.claim())
  );
});
// fetch 이벤트 핸들러 없음 = 캐시 사용 안 함, 항상 네트워크
