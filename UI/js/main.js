jQuery(document).ready(function($) {
//view entry pop up
 var contentModal = $('.content-modal');
 $("#view").on("click", function(e) {
  e.preventDefault();
  $(contentModal).toggleClass('content-modal-show');
 });
 $(".overlay").on("click", function() {
  $(contentModal).toggleClass('content-modal-show');
 });
 $(".content-modal_close").on("click", function() {
  $(contentModal).toggleClass('content-modal-show');
 });
 $(".mobile-close").on("click", function() {
  $(contentModal).toggleClass('content-modal-show');
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
});
