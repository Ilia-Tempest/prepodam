
$(function() {
	$('#btn-up').on('click', function(){
    $('html, body').animate({scrollTop : 0}, 600);
  });
           
$('.personal-item').each(function(){
     var main = $(this).find('.personal-item__main');
     var edit = $(this).find('.personal-item__edit');
         save_btn = $(this).find('#edit');
         edit_btn = $(this).find('#save');
     $(this).find('#edit').click(function(){
      main.hide();
      edit.show();
     });
    $(this).find('#save').click(function(){
     main.show(100);
     edit.hide(100);
    })
   });
 	$('#add-inputs').on('click', function(){
		var clone = $('.personal-item__inputs').clone();
		clone.insertAfter('.personal-item__inputs').addClass('personal-item__clone').removeClass('personal-item__inputs');
	});
 	$('#add-city').on('click', function(){
		var clone = $('#city').clone();
		clone.insertAfter('#city');
	});

	$('#add-educate').on('click', function(){
      var clone = $('.educate-block').clone();
      clone.insertAfter('.educate-block').addClass('educate-block__clone').removeClass('educate-block');
    });
      $('#add-experience').on('click', function(){
        var clone = $('.experience-block').clone();
        clone.insertAfter('.experience-block').addClass('experience-block__clone').removeClass('experience-block');
      });
       
			 $('input[type="radio"]').click( function(){
		        if($(this).attr("checked") == 'checked') {  
                   $(this).removeAttr('checked');
               } else {
                	$(this).attr('checked', 'checked')
            	}
            });
    $('#del').on('click', function(){
      $('input:checked + label.personal-item__social').hide();
    });
    $('.right-sidebar__showbtn').on('click', function(){
    $('.right-sidebar__wrap').slideToggle();
    if ($('.right-sidebar__showbtn').hasClass('active')) {
      $('.right-sidebar__showbtn').removeClass('active');
    } else 
      $('.right-sidebar__showbtn').addClass('active');
    });

    $('.my-orders__button').on('click', function(){
    $('.my-orders__wrap').slideToggle();
    if ($('.my-orders__button').hasClass('active')) {
      $('.my-orders__button').removeClass('active');
    } else 
      $('.my-orders__button').addClass('active');
    });

    $('.block-item').each(function(){
      var btn = $(this).find('#show-form');
      var form = $(this).find('.evaluation');
      btn.click(function(){
        form.slideToggle();
      });
    });


    $('#add-rev').on('click', function(){
      $('.evaluation').show(100);
    })

     $('#add-mes').on('click', function(){
      $('.message').show(100);
    })

     $('#del-reward').on('click', function(){
      $('.personal-item__descr_edit').hide();
      $('#del-reward').hide();
     
     });

    $('#ochno').click(function(){
        if($(this).attr("checked") == 'checked') {  
          $('.personal-item__city-wrap').show();
      } else {
        $('.personal-item__city-wrap').hide();
    }
    })

    $('#my').click(function(){
                  if($(this).attr("checked") == 'checked') {  
                    $('#all').removeAttr('checked');
                    $('.right-sidebar__wrap-block').hide();
                } else {
                   $('.right-sidebar__wrap-block').show();
                }
              });
              $('#all').click(function(){
                  if($(this).attr("checked") == 'checked') {  
                    $('#my').removeAttr('checked');
                    $('.right-sidebar__wrap-block').hide();
                } else {
                   $('.right-sidebar__wrap-block').show();
                } 
              });
    
});