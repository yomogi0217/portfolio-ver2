'use strict';

particlesJS("particles-js", { "particles": { "number": { "value": 30, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#fff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 40, "height": 40 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 63.131811330581804, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1000 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });;

// $('.menu-sp-btn').click(function() {
//   $(this).toggleClass('open');
//   $('.sp-menu').toggleClass('open');
// })

$(function(){
        var sp_nav = $('.menu-sp-btn');
        var nav =$('.sp-menu');
        var main_cover = $('.sp-menu');


        sp_nav.on('click',function(){
            sp_nav.toggleClass('open');
            main_cover.toggleClass('open');

            //nav以外をタップした時
            if(main_cover.hasClass('open')){
                main_cover.on('click',function(){
                    sp_nav.removeClass('open');
                    main_cover.removeClass('open');
                });
            }
        });

});

$(function () {
    var topBtn = $('.page-top-btn');
    
  //ボタンの表示設定
$(window).scroll(function(){
    if($(this).scrollTop()>200){
      // 画面を200pxスクロールしたら、ボタンを表示する
        topBtn.addClass('active');
    }else{
      // 画面が200pxより上なら、ボタンを表示しない
        topBtn.removeClass('active');
        }
    });

  // ボタンをクリックしたら、スクロールして上に戻る
    topBtn.click(function(){
        $('body,html').animate({
        scrollTop: 0},500);
        return false;
    });

});
    
lightbox.option({
'alwaysShowNavOnTouchDevices':true,
'albumLabel': "画像番号 %1 of %2",
'disableScrolling': true,
'resizeDuration':12,
'showImageNumberLabel': false,
'wrapAround':true
})