const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro-anim", { y: "-100%", duration: 1 }, "-=1");

tl.fromTo(".greeting-wrapper",{opacity:0,y:"-50%"},{opacity:1,y:"0%",duration:1,ease:"bounce.out"},delay=3.5)