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

    // form-submission

    $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbyeJxCD33GfTiPfzZqh_EJ4AqopIuAsIVH5Bp6VAzimBUNozHRwocKOq6teYk6jEYlYmw/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")

          }
      })
  })
  
});