// seventh.js
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".seventh");
  if (!section) return;

  const io = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          section.classList.add("is-visible");
          // 한 번만 실행 원하면 unobserve 유지
          observer.unobserve(section);
        } else {
          // 반복적으로 원복하고 싶다면 주석 해제
          // section.classList.remove("is-visible");
        }
      }
    },
    { root: null, threshold: 0.5 }
  );

  io.observe(section);
});
