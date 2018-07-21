jQuery(document).ready(function($) {
//view entry pop up
$('.entry-popup').on('click', function(){
  $('.pop-up-screen, .overlay').fadeIn();
});

$('.close, .overlay').on('click', function(){
  $('.pop-up-screen, .overlay').fadeOut();
});
//Add entry pop up
 $("#addEntry").on("click", function() {
  $(".mask").addClass("active");
 });


 function closeModal() {
  $(".mask").removeClass("active");
 }

 $(".close, .mask").on("click", function() {
  closeModal();
 });

 $(document).keyup(function(e) {
  if (e.keyCode == 27) {
   closeModal();
  }
 });
 //
});
