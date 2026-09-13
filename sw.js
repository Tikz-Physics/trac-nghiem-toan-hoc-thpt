// Service Worker: Trắc Nghiệm Toán Học THPT (Offline-First PWA)
const CACHE_NAME = 'toan-thpt-cache-v1';

// 1. Core Shell URLs to cache immediately on install
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./dau-truong-toan-hoc.html",
  "./arena_questions_data.js",
  "./lesson_titles.json",
  "./manifest.webmanifest",
  "./icon.svg",
  "./lop10/",
  "./lop10/index.html",
  "./lop11/",
  "./lop11/index.html",
  "./lop12/",
  "./lop12/index.html"
];

// 2. All 78 lesson standalone pages to cache in the background
const ALL_LESSON_ASSETS = [
  "./lop10/Bai_01_Menh_De.html",
  "./lop10/Bai_02_Tap_Hop_Va_Phep_Toan.html",
  "./lop10/Bai_03_Bat_Phuong_Trinh_Bac_Nhat_Hai_An.html",
  "./lop10/Bai_04_He_Bat_Phuong_Trinh_Bac_Nhat_Hai_An.html",
  "./lop10/Bai_05_Gia_Tri_Luong_Giac_0_Den_180.html",
  "./lop10/Bai_06_He_Thuc_Luong_Trong_Tam_Giac.html",
  "./lop10/Bai_07_Cac_Khai_Niem_Mo_Dau_Vecto.html",
  "./lop10/Bai_08_Tong_Va_Hieu_Hai_Vecto.html",
  "./lop10/Bai_09_Tich_Vecto_Voi_Mot_So.html",
  "./lop10/Bai_10_Vecto_Trong_Mat_Phang_Toa_Do.html",
  "./lop10/Bai_11_Tich_Vo_Huong_Hai_Vecto.html",
  "./lop10/Bai_12_So_Gan_Dung_Va_Sai_So.html",
  "./lop10/Bai_13_Cac_So_Dac_Trung_Do_Xu_The_Trung_Tam.html",
  "./lop10/Bai_14_Cac_So_Dac_Trung_Do_Do_Phan_Tan.html",
  "./lop10/Bai_15_Ham_So_Va_Do_Thi.html",
  "./lop10/Bai_16_Ham_So_Bac_Hai.html",
  "./lop10/Bai_17_Dau_Tam_Thuc_Bac_Hai.html",
  "./lop10/Bai_18_Phuong_Trinh_Quy_Ve_Bac_Hai.html",
  "./lop10/Bai_19_Phuong_Trinh_Duong_Thang.html",
  "./lop10/Bai_20_Vi_Tri_Tuong_Doi_Goc_Khoang_Cach.html",
  "./lop10/Bai_21_Duong_Tron_Trong_Mat_Phang_Toa_Do.html",
  "./lop10/Bai_22_Ba_Duong_Conic.html",
  "./lop10/Bai_23_Quy_Tac_Dem.html",
  "./lop10/Bai_24_Hoan_Vi_Chinh_Hop_To_Hop.html",
  "./lop10/Bai_25_Nhi_Thuc_Newton.html",
  "./lop10/Bai_26_Bien_Co_Va_Dinh_Nghia_Co_Dien.html",
  "./lop10/Bai_27_Thuc_Hanh_Tinh_Xac_Suat.html",
  "./lop11/Bai_01_Gia_Tri_Luong_Giac.html",
  "./lop11/Bai_02_Cong_Thuc_Luong_Giac.html",
  "./lop11/Bai_03_Ham_So_Luong_Giac.html",
  "./lop11/Bai_04_Phuong_Trinh_Luong_Giac_Co_Ban.html",
  "./lop11/Bai_05_Day_So.html",
  "./lop11/Bai_06_Cap_So_Cong.html",
  "./lop11/Bai_07_Cap_So_Nhan.html",
  "./lop11/Bai_08_Mau_So_Lieu_Ghep_Nhom.html",
  "./lop11/Bai_09_Cac_So_Dac_Trung_Do_Xu_The_Trung_Tam.html",
  "./lop11/Bai_10_Duong_Thang_Va_Mat_Phang.html",
  "./lop11/Bai_11_Hai_Duong_Thang_Song_Song.html",
  "./lop11/Bai_12_Duong_Thang_Va_Mat_Phang_Song_Song.html",
  "./lop11/Bai_13_Hai_Mat_Phang_Song_Song.html",
  "./lop11/Bai_14_Phep_Chieu_Song_Song.html",
  "./lop11/Bai_15_Gioi_Han_Day_So.html",
  "./lop11/Bai_16_Gioi_Han_Ham_So.html",
  "./lop11/Bai_17_Ham_So_Lien_Tuc.html",
  "./lop11/Bai_18_Luy_Thua_Voi_So_Mu_Thuc.html",
  "./lop11/Bai_19_Logarit.html",
  "./lop11/Bai_20_Ham_So_Mu_Va_Ham_So_Logarit.html",
  "./lop11/Bai_21_Phuong_Trinh_BPT_Mu_Va_Logarit.html",
  "./lop11/Bai_22_Hai_Duong_Thang_Vuong_Goc.html",
  "./lop11/Bai_23_Duong_Thang_Vuong_Goc_Voi_Mat_Phang.html",
  "./lop11/Bai_24_Phep_Chieu_Vuong_Goc_Goc_Duong_Mat.html",
  "./lop11/Bai_25_Hai_Mat_Phang_Vuong_Goc.html",
  "./lop11/Bai_26_Khoang_Cach_Trong_Khong_Gian.html",
  "./lop11/Bai_27_The_Tich.html",
  "./lop11/Bai_28_Bien_Co_Hop_Giao_Doc_Lap.html",
  "./lop11/Bai_29_Cong_Thuc_Cong_Xac_Suat.html",
  "./lop11/Bai_30_Cong_Thuc_Nhan_Xac_Suat.html",
  "./lop11/Bai_31_Dinh_Nghia_Va_Y_Nghia_Dao_Ham.html",
  "./lop11/Bai_32_Cac_Quy_Tac_Tinh_Dao_Ham.html",
  "./lop12/Bai_01_Tinh_Don_Dieu_Va_Cuc_Tri.html",
  "./lop12/Bai_02_Gia_Tri_Lon_Nhat_Nho_Nhat.html",
  "./lop12/Bai_03_Duong_Tiem_Can_Do_Thi.html",
  "./lop12/Bai_04_Khao_Sat_Ve_Do_Thi_Ham_So.html",
  "./lop12/Bai_05_Ung_Dung_Dao_Ham_Thuc_Tien.html",
  "./lop12/Bai_06_Vecto_Trong_Khong_Gian.html",
  "./lop12/Bai_07_He_Truc_Toa_Do_Khong_Gian.html",
  "./lop12/Bai_08_Bieu_Thuc_Toa_Do_Phep_Toan_Vecto.html",
  "./lop12/Bai_09_Khoang_Bien_Thien_Tu_Phan_Vi.html",
  "./lop12/Bai_10_Phuong_Sai_Do_Lech_Chuan.html",
  "./lop12/Bai_11_Nguyen_Ham.html",
  "./lop12/Bai_12_Tich_Phan.html",
  "./lop12/Bai_13_Ung_Dung_Hinh_Hoc_Tich_Phan.html",
  "./lop12/Bai_14_Phuong_Trinh_Mat_Phang.html",
  "./lop12/Bai_15_Phuong_Trinh_Duong_Thang.html",
  "./lop12/Bai_16_Cong_Thuc_Tinh_Goc_Khong_Gian.html",
  "./lop12/Bai_17_Phuong_Trinh_Mat_Cau.html",
  "./lop12/Bai_18_Xac_Suat_Co_Dieu_Kien.html",
  "./lop12/Bai_19_Xac_Suat_Toan_Phan_Bayes.html"
];

// Combine all assets
const PRECACHE_ASSETS = [...CORE_ASSETS, ...ALL_LESSON_ASSETS];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS).then(() => {
        return Promise.allSettled(
          ALL_LESSON_ASSETS.map(url => cache.add(url).catch(() => {}))
        );
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return resp;
        }))
      );
    }
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
      if (cachedResponse) {
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(c => c.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
