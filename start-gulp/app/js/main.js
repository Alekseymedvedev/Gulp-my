"use strict"

/****
 * кнопка меню
 */

let menuBtn = document.querySelectorAll('.menu__btn');

menuBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('menu__btn--active');
    document.querySelector('.menu').classList.toggle('menu__active');

  });
});


/**
 * отправка запроса на почту
 */

// $(document).ready(function () {

//   //E-mail Ajax Send
//   $("form").submit(function () { //Change
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "mail.php", //Change
//       data: th.serialize()
//     }).done(function () {
//       alert("Thank you!");
//       setTimeout(function () {
//         // Done Functions
//         th.trigger("reset");
//       }, 1000);
//     });
//     return false;
//   });

// });



/*****
 * слайдеры
 */

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     clickable: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   keyboard: true,
//   breakpoints: {
//     1070: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//   },

// });




// /***
//  * модальное окно
//  */
// $(function () {
//   $('.popup-modal').magnificPopup({
//     type: 'inline',
//     preloader: false,
//     focus: '#username',
//     modal: true,
//     slidesPerView: true
//   });
//   $(document).on('click', '.popup-modal-dismiss', function (e) {
//     e.preventDefault();
//     $.magnificPopup.close();
//     return false;
//   });
// });




/**
 * акордион
 */

// var acc = document.getElementsByClassName("accordion__btn");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {

//     this.classList.toggle("active");

//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }





/**
 * видео
 */


// let f12youtube;

// f12youtube = {
//   findVideos: function () {
//     let videos = document.querySelectorAll('.video');

//     for (let i = 0; i < videos.length; i++) {
//       this.setupVideo(videos[i]);
//     }
//   },

//   setupVideo: function (video) {
//     let link = video.querySelector('.video__link');
//     let media = video.querySelector('.video__media');
//     let button = video.querySelector('.video__button');
//     let id = this.parseMediaURL(media);

//     video.addEventListener('click', () => {
//       let iframe = this.createIframe(id);

//       link.remove();
//       button.remove();
//       video.appendChild(iframe);
//     });

//     link.removeAttribute('href');
//     video.classList.add('video--enabled');
//   },

//   parseMediaURL: function (media) {
//     let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
//     let url = media.src;
//     let match = url.match(regexp);

//     return match[1];
//   },

//   createIframe: function (id) {
//     let iframe = document.createElement('iframe');

//     iframe.setAttribute('allowfullscreen', '');
//     iframe.setAttribute('allow', 'autoplay');
//     iframe.setAttribute('src', this.generateURL(id));
//     iframe.classList.add('video__media');

//     return iframe;
//   },

//   generateURL: function (id) {
//     let query = '?rel=0&showinfo=0&autoplay=1';

//     return 'https://www.youtube.com/embed/' + id + query;
//   }
// };


// f12youtube.findVideos();


