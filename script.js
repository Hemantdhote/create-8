
gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();



const tl = gsap.timeline();

tl.from(".text .part1 .span1", {
    y: "-130%",
    duration: 0.7
})
tl.from(".text .part1 .span2", {
    x: "-100%",
    duration: 0.5
})
tl.from(".text .part1 .span3", {
    y: "100%",
    duration: 0.2
})

tl.to(".row:nth-child(1) img", {
    width: "100%",
    height: "100%",
    duration: 3,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(1)",
        scrub: 2,
        pin: true,
        start: "top 0",
        end: "top -200%",
    }
})

tl.from(".row:nth-child(1) .col", {
    scale: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(1)",
        scrub: 5,
        start: "top 100%",
        end: "top 0%"
    }
})
tl.from(".row:nth-child(2) .col", {
    scale: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(2)",
        scrub: 5,
        start: "top 100%",
        end: "top 0%"
    }
})
tl.from(".row:nth-child(3) .col", {
    scale: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(3)",
        scrub: 5,
        start: "top 100%",
        end: "top 0%"
    }
})
tl.to(".row:nth-child(2) img", {
    width: "100%",
    height: "100%",
    duration: 3,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(2)",
        scrub: 2,
        pin: true,
        start: "top 0",
        end: "top -100%",
    }
})



tl.to(".row:nth-child(3) img", {
    duration: 3,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page4 .row:nth-child(3)",
        scrub: 2,
        pin: true,
        start: "top 0",
        end: "top 0",
    }
})







tl.from(".page5 .page5head .left h1",{
    x:-800,
    duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:".page5 .page5head",
        scrub:2,
        start:"top 90%",
        end:"top 75%"
    }
    
    
})







tl.from(".brands .row1 img:nth-child(1)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 100%",
        end: "top 40%"
    }
})


tl.from(".brands .row1 img:nth-child(2)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 95%",
        end: "top 40%"
    }
})
tl.from(".brands .row1 img:nth-child(3)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 93%",
        end: "top 40%"
    }
})
tl.from(".brands .row1 img:nth-child(4)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 90%",
        end: "top 40%"
    }
})

tl.from(".brands .row1 img:nth-child(5)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 88%",
        end: "top 40%"
    }
})

tl.from(".brands .row1 img:nth-child(6)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row1",
        scrub: 3,
        start: "top 85%",
        end: "top 40%"
    }
})






tl.from(".brands .row2 img:nth-child(1)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 100%",
        end: "top 40%"
    }
})


tl.from(".brands .row2 img:nth-child(2)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 95%",
        end: "top 40%"
    }
})
tl.from(".brands .row2 img:nth-child(3)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 93%",
        end: "top 40%"
    }
})
tl.from(".brands .row2 img:nth-child(4)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 90%",
        end: "top 40%"
    }
})

tl.from(".brands .row2 img:nth-child(5)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 88%",
        end: "top 40%"
    }
})

tl.from(".brands .row2 img:nth-child(6)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row2",
        scrub: 3,
        start: "top 85%",
        end: "top 40%"
    }
})













tl.from(".brands .row3 img:nth-child(1)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 100%",
        end: "top 40%"
    }
})


tl.from(".brands .row3 img:nth-child(2)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 95%",
        end: "top 40%"
    }
})
tl.from(".brands .row3 img:nth-child(3)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 93%",
        end: "top 40%"
    }
})
tl.from(".brands .row3 img:nth-child(4)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 90%",
        end: "top 40%"
    }
})

tl.from(".brands .row3 img:nth-child(5)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 88%",
        end: "top 40%"
    }
})

tl.from(".brands .row3 img:nth-child(6)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row3",
        scrub: 3,
        start: "top 85%",
        end: "top 40%"
    }
})



tl.from(".brands .row4 img:nth-child(1)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row4",
        scrub: 3,
        start: "top 100%",
        end: "top 40%"
    }
})


tl.from(".brands .row4 img:nth-child(2)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row4",
        scrub: 3,
        start: "top 95%",
        end: "top 40%"
    }
})
tl.from(".brands .row4 img:nth-child(3)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row4",
        scrub: 3,
        start: "top 93%",
        end: "top 40%"
    }
})
tl.from(".brands .row4 img:nth-child(4)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row4",
        scrub: 3,
        start: "top 90%",
        end: "top 40%"
    }
})

tl.from(".brands .row4 img:nth-child(5)", {
    y: 200,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".brands .row4",
        scrub: 3,
        start: "top 88%",
        end: "top 40%"
    }
})




tl.from(".page6 .image1 ", {
    scale: 0,
    duration: 2,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page6",
        scrub: 2,
        start: "top 95%",
        end: "top 5%"
    }

})
gsap.from(".page7 .image2", {
    scale: 0,
    duration: 2,
    scrollTrigger: {
        scroller: "#main",
        trigger: ".page7",
        scrub: 2,
        start: "top 95%",
        end: "top 5%"
    }

})

tl.from(".page8 .head h1",{
    x:-800,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".page8 .head",
        scrub:2,
        start:"top 90%",
        end:"top 75%"
    }
    
    
})


tl.from(".cards .row1 .card1",{
    
    scale:0,
    duration:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:".page8 .cards",
        scrub:1,
        start:"top 100%",
        end:"top 50%"
    }
})
tl.from(".cards .row2 .card1",{
    
    scale:0,
    duration:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:".page8 .cards",
        scrub:1,
        start:"top 100%",
        end:"top 50%"
    }
})


tl.from(".page9 .video",{
    
    scale:0,
    scrollTrigger:{
        scroller:"#main",
        trigger:".page9",
        scrub:2,
        start:"top 100%",
        end:"top 0%"
    }
})


var col=document.querySelector(".page4 .row:nth-child(1) .col:nth-child(1)");
    col.addEventListener("mousemove",function(dets){
        gsap.to(".page4 .row:nth-child(1) .col:nth-child(1) .mousefollower1",{
            opacity:1,
            left:dets.x,
            top:dets.y

        })
    })
    col.addEventListener("mouseleave",function(dets){
        gsap.to(".page4 .row:nth-child(1) .col:nth-child(1) .mousefollower1",{
            opacity:0,
            left:dets.x-500,
            top:dets.y-500
        })
    })


   var col2=document.querySelector(".page4 .row:nth-child(1) .col:nth-child(2)");
   col2.addEventListener("mousemove",function(date){
    gsap.to(".page4 .row:nth-child(1) .col:nth-child(2) .mousefollower2",{
        opacity:1,
        left:date.x-900,
        top:date.y-200
    })
   })
   col2.addEventListener("mouseleave",function(date){
    gsap.to(".page4 .row:nth-child(1) .col:nth-child(2) .mousefollower2",{
        opacity:0,
        left:0,
        top:0
    })
})



   var col3=document.querySelector(".page4 .row:nth-child(2) .col:nth-child(1)");
   col3.addEventListener("mousemove",function(date){
    gsap.to(".page4 .row:nth-child(2) .col:nth-child(1) .mousefollower3",{
        opacity:1,
        left:date.x-900,
        top:date.y-200
    })
   })
   col3.addEventListener("mouseleave",function(date){
    gsap.to(".page4 .row:nth-child(2) .col:nth-child(1) .mousefollower3",{
        opacity:0,
        left:0,
        top:0
    })
})

   var col4=document.querySelector(".page4 .row:nth-child(2) .col:nth-child(2)");
   col4.addEventListener("mousemove",function(date){
    gsap.to(".page4 .row:nth-child(2) .col:nth-child(2) .mousefollower4",{
        opacity:1,
        left:date.x-900,
        top:date.y-200
    })
   })
   col4.addEventListener("mouseleave",function(date){
    gsap.to(".page4 .row:nth-child(2) .col:nth-child(2) .mousefollower4",{
        opacity:0,
        left:0,
        top:0
    })
})


   var col5=document.querySelector(".page4 .row:nth-child(3) .col:nth-child(1)");
   col5.addEventListener("mousemove",function(date){
    gsap.to(".page4 .row:nth-child(3) .col:nth-child(1) .mousefollower5",{
        opacity:1,
        left:date.x-900,
        top:date.y-200
    })
   })
   col5.addEventListener("mouseleave",function(date){
    gsap.to(".page4 .row:nth-child(3) .col:nth-child(1) .mousefollower5",{
        opacity:0,
        left:0,
        top:0
    })
})


var col6=document.querySelector(".page4 .row:nth-child(3) .col:nth-child(2)");
   col6.addEventListener("mousemove",function(date){
    gsap.to(".page4 .row:nth-child(3) .col:nth-child(2) .mousefollower6",{
        opacity:1,
        left:date.x-900,
        top:date.y-200
    })
   })
   col6.addEventListener("mouseleave",function(date){
    gsap.to(".page4 .row:nth-child(3) .col:nth-child(2) .mousefollower6",{
        opacity:0,
        left:0,
        top:0
    })
})