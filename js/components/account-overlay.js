/* =============================================================
   account-overlay.js — Account Overlay Logic
   ============================================================= */
$(() => {
  const $slot = $("#site-header");
  if (!$slot.length) return;

  // Dynamic path resolution
  const pathParts = window.location.pathname.split('/');
  const htmlIndex = pathParts.lastIndexOf('html');
  
  let depthFromHtml = 0;
  if (htmlIndex !== -1) {
    depthFromHtml = pathParts.length - htmlIndex - 2; 
  } else {
    // Fallback if 'html' folder isn't in URL, use data-base or default
    const fallbackBase = ($slot.data("base") || "./").replace(/\/?$/, "/");
    depthFromHtml = fallbackBase.split('../').length - 1;
    if (fallbackBase === "./") depthFromHtml = 0;
  }

  let htmlBase = depthFromHtml <= 0 ? "./" : "../".repeat(depthFromHtml);
  const rHtml = (h) => htmlBase + h.replace(/^\.?\//, "");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username   = localStorage.getItem("username") || "";
  const email      = localStorage.getItem("email") || (username ? username + "@gmail.com" : "");
  
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Chào buổi sáng";
    if (h < 18) return "Chào buổi chiều";
    return "Chào buổi tối";
  })();

  const buildOverlayLoggedIn = () => `
    <div class="ao-email">${email}</div>
    <button class="ao-close" id="ao-close" aria-label="Đóng">&#x2715;</button>
    <div class="ao-body">
      <h2 class="ao-greeting">${greeting}, ${username}.</h2>
      <p class="ao-sub-note">Email bạn đã đăng nhập không được liên kết với tài khoản News và có quyền truy cập hạn chế vào các bài viết.</p>
      <a href="#" class="ao-subscribe-btn">Đăng ký để có nhiều quyền truy cập hơn</a>
      <p class="ao-already">Đã đăng ký? <a href="#" class="ao-try-email">Thử một email khác</a></p>
      <div class="ao-divider"></div>
      <a href="#" class="ao-menu-item">Cài đặt tài khoản <span class="ao-arrow">&#8250;</span></a>
      <div class="ao-divider"></div>
      <p class="ao-section-label">NỘI DUNG CỦA BẠN</p>
      <a href="#" class="ao-menu-item">Bài viết đã lưu <span class="ao-arrow">&#8250;</span></a>
      <div class="ao-divider"></div>
      <a href="#" class="ao-menu-item">Bản tin <span class="ao-arrow">&#8250;</span></a>
      <div class="ao-divider"></div>
      <p class="ao-section-label">TRỢ GIÚP</p>
      <a href="#" class="ao-menu-item">Trung tâm trợ giúp <span class="ao-arrow">&#8250;</span></a>
      <div class="ao-divider"></div>
      <a href="#" class="ao-logout" id="ao-logout">Đăng xuất</a>
    </div>
  `;

  const buildOverlayGuest = () => `
    <div class="ao-email">Chưa đăng nhập</div>
    <button class="ao-close" id="ao-close" aria-label="Đóng">&#x2715;</button>
    <div class="ao-body">
      <h2 class="ao-greeting">Chào mừng bạn.</h2>
      <p class="ao-sub-note">Đăng nhập để truy cập tài khoản và các bài viết đã lưu.</p>
      <a href="${rHtml("dang-nhap.html")}" class="ao-subscribe-btn">Đăng nhập</a>
      <a href="${rHtml("dang-ky.html")}" class="ao-already">Chưa có tài khoản? <span class="ao-try-email">Đăng ký ngay</span></a>
    </div>
  `;

  // Append overlay to body if not exists
  if (!$("#account-overlay").length) {
    $("body").append(`
      <div class="ao-backdrop" id="ao-backdrop"></div>
      <aside class="account-overlay" id="account-overlay" aria-hidden="true">
        ${isLoggedIn ? buildOverlayLoggedIn() : buildOverlayGuest()}
      </aside>
    `);
  }

  const $overlay  = $("#account-overlay");
  const $backdrop = $("#ao-backdrop");
  
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  const scrollBarWidth = getScrollbarWidth();

  const openOverlay = () => {
    $overlay.addClass("is-open").attr("aria-hidden", "false");
    $backdrop.addClass("is-visible");
    $("body").addClass("ao-no-scroll").css('padding-right', scrollBarWidth + 'px');
    $('.navbar').css('padding-right', scrollBarWidth + 'px');
  };
  const closeOverlay = () => {
    $overlay.removeClass("is-open").attr("aria-hidden", "true");
    $backdrop.removeClass("is-visible");
    $("body").removeClass("ao-no-scroll").css('padding-right', '0');
    $('.navbar').css('padding-right', '0');
  };

  $(document).on("click", "#account-btn",   openOverlay);
  $(document).on("click", "#ao-close",      closeOverlay);
  $(document).on("click", "#ao-backdrop",   closeOverlay);
  $(document).on("keydown", e => { if (e.key === "Escape") closeOverlay(); });
  
  $(document).on("click", "#ao-logout", e => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    closeOverlay();
    window.location.reload();
  });
});
