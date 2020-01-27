$(function() {
	 $('form.main__form').validate({
        rules: {
          fname: {
            required: true
          }
         
        },
        messages: {
          fname: '',
         
       }
   });

	
});