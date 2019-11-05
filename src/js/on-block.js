
$(document).ready(function() {

  $('#container div').css('display','none');		   //Скрываем все блоки

  $("#test").change(function(){						 //При смене 
    $('#container div').css('display','none');  //Скрываем все открытые блоки
    id = $('#test option:selected').val();	   //Вытаскиваем value
    $('#'+id).show();								  //Показываем блок c таким же id как наш value
  });

});
