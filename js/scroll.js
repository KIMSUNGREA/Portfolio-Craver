gsap.registerPlugin(ScrollTrigger);

gsap.to(".cont1_text", {
    scrollTrigger: {
        trigger: ".cont1_text",
        start: "top 30%",
        toggleClass: "fadeOut"
    }
})

gsap.to(".cont1_text", {
    scrollTrigger: {
        trigger: ".cont1_text",
        start: "top 30%",
        toggleClass: "fadeOut"
    }
})

gsap.to(".cont3 .inner_box, .inner_box .bs", {
    scrollTrigger: {
    trigger: ".cont3 .inner_box",
    start: "center 50%",
    end:"300% 100%",
    pin:true,
    pinSpacing: false,
//		  markers:true,
    anticipatePin:"0.3",
    scrub:0.1,
    },
});
const tl1 = gsap.timeline({
    scrollTrigger: {
    trigger: ".cont3 .inner_box",
    start: "top 70%",
    end:"+=300%",
//		  markers:true,
    scrub:1,
    ease: "power2.out",
    },

});
// tl1.set(".cont3_main_list", {className:"main__contents__list02 main__contents__list active"},"+=0.01")
tl1.to(".scr_text1",0.5, {opacity:"1",top:"50%",delay:"0.1"})
tl1.to(".scr_text1",0.5, {opacity:"0",top:"40%",delay:"0.2"})
tl1.to(".scr_text2",0.5, {opacity:"1",top:"50%"})

const footertx = document.querySelector(".footer")
gsap.from(footertx.children , {
    opacity: 0,
    y:-10,
    duration: 1,
    delay: 1,
    scrollTrigger: ".footer",
    stagger: {
        amount: 1
    }
})






