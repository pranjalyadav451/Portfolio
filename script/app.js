const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-anim", { y: "-100%", duration: 1 }, "-=1");

tl.fromTo(".greeting-wrapper", { opacity: 0, y: "-50%" }, { opacity: 1, y: "0%", duration: 1.5, ease: "elastic.out" }, delay = 3.5)



let element = document.querySelectorAll('.my-name');

for (let elements of element)
  elements.addEventListener('mouseover', onMouseOver);

function onMouseOver(event) {
  let trg = event.target;
  const time = .25;
  let tl = new gsap.timeline();
  tl.to(trg, { yPercent: -20, ease: "power1.out", duration: time })
    .to(trg, { yPercent: 0, ease: "power1.out", duration: time }, delay = time);
}