jQuery(document).ready(function($) {
  //log in form DOM
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});
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
