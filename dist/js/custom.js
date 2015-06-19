  function formValidasi()
  {
  
     var password = document.forms["formDaftar"]["password"].value;
	 var email = document.forms["formDaftar"]["email"].value;

	 if( email == null || email == "" )
		{	
		 $('.error1').show();	
		 $('.form__email').addClass('border__error');
		 return false;
		}
	 
	 else{
		 $('.error1').hide();
		 $('.form__email').removeClass('border__error');
		 }
		 
	 if( password == null || password == "" ) 
		{
         $('.error2').show();
		 $('.form__password').addClass('border__error');
        return false;
		}
		
	 else{
		  $('.error2').hide();
		  $('.form__password').removeClass('border__error');
		 }
		 
	 if ( password != null || password != "" && email != null || email != "" )
		 {
		 $('.berhasil').show();
		}
		
		else{
		$('.error2,error1').hide();
		}
  }
$(window).load(function() {	

	 

  

 $(document).ready(function() {
		var isRetina = (
		window.devicePixelRatio > 1 ||
		(window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches)
		);
	  });
	  
  $(document).ready(function() {
    $('.carousel').carousel({interval: 20000});
  });
  
  

$(document).ready(function(){
	$('.thumbnail__pic img').on('click',function() {
	
		var src = $(this).attr('src');
		
		$('.munculin').attr( 'src', src )
		$('#myModal').modal('show');     
	});  
});

});