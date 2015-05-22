$(document).ready(function() {
 
  var owl = $(".carousel");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : false, //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
      autoPlay: 5000
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});

$(function(){

  $(".toggle").on("click", function(){

    $(".menu-nav ul").slideToggle();
  });

  $(".price").on("mouseenter", function() {

      $(this).animate({
        "margin-top": "0px"
        }, 350)

      $(this).children(".price-title").animate({
        "padding-top": "50px",
        "padding-bottom": "43px"
        }, 350)

      $(this).children(".price-num").animate({
        "font-size": "82px"
        }, 350)

      $(this).children("hr").animate({
        "margin-top" : "50px"
        }, 350)


      $(this).children(".price-license").animate({
        "padding-top": "40px"
        }, 350)

      $(this).children(".price-purchase").animate({
        "margin-top": "85px",
        "width": "190px",
        "height": "50px"
        }, 350)

  }).on("mouseleave", function() {

        $(this).animate({
        "margin-top": "50px"
        }, 350)
        
        $(this).children(".price-title").animate({
        "padding-top": "45px",
        "padding-bottom": "35px"
        }, 350)

        $(this).children(".price-num").animate({
        "font-size": "60px"
        }, 350)

        $(this).children("hr").animate({
        "margin-top" : "40px"
        }, 350)

        $(this).children(".price-license").animate({
        "padding-top": "30px"
        }, 350)

        $(this).children(".price-purchase").animate({
        "margin-top": "40px",
        "width": "160px",
        "height": "40px"
        }, 350)
      });
});