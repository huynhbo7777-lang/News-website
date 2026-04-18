# 📰 BÁO CHÍ DESIGN - News Website Project

> 🚀 Một dự án website tin tức hiện đại với giao diện đột phá, tập trung vào trải nghiệm người dùng thông qua hiệu ứng mượt mà và bố cục linh hoạt.

---

## ✨ Tính năng nổi bật

### 🎨 Modern UI/UX

* Typography lớn, rõ ràng
* Khoảng trắng cân đối
* Màu sắc tương phản mạnh

### ↔️ Horizontal Scrolling

* Trải nghiệm đọc tin tức theo **chiều ngang**
* Áp dụng tại:

  * Trang chủ
  * Các chuyên mục

### 🎬 Hiệu ứng GSAP

* Sử dụng **ScrollTrigger + GSAP**
* Hiệu ứng:

  * Parallax
  * Scroll animation mượt

### 🔐 Hệ thống Authentication

* Đăng ký / Đăng nhập
* Validation đầy đủ
* Hiệu ứng chuyển cảnh đẹp

### 🖱️ Custom Cursor

* Con trỏ chuột riêng `#news-cursor`
* Tăng tính tương tác & thẩm mỹ

### 📱 Responsive

* Tương thích:

  * 📱 Mobile
  * 💻 Desktop
* Sử dụng Bootstrap 5 Grid System

---

## 📁 Cấu trúc thư mục

```
.
├── html/
│   ├── Home.html
│   ├── the-thao-suc-khoe.html
│   ├── dang-nhap.html
│   ├── dang-ky.html
│   ├── the-thao-football-detail.html
│   ├── the-thao-f1-detail.html
│   ├── the-thao-nba-detail.html
│   ├── suc-khoe-mental-detail.html
│   ├── suc-khoe-nutrition-detail.html
│   └── suc-khoe-yoga-detail.html
│
├── css/
│   ├── root.css
│   ├── index.css
│   ├── local-fonts.css
│   ├── horizontal-feed.css
│   ├── section2.css
│   ├── section3.css
│   ├── section4.css
│   ├── article-detail.css
│   ├── login.css
│   └── bootstrap.min.css
│
├── js/
│   ├── auth.js
│   ├── login.js
│   ├── dang-ky.js
│   ├── heroSection.js
│   ├── sectionTwo.js
│   ├── sectionThree.js
│   ├── cursor.js
│   └── gsap/
│       ├── gsap.min.js
│       └── ScrollTrigger.min.js
│
├── fonts/
├── images/
└── README.md
```

---

## 🛠️ Công nghệ sử dụng

* 🌐 HTML5, CSS3
* 🎨 Bootstrap 5
* 🎬 GSAP + ScrollTrigger
* ⚡ JavaScript (ES6+)
* 🧩 jQuery 3.7.1
* 🔤 Local Fonts

---

## 🚀 Hướng dẫn sử dụng

### 1. Clone dự án

```bash
git clone https://github.com/your-username/news-website.git
```

### 2. Chạy project

* Mở bằng **Live Server (VS Code)**
* Hoặc mở trực tiếp:

```
html/Home.html
```

### 3. Trải nghiệm

* 👉 Kéo ngang ở các section
* 👉 Click bài viết để xem chi tiết

---

## 👥 Thành viên thực hiện

👨‍💻 **Nhóm 8**

* Phan Hồ Sơn Nghĩa (Nhóm trưởng)
* Dương Công Khoa
* Đào Tấn Tuyên
* Phạm Nguyễn Phúc Khang
* Huỳnh Vĩnh Lợi
* Huỳnh Bảo Duy
* Đào Văn Hào

---

## ⚙️ Lưu ý kỹ thuật

* Sử dụng:

```js
scrollRestoration = "manual"
```

* Override:

```css
scroll-behavior: auto;
```

👉 Mục đích:

* Tránh conflict với GSAP ScrollTrigger
* Đảm bảo vị trí scroll luôn chính xác

---

## 💡 Gợi ý nâng cấp thêm (nếu muốn ăn điểm cao 🔥)

* 🌙 Dark mode toggle
* 🔎 Search bài viết
* ❤️ Like / Bookmark
* 📰 Fake API (JSON Server)
* 🎞️ Loading animation (skeleton UI)

---

> ✨ “Good UI is invisible. Great UI feels magical.”
