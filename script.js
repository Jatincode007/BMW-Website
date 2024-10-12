function locoscroll() {

    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

};

function cursoreffect() {

    var page1 = document.querySelector(".page1-content");

    page1.addEventListener("mousemove", function (e) {
        gsap.to(".cursor", {
            x: e.x,
            y: e.y

        })
    })

    page1.addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            opacity: 1,
            scale: 1,
            transition: 250

        })

    });


    page1.addEventListener("mouseleave", function () {
        gsap.to(".cursor", {
            opacity: 0,
            scale: 0,
            transition: 250


        })


    var nav=document.querySelector("nav");
    var steer=document.querySelector(".cursor");
    nav.addEventListener("mouseenter" ,function(){
        steer.style.display="none";

    })
    nav.addEventListener("mouseleave" ,function(){
        steer.style.display="flex";

    })



    });
};

cursoreffect();

function rejoy() {



    gsap.from("#re", {

        y: 120,
        opacity: 0.2,
        stagger: 0.1,
        duration: 1.5,
        delay: 0.5
    });

    gsap.from("#logo", {

        y: -140,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        delay: 0

    });

    var loader = document.querySelector(".loader");

    setTimeout(function () {


        loader.style.display = "none";
        document.querySelector("#re").style.display = "none";


    }, 4360);


    gsap.from(".loader h1", {


        stagger: 0.2,
        y: 150,
        opacity: 0,
        delay: 1.7,
        stagger: 0.1,
        duration: 1.5,
    });



};

rejoy();


function page2anime() {

    gsap.from(".page2 h2", {

        y: 50,
        opacity: 0,
        duration: 1.5,


    });

    gsap.from(".page2 h1", {

        y: 120,
        opacity: 0,
        duration: 1.5,


    });


};

page2anime();

function page5() {

    var num = 1000000;


    setInterval(function () {

       
            num+=100;
            document.querySelector(".page5 span").textContent = num;
            document.querySelector(".page5 span").style.opacity = "0.7";



       
           

       




    }, 100)

};


page5();

function cursoreffect2() {

    var page5c = document.querySelector(".page5");

    page5c.addEventListener("mousemove", function (e) {

        gsap.to(".cursor2", {

            y: e.y,
            x: e.x
        })
    });

    page5c.addEventListener("mouseenter", function () {
        gsap.to(".cursor2", {
            opacity: 1,
            scale: 1,
            transition: 250

        })

    });


    page5c.addEventListener("mouseleave", function () {
        gsap.to(".cursor2", {
            opacity: 0,
            scale: 0,
            transition: 250


        })

    });

};

cursoreffect2();

function page7() {

    var myscroll = document.querySelector(".swiper");

    myscroll.addEventListener("mouseenter", function () {
        gsap.to(".swiper img", {
            opacity: 1,
            x: -400,
            duration: 12,
            transition: 250,
        })
    })

    myscroll.addEventListener("mouseleave", function () {
        gsap.to(".swiper img", {
            opacity: 1,
            x: 500,
            duration: 30,
            transition: 250,
        })
    })

};

page7();

function elem() {

    var h1scroll = document.querySelector(".elem1");

    h1scroll.addEventListener("mouseenter", function () {
        gsap.to("h1", {
            opacity: 1,
            duration: 1,
            y: 30,
            transition: 250,
        })
    })


};

elem();

































