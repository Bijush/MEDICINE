document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const menuItems = document.querySelectorAll('.menu-item');

  // সাইডবার ওপেন করার ফাংশন
  function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // সাইডবার চলাকালীন পেজ স্ক্রল বন্ধ থাকবে
  }

  // সাইডবার ক্লোজ করার ফাংশন
  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = ''; // স্ক্রল নরমাল হবে
  }

  // ইভেন্ট লিসেনারস
  if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
  if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

  // মেনু আইটেম ক্লিক করলে এক্টিভ স্টেট চেঞ্জ এবং সাইডবার অটো বন্ধ হওয়া
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      menuItems.forEach(btn => btn.classList.remove('active'));
      e.currentTarget.classList.add('active');
      
      // মোবাইল ডিভাইসে আইটেম ক্লিক করার সাথে সাথে মেনু বন্ধ করার জন্য
      closeSidebar();
    });
  });
});
