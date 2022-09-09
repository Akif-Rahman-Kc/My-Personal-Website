$(document).ready(function(){

  $("#submit-form").validate({
    rules:{
      Name:{
        required:true,
      },
      Email:{
        required:true,
        email:true
      },
      Place:{
        required:true
      },
      Message:{
        required:true
      }
    },
    messages:{
      Name:"Enter your Name",
      Email:{
        required:"Enter your email address",
        email:"Please enter email address"
      },
      Place:"Enter your Place",
      textMessage:"Enter the Messages"
    }
  })

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
});