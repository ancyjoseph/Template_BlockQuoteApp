$(document).ready(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      $('.splash').css({
        'background-position': '0px -'+(top/3).toFixed(2)+'px'
      });
      if(top > 50)
        $('#home > .navbar').removeClass('navbar-transparent');
      else
        $('#home > .navbar').addClass('navbar-transparent');
  });

  $("a[href='#']").click(function(e) {
    e.preventDefault();
  });
  /* Custom JS */
  $("#product_XX11").click(function(){
      $(".flip_products").slideToggle("slow");
      $(".panel_XX11").show();
  });
  $("#component_XX11").click(function(){
      $(".flip_component").slideToggle("slow");
      $(".panel_DimXX11").show();
  });
  $("#dim_XX11").click(function(){
      $(".flip_dimension").slideToggle("slow");
      $(".panel_submit").show();
  });
  $("#send_quote").click(function(){
      alert("Thank you. You will recieve an order confirmation in your email.");
  });
});