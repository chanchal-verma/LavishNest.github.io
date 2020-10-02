// welcome page
$(window).on('load', function () {
   $('#Mymodal').modal('show');
});

$(document).ready(function () {

   $('#mymodal1').modal('show');

   $('#mymodal2').modal('show');

   $(function () {
      $("#exzoom").exzoom({
         "autoPlay":false
      });
   });

 


   //jQuery for back to top
   var amountScrolled = 300;

   $(window).scroll(function () {
      if ($(window).scrollTop() > amountScrolled) {
         $('a.back-to-top').fadeIn('slow');
      } else {
         $('a.back-to-top').fadeOut('slow');
      }
   });

   // jQuery for overlay
   $("#open").click(function () {
      $("#myNav").fadeIn(1000);
      $("#whole-content").hide();
   });

   $(".closebtn").click(function () {
      $("#myNav").fadeOut();
      $("#whole-content").show();
   });

   $(".dropdown-btn").click(function () {
      $("#Dropdown").slideToggle(500);
   });

   $(function () {
      $("#accordion").accordion();
   });



   //jQuery for search Box
   $("#search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#document li").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });

   $("#search-button").click(function () {
      var input = $("#search").val().toLowerCase();
      console.log(input)
      if (input === 'sofas and couches') {
         $("form").attr("action", "SofasAndCouches.html")
      }
      else if (input === 'beds') {
         $("form").attr("action", "beds.html")
      }
      else if (input === 'chairs') {
         $("form").attr("action", "chairs.html")
      }
      else if (input === 'dinning table') {
         $("form").attr("action", "DinningTable.html")
      }
      else {
         $("form").attr("action", "Index.html")
      }
   });


   //jQuery for input spinner
   $('.spinner input').keydown(function (e) {
      e.preventDefault();
      return false;
   });
   var minNumber = 1;
   var maxNumber = 10;
   $('.spinner .btn:first-of-type').on('click', function () {
      if ($('.spinner input').val() == maxNumber) {
         return false;
      } else {
         $('.spinner input').val(parseInt($('.spinner input').val(), 10) + 1);
      }
   });

   $('.spinner .btn:last-of-type').on('click', function () {
      if ($('.spinner input').val() == minNumber) {
         return false;
      } else {
         $('.spinner input').val(parseInt($('.spinner input').val(), 10) - 1);
      }
   });


   //sign-up and login form validations
   $("#name").keypress(function () {
      $("#namee").text("");
   });

   $("#email").keypress(function () {
      $("#Emaill").text("");
   });

   $("#Password1").keypress(function () {
      $("#password").text("");
   });

   $("#conPassword").keypress(function () {
      $("#conpass").text("");
   });


   //validations of sign-up form
   $("#sign-up").submit(function () {
      //  validations of name
      var error = false;

      var Name = $("#name").val().trim();

      if (Name == "") {
         $("#namee").text("**Name cannot be empty**");
         error = true;
      }
      else if (Name.length < 2) {
         $("#namee").text("**Please Enter a correct Name**");
         error = true;
      }
      else if (!isNaN(Name)) {
         $("#namee").text("**Please Enter an alphabet**");
         error = true;
      }

      //validatios of Email
      var Email = $("#email").val().trim();

      if (Email == "") {
         $("#Emaill").text("**Email cannot be empty**");
         error = true;
      }

      //validations of Password
      var Pass = $("#Password1").val().trim();

      if (Pass == "") {
         $("#password").text("**Please enter your Pasword**");
         error = true;
      }
      else if (Pass.length < 8) {
         $("#password").text("**Password should have atleast 8 characters**");
         error = true;
      }
      else if (Pass.search(/[a-z]/) == -1) {
         $("#password").text("**Password should have atleast 1 Lower Case character**");
         error = true;
      }
      else if (Pass.search(/[A-Z]/) == -1) {
         $("#password").text("**Password should have atleast 1 Upper Case character**");
         error = true;
      }
      else if (Pass.search(/[0-9]/) == -1) {
         $("#password").text("**Password should have atleast 1 numeric character**");
         error = true;
      }
      else if (Pass.search(/[\@\#\!\$\%\^\&\*\(\)\<\>\?]/) == -1) {
         $("#password").text("**Password should have atleast 1 Special character**");
         error = true;
      }

      //validations ofconfirm-password
      var conpas = $("#conPassword").val().trim();

      if (conpas == "") {
         $("#conpass").text("**Please confirm your Password**");
         error = true;
      }
      else if (conpas !== Pass) {
         $("#conpass").text("**Password doesn't match**");
         error = true;
      }

      // validation for checkox
      if ($("#confirmation").is(":not(:checked)")) {
         $("#confirm").text("**Please agree to our terms and conditions**");
         error = true;
      }
      else {
         $("#confirm").text("");
      }

      if (error) {
         return false;
      }
      return true;
   });
   //--------------------------//




   // validations for login-form
   $("#login").submit(function () {
      //validations of Email
      var error = false;
      var Email = $("#emaill").val().trim();

      if (Email == "") {
         $("#Emailll").text("**Email cannot be empty**");
         error = true;
      }

      //validations of Password
      var Pass = $("#Passwordd1").val().trim();

      if (Pass == "") {
         $("#passwordd").text("**Please enter your Pasword**");
         error = true;
      }
      else if (Pass.length < 8) {
         $("#passwordd").text("**Password should have atleast 8 characters**");
         error = true;
      }
      else if (Pass.search(/[a-z]/) == -1) {
         $("#passwordd").text("**Password should have atleast 1 Lower Case character**");
         error = true;
      }
      else if (Pass.search(/[A-Z]/) == -1) {
         $("#passwordd").text("**Password should have atleast 1 Upper Case character**");
         error = true;
      }
      else if (Pass.search(/[0-9]/) == -1) {
         $("#passwordd").text("**Password should have atleast 1 numeric character**");
         error = true;
      }
      else if (Pass.search(/[\@\#\!\$\%\^\&\*\(\)\<\>\?]/) == -1) {
         $("#passwordd").text("**Password should have atleast 1 Special character**");
         error = true;
      }

      if (error) {
         return false;
      }
      return true;
   });
   //----------------------------//



$("#exp").datepicker({
   changeMonth: true,
   changeYear: true,
   dateFormat: "mm-yy",
   minDate: "07-2020",
});


// Checkout form validations

$("#fname").keypress(function () {
   $("#Fname").text("");
   $("#fname").attr("style", "border-bottom:1px solid green!important");
});
$("#lname").keypress(function () {
   $("#Lname").text("");
   $("#lname").attr("style", "border-bottom:1px solid green!important");
});
$("#uname").keypress(function () {
   $("#Uname").text("");
   $("#uname").attr("style", "border-bottom:1px solid green!important");
});
$("#Email").keypress(function () {
   $("#E-mail").text("");
   $("#Email").attr("style", "border-bottom:1px solid green!important");
});
$("#inputAddress").keypress(function () {
   $("#Address1").text("");
   $("#inputAddress").attr("style", "border-bottom:1px solid green!important");
});
$("#inputAddress2").keypress(function () {
   $("#Address2").text("");
   $("#inputAddress2").attr("style", "border-bottom:1px solid green!important");
});
$("#country").change(function () {
   $("#Country").text("");
   $("#country").attr("style", "border-bottom:1px solid green!important");
});
$("#state").change(function () {
   $("#State").text("");
   $("#state").attr("style", "border-bottom:1px solid green!important");
});
$("#Zip-Code").keypress(function () {
   $("#Zip").text("");
   $("#Zip-Code").attr("style", "border-bottom:1px solid green!important");
});
$("#cname").keypress(function () {
   $("#Cname").text("");
   $("#cname").attr("style", "border-bottom:1px solid green!important");
});
$("#ccnumber").keypress(function () {
   $("#CCnumber").text("");
   $("#ccnumber").attr("style", "border-bottom:1px solid green!important");
});
$("#cvv").keypress(function () {
   $("#CVV").text("");
   $("#cvv").attr("style", "border-bottom:1px solid green!important");
});




$('#CheckOut-Form').submit(function () {
   var error = false;
   var first_name = $('#fname').val().trim();
   var last_name = $('#lname').val().trim();
   var user_name = $('#uname').val().trim();
   var email = $('#Email').val().trim();
   var Address1 = $('#inputAddress').val().trim();
   var Address2 = $('#inputAddress2').val().trim();
   var Country = $("#country").val();
   var State = $("#state").val();
   var Zip = $("#Zip-Code").val().trim();
   var cname = $("#cname").val().trim();
   var ccnumber = $("#ccnumber").val().trim();
   var exp = $("#exp").val().trim();
   var cvv = $("#cvv").val().trim();




   //   validations of first name 
   if (first_name == "") {
      $('#Fname').text('**This field is required**');
      $("#fname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (first_name.length < 2) {
      $('#Fname').text('**Please enter a correct Name**');
      $("#fname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (!isNaN(first_name)) {
      $("#Fname").text("**Please Enter an alphabet**");
      $("#fname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }


   //validations for last name
   if (last_name == "") {
      $('#Lname').text('**This field is required**');
      $("#lname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (last_name.length < 2) {
      $('#Lname').text('**Please enter a correct lastName**');
      $("#lname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (!isNaN(last_name)) {
      $("#Lname").text("**Please Enter an alphabet**");
      $("#lname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }


   //validations for user name
   if (user_name == "") {
      $('#Uname').text('**This field is required**');
      $("#uname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (user_name.length < 2) {
      $('#Uname').text('**Please enter a correct userName**');
      $("#uname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }

   //validations for email-id
   if (email == "") {
      $('#E-mail').text('**This field is required**');
      $("#Email").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (IsEmail(email) == false) {
      $('#E-mail').text('**Please Enter a valid Email-id**');
      $("#Email").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   //validations of Address1
   if (Address1 == "") {
      $('#Address1').text('**This field is required**');
      $("#inputAddress").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (Address1.length < 0) {
      $('#Address1').text('**Length of Address should be atleast 200**');
      $("#inputAddress").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (Address1.length > 500) {
      $('#Address1').text('**Length of Address should be atmost 500**');
      $("#inputAddress").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }


   //validations of Address2
   if (Address2 == "") {
      $('#Address2').text('**This field is required**');
      $("#inputAddress2").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (Address2.length < 0) {
      $('#Address2').text('**Length of Address should be atleast 200**');
      $("#inputAddress2").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (Address2.length > 500) {
      $('#Address2').text('**Length of Address should be atmost 500**');
      $("#inputAddress2").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   //validations of Country
   if (Country == "") {
      $('#Country').text('**This field is required**');
      $("#country").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   //validations of State
   if (State == "") {
      $('#State').text('**This field is required**');
      $("#state").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   //validations for zip code
   if (Zip == "") {
      $('#Zip').text('**This field is required**');
      $("#Zip-Code").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (Zip.length < 6) {
      $('#Zip').text('**Please Enter a Valid Zip code**');
      $("#Zip-Code").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   //validations for payment method
   if ($("input[type=radio][name=radio-stacked]:checked").length == 0) {
      $('#Payment').text('**Please Choose Your Payment Mode**');
      error = true;
   }
   else {
      $('#Payment').text('');

   }
   //validations for Name on Card
   if (cname == "") {
      $('#Cname').text('**This field is required**');
      $("#cname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (cname.length < 2) {
      $('#Cname').text('**Please enter a correct Name**');
      $("#cname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }
   else if (!isNaN(cname)) {
      $("#Cname").text("**Please Enter an alphabet**");
      $("#cname").attr("style", "border-bottom:1px solid red!important")
      error = true;
   }

   //validations for card number
   if (ccnumber == "") {
      $('#CCnumber').text('**This field is required**');
      $("#ccnumber").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (ccnumber.length < 16) {
      $('#CCnumber').text('**Please Enter a Valid card number**');
      $("#ccnumber").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   //validations for date
   if (exp == "") {
      $('#Exp').text('**This field is required**');
      $("#exp").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else {
      $('#Exp').text('');
      $("#exp").attr("style", "border-bottom:1px solid green!important");

   }


   //validations for cvv
   if (cvv == "") {
      $('#CVV').text('**This field is required**');
      $("#cvv").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }
   else if (cvv.length < 3) {
      $('#CVV').text('**Please Enter a Valid cvv**');
      $("#cvv").attr("style", "border-bottom:1px solid red!important");
      error = true;
   }

   if (error) {
      return false;
   }
   else {
      return true;
   }

});


});
function IsEmail(email) {
   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if (!regex.test(email)) {
      return false;
   } else {
      return true;
   }
}


//javascript for swiper 
var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',
   coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
   },
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: '.swiper-pagination',
   },
});


// javascript for removal of product from cart
var RemoveCartItemButton = document.getElementsByClassName("remove");
for (var i = 0; i < RemoveCartItemButton.length; i++) {
   var button = RemoveCartItemButton[i];
   button.addEventListener("click", function (element) {
      var buttonClicked = element.target
      buttonClicked.parentElement.parentElement.hide;

   });
}
