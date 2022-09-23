// class mySlider extends HTMLElement {
//     connectedCallback() {
//       this.innerHTML = `
//         <div class="swiper-slide">Slide 1</div>
//         <div class="swiper-slide">Slide 2</div>
//         <div class="swiper-slide">Slide 3</div>
//         <div class="swiper-slide">Slide 4</div>
//         <div class="swiper-slide">Slide 5</div>
//         <div class="swiper-slide">Slide 6</div>
//         <div class="swiper-slide">Slide 7</div>
//         <div class="swiper-slide">Slide 8</div>
//         <div class="swiper-slide">Slide 9</div>
//       `;
//     }
//   }

//   customElements.define('main-slidey', mySlider);


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    duration : 5,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
  });


  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 4,
    spaceBetween: 2,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable debugger
    debugger: true,
  });


  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2,
    spaceBetween: 2,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    debugger: true,
  });
  
  
