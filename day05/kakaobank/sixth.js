// 대상: .sixth > img
const target = document.querySelector(".sixth > img");

if (target) {
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // 50% 이상 보일 때 한 번만 실행
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // 재관찰 원하면 이 줄 제거
        }
      });
    },
    {
      root: null, // 뷰포트 기준
      threshold: 0.5, // 50% 이상 노출 시 콜백
    }
  );

  io.observe(target);
}
