// Locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// SwiperJs
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
});

// function for image change effect of page 3 
function changeImagePage3() {
    let fixed = document.querySelector("#fixed");
    let elemC = document.querySelector(".elem-container");
    elemC.addEventListener("mouseenter", function() {
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave", function() {
        fixed.style.display = "none";
    })

    let elems = document.querySelectorAll(".elem")
    elems.forEach(function(e) {
        e.addEventListener("mouseenter", function() {
            let image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

// function for image and data change effect of page 4
function changeImgAndDataPage4() {
    let bgImg = document.querySelector("#page4-b-img");
    let p1 = `Our team works with our clients to refine an idea<br>
        and concept into an executable design. We create<br> 
        a final design that encompasses the brand<br> 
        narrative to bring stories to life and provide end-<br>
        to-end design solutions from concept, design, and<br> 
        architectural drawings to 3D renderings.`;
    let p2 = `Once we have a design, our production team<br> 
        takes the lead in bringing it to life. We manage all<br> 
        stages of the project, from build specifications and<br> 
        technical drawings to site surveys, vendor<br> 
        management, and 2D & 3D production. We have<br> 
        an extensive network of partners to meet each<br> 
        unique design and project need.`;
    let p3 = `We’re with you every step of the way, from the<br> 
        project initiation to launch day. Our production and<br> 
        design teams are onsite to direct and guide the<br> 
        process down to the last point of completion,<br> 
        ensuring success across the built space and<br> 
        experience.`;

    let ha = document.querySelector(".h1-1");
    let hb = document.querySelector(".h1-2");
    let hc = document.querySelector(".h1-3");
    let info = document.querySelector("#p-div");

    ha.addEventListener("click", function() {
        let img = ha.getAttribute("image-info");

        ha.style.color = `white`;
        hb.style.color = `#504A45`;
        hc.style.color = `#504A45`;

        ha.style.borderLeft = `solid orangered`;
        hc.style.borderLeft = `solid #504A45`;
        hb.style.borderLeft = `solid #504A45`;

        info.innerHTML = p1;
        bgImg.innerHTML = `<img src="${img}" alt="#" id="bgImg">`
    })
    hb.addEventListener("click", function() {
        let img = hb.getAttribute("image-info");

        hb.style.color = `white`;
        ha.style.color = `#504A45`;
        hc.style.color = `#504A45`;

        hb.style.borderLeft = `solid orangered`;
        ha.style.borderLeft = `solid #504A45`;
        hc.style.borderLeft = `solid #504A45`;

        info.innerHTML = p2;
        bgImg.innerHTML = `<img src="${img}" alt="#" id="bgImg">`
    })
    hc.addEventListener("click", function() {
        let img = hc.getAttribute("image-info");

        hc.style.color = `white`;
        ha.style.color = `#504A45`;
        hb.style.color = `#504A45`;

        hc.style.borderLeft = `solid orangered`;
        ha.style.borderLeft = `solid #504A45`;
        hb.style.borderLeft = `solid #504A45`;

        info.innerHTML = p3;
        bgImg.innerHTML = `<img src="${img}" alt="#" id="bgImg">`
    })
}


// function for menu overlay animation
function menuOverlay() {
    let menu = document.querySelector("#sd")
    let menuOverlay = document.querySelector("#menu-overlay")
    let shadow = document.querySelector("#shadow")
    let logo = document.querySelector("#logo")
    let menu_op = document.querySelector("#menu-op")
    let key = 1
    menu.addEventListener("click", function() {
        if (key == 1) {
            shadow.style.top = 0
            menuOverlay.style.top = 0
            logo.style.opacity = 0
            logo.style.transition = "0.4s"
            menu_op.style.transition = "0.1s"
            menu_op.style.opacity = "100%"
            key = 0
        } else {
            shadow.style.top = "-100%"
            menuOverlay.style.top = "-100%"
            logo.style.opacity = "100%"
            logo.style.transition = "0.9s"
            menu_op.style.opacity = 0
            menu_op.style.transition = "0.9s"
            key = 1
        }

    })
}


// Function call
changeImagePage3();
changeImgAndDataPage4();
menuOverlay();